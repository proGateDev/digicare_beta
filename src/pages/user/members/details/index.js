

import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../../component/Layouts/DefaultLayout";
import Details from "../../../../component/detail";

import { useRouter } from "next/router";
import { getUserMembers, useUserMembers, useUserMembersById } from "../../../../controllers/user/member";
import { getUserProfile, useUserProfile } from "../../../../controllers/user/profile";
import Track_v1 from "../../../../component/userTracking";



const MemberDetail = () => {
  const router = useRouter()
  const [memberId, setMemberId] = useState('');
 
  useEffect(() => {
    if (router?.query?.memberId) {
 
      setMemberId(router?.query?.memberId);
    }
  // }, [router?.query?.memberId]);
}, [router.isReady, router.query?.memberId]);

  const { isPending, error, userProfile } = useUserProfile();

  const { data } = useUserMembersById(memberId);

  // console.log(data?.data?.member, '========memberDetail ------- ',);
  let memberDetail = data?.data?.member

  return (
    <DefaultLayout
      profile={userProfile?.user}
    >
      {isPending ? (
        <p>Loading profile...</p>
      ) : userProfile ? (
        <Details
          memberDetail={memberDetail}
        />
      ) : (
        <p>No profile data available</p>
      )}
    </DefaultLayout>
  )
}
export default MemberDetail
