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

  const fetchUsers = async () => {
    try {
      console.log("Fetching users=====");

      const token = sessionStorage.getItem("token");
      console.log("token----:", token);

      if (!token) {
        console.error("Error: Authentication token is missing.");
        Swal.fire(
          "Error",
          "Authentication token missing. Please log in again.",
          "error"
        );
        return;
      }

      const response = await axios.get(`${devURL}/admin/user/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("API Response=======:", response);

      if (!response || !response.data) {
        throw new Error("Empty response from server");
      }

      if (response.data.data) {
        setUsers(response.data.data);
      } else {
        console.warn("Warning: No user data found in response.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
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
                <th className="px-4 py-2 text-left text-gray-700">Company Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-gray-700">Payment Method</th>
                <th className="px-4 py-2 text-left text-gray-700">Activity</th>
                <th className="px-4 py-2 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.slice(0, entries).length > 0 ? (
                filteredUsers.slice(0, entries).map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={
                          user.image ||
                          "https://lofrev.net/wp-content/photos/2016/09/autodesk_logo_png.png"
                        }
                        alt={user.name || "Company Name"}
                      />
                    </td>
                    <td className="px-4 py-2">{user.name || "Company name"}</td>
                    <td className="px-4 py-2">{user.email || "example@gmail.com"}</td>
                    <td className="px-4 py-2">{user.paymentMethod || "Credit Card"}</td>
                    <td className="px-4 py-2">{user.activity || " Inactive"}</td>
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
      </div>
    </DefaultLayout>
  );
};

export default UsersList;
