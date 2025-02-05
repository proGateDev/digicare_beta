import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../component/Layouts/DefaultLayout";
import axios from "axios";
import Swal from "sweetalert2";
import { devURL } from "../../../../contsants/endPoints";
import Link from "next/link";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        Swal.fire("Error", "Authentication token missing. Please log in again.", "error");
        return;
      }

      const response = await axios.get(`${devURL}/admin/user/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.data) {
        setUsers(response.data.data);
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "Failed to fetch users. Please try again.", "error");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / entries);
  const startIndex = (currentPage - 1) * entries;
  const displayedUsers = filteredUsers.slice(startIndex, startIndex + entries);

  return (
    <DefaultLayout>
      <div className="">
        <div className="flex justify-between mb-2">
          <div>
            <label className="mr-2">Show</label>
            <select
              className="border p-1 rounded"
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
            className="border p-1 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 text-left text-gray-700">Avatar</th>
                <th className="px-4 py-2 text-left text-gray-700">Company Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-gray-700">Payment Method</th>
                <th className="px-4 py-2 text-left text-gray-700">Activity</th>
                <th className="px-4 py-2 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.length > 0 ? (
                displayedUsers.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={user.image || "https://lofrev.net/wp-content/photos/2016/09/autodesk_logo_png.png"}
                        alt={user.name || "Company Name"}
                      />
                    </td>
                    <td className="px-4 py-2">{user.name || "Company name"}</td>
                    <td className="px-4 py-2">{user.email || "example@gmail.com"}</td>
                    <td className="px-4 py-2">{user.paymentMethod || "Credit Card"}</td>
                    <td className="px-4 py-2">{user.activity || "Inactive"}</td>
                    <td className="px-4 py-2">
                      <Link href="/member/list">
                        <span className="text-blue-500 hover:underline cursor-pointer">View Members</span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-4">
                    No Companies details found.
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

export default UsersList;
