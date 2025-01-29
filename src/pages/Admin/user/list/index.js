import React, { useEffect, useState } from "react";
import DefaultLayout from "../../../../component/Layouts/DefaultLayout";
import axios from "axios";
import Swal from "sweetalert2";
import { devURL } from "../../../../../contsants/endPoints";

const UsersList = () => {
  const [users, setUsers] = useState([]);

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

      console.log("Response====", response.data);
      console.log("Users=========", response.data.data);

      if (response.data.data) {
        setUsers(response.data.data);
        console.log("Users state updated successfully.");
      } else {
        console.warn("Warning: No user data found in response.");
      }

    } catch (error) {
      console.error("Error fetching users:", error);
      console.log("Error fetching users:", error);
      Swal.fire( "Error", error.response?.data?.message || "Failed to fetch users. Please try again.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DefaultLayout>
      {/* <h2 className="text-xl font-bold p-4">User List</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user._id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4"
            >
              <div className="flex flex-col items-center pb-4">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt={user.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {user.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </span>
                <div className="flex mt-4">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                    Update
                  </button>
                  <button className="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No Companies details found.</p>
        )}
      </div>
    </DefaultLayout>
  );
};

export default UsersList;
