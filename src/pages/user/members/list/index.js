import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../../component/Layouts/DefaultLayout";

import { useRouter } from "next/router";
import { getUserMembers, useUserMembers } from "../../../../controllers/user/member";
import { getUserProfile, useUserProfile } from "../../../../controllers/user/profile";
import { Table } from "../../../../component/table";

const MemberList = () => {
  const { isPending, error, userProfile } = useUserProfile();
  const { userMembers } = useUserMembers()



  console.log('--=',userMembers);



  return (
    <DefaultLayout
      profile={userProfile?.user}
    >
      {isPending ? (
        <p>Loading profile...</p>
      ) : userProfile ? (
        <Table
          userMemberData={userMembers?.members}

        />
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default MemberList;
