

import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../../component/Layouts/DefaultLayout";

import { useRouter } from "next/router";
import { getUserMembers, useUserMembers, useUserMembersById } from "../../../../controllers/user/member";
import { getUserProfile, useUserProfile } from "../../../../controllers/user/profile";
import { Table } from "../../../../component/table";
import Track_v1 from "../../../../component/userTracking";



const MemberDetail = () => {
  const router = useRouter()
  // console.log('router id  ===========',)
  const memberId = router?.query?.memberId;
  const { isPending, error, userProfile } = useUserProfile();

  const { data } = useUserMembersById(memberId);
  // const { userMembers } = useUserMembers()
  // const memberDetail = userMemberDetail()

  console.log(data?.data?.member, '========memberDetail ------- ',);
  let userMemberDetail = data?.data?.member

  return (
    <DefaultLayout
      profile={userProfile?.user}
    >
      {isPending ? (
        <p>Loading profile...</p>
      ) : userProfile ? (

        // <h1>he</h1>

        (userMemberDetail &&
          <>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{userMemberDetail.name}</h2>
                <p className="text-gray-600 mb-4">Role: <span className="font-semibold">{userMemberDetail.role}</span></p>
                <p className="text-gray-600 mb-4">Email: <span className="font-semibold">{userMemberDetail.email}</span></p>
                <p className="text-gray-600 mb-4">Mobile: <span className="font-semibold">{userMemberDetail.mobile}</span></p>
                <p className={`text-center font-semibold ${userMemberDetail.isApproved ? 'text-green-500' : 'text-red-500'}`}>
                  Status: {userMemberDetail?.isApproved ? 'Approved' : 'Pending'}
                </p>
              </div>
            </div>
            <Track_v1
              location={userMemberDetail?.location}
            />
          </>
        )
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  )
}
export default MemberDetail
