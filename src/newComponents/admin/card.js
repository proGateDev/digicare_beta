import React, { useEffect, useState } from 'react';
import { devURL } from '../../../contsants/endPoints';
import axios from "axios";
import Swal from "sweetalert2";
import { Users } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function Card() {

  const [users, setUsers] = useState([]);
  const router = useRouter();
  

  const handleCardClick = () => {
    router.push('/admin/user/list'); // Redirect to the list
  };


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

      // console.log("Response====", response.data);
      // console.log("Users=========", response.data.data);

      if (response.data.data) {
        setUsers(response.data.data);
        console.log("Users state updated successfully.");
      } else {
        console.warn("Warning: No user data found in response.");
      }

    } catch (error) {
      console.error("Error fetching users:", error);
      Swal.fire(
        "Error",
        error.response?.data?.message || "Failed to fetch users. Please try again."
      );
    }
  };

  console.log('users====', users)

  useEffect(() => {
    fetchUsers();
  }, []);  // fetch users on component mount

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900"   onClick={handleCardClick}>
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        {/* Icon */}
        <Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-2" />

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Compnies</h3>

        {/* Number (showing count of users fetched) */}
        <p className="text-xl font-bold text-gray-900 dark:text-gray-300">
          {users.length > 0 ? users.length : 'Loading...'}
        </p>
      </div>
    </div>
  );
}
