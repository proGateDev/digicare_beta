import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import GoogleMaps from "../../../component/GoogleMap/googleMps";
import { useMemberProfile } from "../../../controllers/member/profile";
import { useProtectedRoute } from "../../../hooks/useProtectedRoute";
import NewsUpdate from "../../../component/update";
import MemberTrack from "../../../component/memberTracking";
import CardProfile from "../../../component/CardProfile";
import Friend from '../../../component/teams'
// import ChartOne from '../../../component/Charts/ChartOne';
// import PiChartOne from '../../../component/PiChartOne'


const Dashboard = () => {
  const { isPending, error, memberProfile } = useMemberProfile()

  useProtectedRoute()

  return (
    <DefaultLayout
    // isMember={true}
    // profile={memberProfile?.user}
    >
      {/* {isPending ? (
        <p>Loading profile...</p>
      ) : memberProfile ? (
        <>
          <Tabs />
          <MemberTrack />
        </>
      ) : (
        <p>No profile data available</p>
      )} */}
      <div className="flex flex-row h-screen max-w-7xl mx-auto gap-2">
        <div className="md:container">
          <NewsUpdate />
          <GoogleMaps />
          <MemberTrack />
          {/* <ChartOne/>
          <PiChartOne/> */}
        </div>

        <div className="">
          <CardProfile />
          <Friend />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
