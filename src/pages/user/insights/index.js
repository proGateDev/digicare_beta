import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import DetailsCard from "../../../newComponents/user/card/detailsCard";
import Teams from "../../../component/teams";
// import { useUserMembers } from '/controllers/user/member'
import { useUserMembers } from "../../../controllers/user/member";
import { useUserProfile } from "../../../controllers/user/profile";
import Loader from "../../../component/loader";
// import { useAuth } from "../../../context/auth";

function index() {
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

  // console.log('userProfile===', userProfile)

  return (
    <>
      <DefaultLayout profile={userProfile.user}>
        {/* <MemberCard/> */}
        {loading ? (
          <Loader />
        ) : (
          <>
          {userProfile ? (
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:container">
                <DetailsCard members={userMembers?.members} />
              </div>
              <div className="w-full md:w-1/3 p-4">
                <Teams members={userMembers?.members} />
              </div>
            </div>

          ) : (
          <p>Member not Found</p>
          )}
          </>
        )}
      </DefaultLayout>
    </>
  );
}

export default index;
