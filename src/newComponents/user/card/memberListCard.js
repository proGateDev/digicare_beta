import React, { useState, useEffect } from "react";
import axios from "axios";
import devURL from "../../../../contsants/endPoints";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

function MemberListCard() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const [checkboxes, setCheckboxes] = useState({});

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const fetchMembers = async () => {
    try {
      const token = sessionStorage.getItem("token");

      console.log('token====', token)

      if (!token) {
        Swal.fire("Error", "Authentication token missing. Please log in again.", "error");
        return;
      }

      const response = await axios.get(`${devURL}/user/members/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log('member list=======',response.data.members)

      if (response.data.members) {
        setMembers(response.data.members);
      } else {
        console.warn("No members found in response.");
      }
      if (response.status === 200) {
        setMembers(response.data.members || []);
      } else {
        throw new Error(`Unexpected response: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="flex justify-between items-center">
      {/* Member List Button */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 flex items-center"
        >
          Members List
          <svg className="w-2.5 h-2.5 ml-3" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64 absolute mt-2">
            <ul className="p-3 space-y-1 text-sm text-gray-700">
              {members.length > 0 ? (
                members.map((member) => (
                  <li key={member.memberId} className="flex py-2 rounded hover:bg-gray-100">
                    <input
                      id={`member-${member.memberId}`}
                      type="checkbox"
                      checked={checkboxes[`member-${member.memberId}`] || false}
                      onChange={(e) =>
                        setCheckboxes({ ...checkboxes, [`member-${member.memberId}`]: e.target.checked })
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2"
                    />
                    <label htmlFor={`member-${member.memberId}`} className="ml-2 text-sm font-medium text-gray-900">
                      {member.name}
                      <p className="text-xs text-gray-500">
                        Location: {member.lastLocation && member.lastLocation !== "NOT FOUND" ? member.lastLocation : "Not Available"}
                      </p>
                    </label>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-sm">No members found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Add Member Button */}
      <button
        onClick={() => router.push("/user/members/add")}
        className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Add Member
      </button>
    </div>
  );
}

export default MemberListCard;
