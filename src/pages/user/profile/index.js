// import React, { useEffect, useState } from "react";
// import DefaultLayout from "../../../component/Layouts/DefaultLayout";
// import { useRouter } from "next/router";
// import { getUserProfile } from "../../../controllers/user/profile";
import Profile from "../../../component/profile";

// const Profile = () => {
//   const router = useRouter();
//   const [profileData, setProfileData] = useState(null); // State to hold the profile data
//   const [loading, setLoading] = useState(true); // State for loading status

//   const fetchProfile = async () => {
//     try {
//       const response = await getUserProfile()

//       setProfileData(response?.data?.user); // Assuming response contains data
//     } catch (error) {
//       console.error('Error fetching profile:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Define an async function inside useEffect to handle async/await

//     fetchProfile(); // Call the async function

//   }, []); // Add dependencies like router and tokenDecoded
//   console.log('final --------', profileData);

//   return (
//     <DefaultLayout
//       profile={profileData}
//     >
//       {loading ? (
//         <p>Loading profile...</p>
//       ) : profileData ? (
//         <>
//         
//         </>
//       ) : (
//         <p>No profile data available</p>
//       )}
//     </DefaultLayout>
//   );
// };

// export default Profile;





import React from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import GoogleMaps from "../../../component/GoogleMap/googleMps";
import MemberCard from "../../../component/MemberCard/memberCard";
import Tabs from "../../../component/Tabs/tabs";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query"; // Ensure the import is correct
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { devURL } from "../../../../contsants/endPoints";

// import {fetchUserProfile} from '../../../controllers/user/profile'

// const fetchProfileDetails = async () => {
//   const token = sessionStorage.getItem('token');
//   const response = await axios.get(`http://192.168.0.172:8000/user/profile`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.data.user; // Assuming response contains user data
// };

const ProfileScreen = () => {
  const router = useRouter();
  const { tokenVilidity } = useAuth();
  // tokenVilidity(router, 'user');
  let token = ''
  if (typeof window !== 'undefined') {

    token = sessionStorage.getItem('token')
  }
  const { isPending, error, data: user } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>

      fetch(`${devURL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then((res) =>
        res.json(),
      ),
  })
  // if (isLoading) {
  //   return <p>Loading profile...</p>;
  // }

  // if (isError) {
  //   return <p>Error fetching profile data.</p>;
  // }
  console.log(user, '??--------- leaked ');

  return (
    <DefaultLayout profile={user}>
      {user ? (
        <>
          {/* <GoogleMaps /> */}
          <Profile
            profile={user}

          />
        </>
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default ProfileScreen;
