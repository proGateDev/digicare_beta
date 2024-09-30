import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import GoogleMaps from "../../../component/GoogleMap/googleMps";
import MemberCard from "../../../component/MemberCard/memberCard";
import Tabs from "../../../component/Tabs/tabs";
import { useRouter } from "next/router";
import { useMemberProfile } from "../../../controllers/member/profile";
import MemberTrack from '../../../component/memberTracking'


const Dashboard = () => {
  const { isPending, error, memberProfile } = (useMemberProfile);

  return (
    <DefaultLayout
      isMember={true}
      profile={memberProfile}
    >
      {isPending ? (
        <p>Loading profile...</p>
      ) : memberProfile ? (
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
