import React from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import GoogleMaps from "../../../component/GoogleMap/googleMps";
import { useMemberProfile } from "../../../controllers/member/profile";
import { useProtectedRoute } from "../../../hooks/useProtectedRoute";
import NewsUpdate from "../../../component/update";
import MemberTrack from "../../../component/memberTracking";
import CardProfile from "../../../component/CardProfile";
import Friend from '../../../component/teams';
import Loader from '../../../component/loader';

const Dashboard = () => {
  useProtectedRoute();
  
  const { isPending, error, memberProfile } = useMemberProfile();

  return (
    <DefaultLayout>
      {isPending ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : error ? (
        <p className="text-red-500">Failed to load data</p>
      ) : memberProfile ? (
        <div className="flex flex-row h-screen max-w-7xl mx-auto gap-2">
          <div className="md:container">
            <NewsUpdate />
            <GoogleMaps />
            <MemberTrack />
          </div>
          <div className="">
            <CardProfile memberDetail={memberProfile?.user} />
            <Friend />
          </div>
        </div>
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default Dashboard;
