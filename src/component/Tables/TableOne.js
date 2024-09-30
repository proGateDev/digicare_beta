import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from "../../hooks/useAuth"; 



const TableOne = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getJwtToken } = useAuth();
  // const token = getJwtToken();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get('http://192.168.0.172:8000/user/members', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMembers(response?.data?.members); 
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err?.response?.data?.response || "Failed to fetch members",
          icon: "error"
        });
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  if (loading) return <p className="text-center">Loading Members...</p>;
  if (error) return <p className="text-red">{error}</p>;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
      Members List
    </h4>

    <div className="flex flex-col">
      {/* Table Header */}
      <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Name
          </h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Email
          </h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Group Type
          </h5>
        </div>
        <div className="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Location Status
          </h5>
        </div>
        <div className="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Mobile
          </h5>
        </div>
      </div>

      {/* Member Rows */}
      {members.map((member) => (
        <div key={member._id} className="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke">
          {/* Name */}
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{member.name}</p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{member.email}</p>
          </div>

          {/* Group Type */}
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">{member.groupType}</p>
          </div>

          {/* Location Status */}
          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">{member.locationStatus}</p>
          </div>

          {/* Mobile */}
          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">{member.mobile}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TableOne;
