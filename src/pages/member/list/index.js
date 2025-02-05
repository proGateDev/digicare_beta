import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import axios from "axios";
import Swal from "sweetalert2";
import { devURL } from "../../../../contsants/endPoints";
import Link from "next/link";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMembers = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        Swal.fire("Error", "Authentication token missing. Please log in again.", "error");
        return;
      }

      console.log('token==',token)

      const response = await axios.get(`${devURL}/user/members/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.members) {
        setMembers(response?.data?.members);
      }
      console.log('response==',response?.data)
    } catch (error) {
      console.log(error)
      Swal.fire("Error", error.response?.data?.message || "Failed to fetch members. Please try again.", "error");
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.mobile.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMembers.length / entries);
  const startIndex = (currentPage - 1) * entries;
  const displayedMembers = filteredMembers.slice(startIndex, startIndex + entries);


  return (
    <DefaultLayout>
      <div className="">
        <div className="flex justify-between mb-4">
          <div>
            <label className="mr-2">Show</label>
            <select
              className="border p-2 rounded"
              value={entries}
              onChange={(e) => setEntries(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="ml-2">entries</span>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left text-gray-700">Avatar</th>
                <th className="px-4 py-2 text-left text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Mobile</th>
                <th className="px-4 py-2 text-left text-gray-700">Location Status</th>
                <th className="px-4 py-2 text-left text-gray-700">Last Location</th>
                <th className="px-4 py-2 text-left text-gray-700">Last Updated</th>
                <th className="px-4 py-2 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedMembers.length > 0 ? (
                displayedMembers.map((member) => (
                  <tr key={member.memberId} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://lofrev.net/wp-content/photos/2016/09/autodesk_logo_png.png" // Placeholder image
                        alt={member.name || "Member Avatar"}
                      />
                    </td>
                    <td className="px-4 py-2">{member.name || "No Name"}</td>
                    <td className="px-4 py-2">{member.mobile || "No Mobile"}</td>
                    <td className="px-4 py-2">{member.locationStatus || "Inactive"}</td>
                    <td className="px-4 py-2">{member.lastLocation || "No Location"}</td>
                    <td className="px-4 py-2">{new Date(member.lastUpdated).toLocaleString() || "Never"}</td>
                    <td className="px-4 py-2">
                      <Link href="/member/details/[id]" as={`/member/details/${member.memberId}`}>
                        <span className="text-blue-500 hover:underline cursor-pointer">View Details</span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 py-4">
                    No Members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button 
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50" 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MemberList;
