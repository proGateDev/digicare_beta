import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import { useRouter } from "next/router";
import { useMemberProfile } from "../../../controllers/member/profile";
import Profile from "../../../component/profile";

const Dashboard = () => {

  const { isPending, error, memberProfile } = (useMemberProfile);

  return (
    <DefaultLayout
      profile={memberProfile}
    >
      {isPending ? (
        <p>Loading profile...</p>
      ) : memberProfile ? (
        <>
          <Profile
            profile={memberProfile}

          />
        </>
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default Dashboard;
