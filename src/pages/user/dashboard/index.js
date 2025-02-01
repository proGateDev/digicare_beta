import React, { useState, useEffect } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
// import GoogleMaps from "../../../component/GoogleMap/googleMps";
import MemberCard from "../../../component/MemberCard/memberCard";
import Teams from "../../../component/teams";
import { useUserProfile } from "../../../controllers/user/profile";
import { useUserMembers } from "../../../controllers/user/member";
import { useProtectedRoute } from "../../../hooks/useProtectedRoute";
// import { useAuth } from '../../../context/auth';
import Loader from "../../../component/loader";
import DetailsCard2 from "../../../newComponents/user/card/detailsCard2";
import Map2 from "../../../newComponents/user/map/Map2";

const Dashboard = () => {
  useProtectedRoute();
  // const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);

  const {
    isPending: profilePending,
    error: profileError,
    userProfile,
  } = useUserProfile();
  const { isPending: membersPending, userMembers } = useUserMembers();

  useEffect(() => {
    setLoading(profilePending || membersPending);
  }, [profilePending, membersPending]);

  return (
    <DefaultLayout profile={userProfile?.user}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {userProfile ? (
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:container">
                {/* <Tabs/> */}
                {/* <Map/> */}
                <div className="flex items-center justify-center">
                  <DetailsCard2 />
                  <DetailsCard2 />
                  <DetailsCard2 />
                  <DetailsCard2 />
                </div>
                <Map2 />
              </div>
              <div className="w-full md:w-1/3 p-4">
                {/* <DetailsCard2/> */}
                <Teams members={userMembers?.members} />
              </div>
            </div>
          ) : (
            <p>No profile data available</p>
          )}
          <MemberCard members={userMembers?.members} />
        </>
      )}
    </DefaultLayout>
  );
};

export default Dashboard;
