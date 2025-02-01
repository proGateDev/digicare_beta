import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useRouter } from "next/router";
import { FaCaretRight } from "react-icons/fa";

function MemberTable({ members }) {
  const router = useRouter();
  const [openRows, setOpenRows] = useState({});

  const toggleRow = (memberId) => {
    setOpenRows((prev) => ({
      ...prev,
      [memberId]: !prev[memberId],
    }));
  };

  console.log("members====", members);

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full bg-white ">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Profile</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Mobile</th>
            <th className="py-2 px-4 border-b">User Type</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Location</th>
            {/* <th className="py-2 px-4 border-b">Tracking Details</th> */}
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <React.Fragment key={member.trackingId}>
              {/* Main Row */}
              <tr
                className="cursor-pointer hover:bg-gray-50"
                onClick={() =>
                  router.push(`/user/members/details?memberId=${member._id}`)
                }
              >
                <td className="py-2 px-4 border-b">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      member.profilePicture ||
                      "https://randomuser.me/api/portraits/men/32.jpg"
                    }
                    alt={member.name}
                  />
                </td>
                <td className="py-2 px-4 border-b font-bold">
                  {member.name || "null"}
                </td>
                <td className="py-2 px-4 border-b">{member.email || "null"}</td>
                <td className="py-2 px-4 border-b">
                  {member.mobile || "null"}
                </td>
                <td className="py-2 px-4 border-b">
                  {member.userType || "null"}
                </td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`text-sm font-semibold flex items-center ${
                      member.locationStatus ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {/* {member.locationStatus ? "active" : "inactive"} */}
                    {member.locationStatus ? "inactive" : "active"}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="px-3 py-1 text-black font-bold bg-gradient-to-r "
                    onClick={(e) => {
                      // Prevent row click navigation when clicking on this button
                      e.stopPropagation();
                      // You can also add functionality here if needed
                    }}
                  >
                    {members?.lastLocation || "null"}
                  </button>
                </td>
                {/* <td className="py-2 px-4 border-b">
                  <button
                    className="flex items-center focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering row navigation
                      toggleRow(member._id);
                    }}
                  >
                    {openRows[member._id] ? (
                      <>
                        <span className="mr-1">Hide</span>
                        <FaAngleUp />
                      </>
                    ) : (
                      <>
                        <span className="mr-1">Show</span>
                        <FaAngleDown />
                      </>
                    )}
                  </button>
                </td> */}
              </tr>
              {/* Expanded Tracking Details Row */}
              {/* {openRows[member._id] && (
                <tr className="bg-gray-50">
                  <td className="py-2 px-4 border-b" colSpan="8">
                    <ul className="list-disc list-inside text-gray-700">
                      <li>
                        <strong>Tracking ID:</strong> {member.trackingId}
                      </li>
                      <li>
                        <strong>Last Seen:</strong> {member.lastSeen}
                      </li>
                      <li>
                        <strong>Status:</strong> {member.status}
                      </li>
                    </ul>
                  </td>
                </tr>
              )} */}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberTable;
