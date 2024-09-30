import React from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import GoogleMaps from "../../../component/GoogleMap/googleMps";
import MemberCard from "../../../component/MemberCard/memberCard";
import Tabs from "../../../component/Tabs/tabs";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query"; // Ensure the import is correct
import axios from "axios";
import { devURL } from "../../../../contsants/endPoints";
import { fetchUserProfile } from "../../../controllers/user/profile";
import { useUserProfile } from '../../../controllers/user/profile';
import Track from "../../../component/tracking";
import Track_v1 from "../../../component/tracking";
import { useProtectedRoute } from "../../../hooks/useProtectedRoute";
import { useAuth } from '../../../context/auth';

const Dashboard = () => {
  useProtectedRoute('user'); // Protect this page

  const { user, logout } = useAuth();

  const { isPending, error, userProfile } = useUserProfile();


  return (

    // <ProtectedRoute>

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
    // </ProtectedRoute>
  );
};

export default Dashboard;
