import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../../component/Layouts/DefaultLayout";

import { useRouter } from "next/router";
import { getUserMembers } from "../../../../controllers/user/member";
import { getUserProfile } from "../../../../controllers/user/profile";
import { Table } from "../../../../component/table";

const MemberList = () => {

  const [profileData, setProfileData] = useState(null); // State to hold the profile data
  const [userMemberData, setUserMemberData] = useState(null); // State to hold the profile data
  const [loading, setLoading] = useState(true); // State for loading status

  const fetchProfile = async () => {
    try {
      const response = await getUserProfile()

      setProfileData(response?.data?.user); // Assuming response contains data
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };


  const fetchUserMemberData = async () => {
    try {
      const response = await getUserMembers()

      setUserMemberData(response?.data?.members); // Assuming response contains data
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    // Define an async function inside useEffect to handle async/await

    fetchProfile(); // Call the async function
    fetchUserMemberData()
  }, []); // Add dependencies like router and tokenDecoded
  // console.log('final --------', profileData);

  return (
    <DefaultLayout
      profile={profileData}
    >
      {loading ? (
        <p>Loading profile...</p>
      ) : profileData ? (
        <Table
          userMemberData={userMemberData}

        />
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default MemberList;
