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
import { useUserMembers } from '../../../controllers/user/member';
import { useProtectedRoute } from "../../../hooks/useProtectedRoute";
import { useAuth } from '../../../context/auth';
import Teams from '../../../component/teams'
import UserTrack from "../../../component/userTracking";

const Dashboard = () => {
  useProtectedRoute();
  const { user, logout } = useAuth();

  const { isPending, error, userProfile } = useUserProfile();

  const { userMembers } = useUserMembers();
  console.log('userMembers ---', userMembers?.members);

  return (

    <DefaultLayout
      profile={userProfile?.user}
    >

      {userProfile ? (
        <>
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:container">
              <GoogleMaps />
              {/* <UserTrack /> */}
              <MemberCard
                members={userMembers?.members}
              />


              {/* {userMembers.map()=>(
            )} */}
            </div>
            <div className="w-full md:w-1/3 p-4">
              <Teams />
            </div>
          </div>
        </>
      ) : (
        <p>No profile data available</p>
      )}

    </DefaultLayout>
  );
};

export default Dashboard;
