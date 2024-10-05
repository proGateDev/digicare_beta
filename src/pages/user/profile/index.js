
import React from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
// import GoogleMaps from "../../../component/GoogleMap/googleMps";
import MemberCard from "../../../component/MemberCard/memberCard";
// import Tabs from "../../../component/Tabs/tabs";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query"; // Ensure the import is correct
import axios from "axios";
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
