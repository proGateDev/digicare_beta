import { useEffect, useState } from "react";
import DefaultLayout from "../../../../component/Layouts/DefaultLayout";

import { useRouter } from "next/router";
import { useUserMembers } from "../../../../controllers/user/member";
import { getUserProfile, useUserProfile } from "../../../../controllers/user/profile";
import MemberListCard from "../../../../component/memberListCard";


const MemberList = () => {
  const { userMembers } = useUserMembers()
  const { isPending, error, userProfile } = useUserProfile();
  // const { userMembers } = useUserMembers()

  const handleDelete = (id) => {
    console.log(`Delete member with id: ${id}`);
  };

  const handleUpdate = (id) => {
    console.log(`Update member with id: ${id}`);
  };

  console.log('==========userMembers==========================');
  console.log(userMembers?.members);
  console.log('====================================');

  return (
    <DefaultLayout
      profile={userProfile?.user}
    >
      {isPending ? (
        <p>Loading profile...</p>
      ) : userProfile ? (
        <>
          {userMembers && userMembers?.members?.map(member =>
            <MemberListCard
              key={member?._id}
              member={member}  // Use mock data if userMembers are not available
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />)}
        </>
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  );
};

export default MemberList;
