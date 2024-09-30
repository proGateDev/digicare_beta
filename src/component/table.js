import React from "react";
import { useRouter } from "next/router"; // Import useRouter from Next.js

export const Table = ({ userMemberData }) => {
  const router = useRouter(); // Initialize router

  // Function to handle row click and navigate to detail screen
  const handleRowClick = (memberId) => {
    router.push(`/user/members/details?memberId=${memberId}`); // Navigate to details page with memberId as a query parameter
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Role</th>
            <th scope="col" className="px-6 py-3">Mobile</th>
            <th scope="col" className="px-6 py-3">Verification status</th>
            {/* Uncomment the next line if you want to display the Last Location Update column */}
            {/* <th scope="col" className="px-6 py-3">Last Location Update</th> */}
          </tr>
        </thead>
        <tbody>
          {userMemberData && userMemberData.length > 0 ? (
            userMemberData.map((member) => (
              <tr
                key={member._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer" // Add cursor-pointer class for better UX
                onClick={() => handleRowClick(member._id)} // Add onClick handler to the row
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {member.name}
                </td>
                <td className="px-6 py-4">{member.email}</td>
                <td className="px-6 py-4">{member.role}</td>
                <td className="px-6 py-4">{member.mobile}</td>
                <td className={`px-6 py-4 font-medium text-center ${member?.isApproved
                    ? "bg-[green] text-white border border-green-300 rounded"
                    : "bg-[red] text-black border border-red-300 rounded"
                  }`}>
                  {member?.isApproved ? "Approved" : "Pending"}
                </td>
                <td className="px-6 py-4">
                  {new Date(member.location.updatedAt).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-center">
                No userMemberData found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
