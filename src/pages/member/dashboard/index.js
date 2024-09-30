import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import GoogleMaps from "../../../component/GoogleMap/googleMps";
import MemberCard from "../../../component/MemberCard/memberCard";
import Tabs from "../../../component/Tabs/tabs";
import { useRouter } from "next/router";
import { getMemberProfile } from "../../../controllers/member/profile";
import MemberTrack from '../../../component/memberTracking'


const Dashboard = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState(null); // State to hold the profile data
  const [loading, setLoading] = useState(true); // State for loading status

  const fetchProfile = async () => {
    try {
      const response = await getMemberProfile()
      // console.log('resps --------<', response);

      setProfileData(response?.data?.user); // Assuming response contains data
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Define an async function inside useEffect to handle async/await

    fetchProfile(); // Call the async function

  }, []); // Add dependencies like router and tokenDecoded
  // console.log('final --------', profileData);

  return (
    <DefaultLayout
      isMember={true}
      profile={profileData}
    >
      {loading ? (
        <p>Loading profile...</p>
      ) : profileData ? (
        <>
          {/* <GoogleMaps /> */}
          <Tabs />
          {/* <MemberCard /> */}
          <MemberTrack/>
        </>
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default Dashboard;
