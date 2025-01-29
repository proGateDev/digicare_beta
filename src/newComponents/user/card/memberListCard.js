import React, { useState, useEffect } from "react";
import axios from "axios";
// import devURL from '../../../../contsants/endPoints'
import { useRouter } from "next/router";

function memberListCard() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const [checkboxes, setCheckboxes] = useState({});

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const fetchMembers = async () => {
    try {
      const response = await axios.get(
        "http://dev-server-fpwk.onrender.com/user/members/list"
      );
      if (response.status === 200) {
        setMembers(response?.data?.members);
      }

      console.log("memberdata=====", response?.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <>
      <div className="flex justify-between align-middle">
        {/* Member list  */}
        <div className="relative">
          <button
            id="dropdownHelperButton"
            onClick={toggleDropdown}
            className="mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Members List
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div
              id="dropdownHelper"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-100 dark:bg-gray-700 dark:divide-gray-600 absolute mt-2"
            >
              <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                {/* Loop through members and display each one */}
                {members.length > 0 ? (
                  members.map((member) => (
                    <li key={member._id}>
                      <div className="flex py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex items-center h-5">
                          <input
                            id={`member-${member._id}`}
                            type="checkbox"
                            checked={
                              checkboxes[`member-${member._id}`] || false
                            }
                            onChange={(e) => {
                              const { checked } = e.target;
                              setCheckboxes((prev) => ({
                                ...prev,
                                [`member-${member._id}`]: checked,
                              }));
                            }}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                        </div>
                        <div className="ms-2 text-sm">
                          <label
                            htmlFor={`member-${member._id}`}
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>{member.name}</div>
                            <p className="text-xs font-normal text-gray-500 dark:text-gray-300 w-100">
                              Location:{" "}
                              {member.latestTracking?.addressDetails?.address ||
                                "Not Available"}
                            </p>
                          </label>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No members found</li>
                )}
              </ul>
            </div>
          )}
        </div>
        {/* Add Button */}
        <div>
          <button
            onClick={() => router.push("/user/members/add")}
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            {/* <PlusIcon className="w-5 h-5 mr-2" /> */}
            <p>Add Member</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default memberListCard;
