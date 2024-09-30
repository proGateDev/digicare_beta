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
import { fetchUserProfile } from "../../../controllers/user/profile";
import { useUserProfile } from '../../../controllers/user/profile';
import Track from "../../../component/tracking";
import Track_v1 from "../../../component/tracking";


const Dashboard = () => {

  const { isPending, error, userProfile } = useUserProfile();


  return (
    <DefaultLayout
      profile={userProfile?.user}
    >
      {userProfile ? (
        <>
          {/* <GoogleMaps /> */}
          <Tabs />
          <MemberCard />
          <Track />
          <Track_v1 />
        </>
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default Dashboard;
