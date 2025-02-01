import React, { useState } from "react";

function Friend({ members }) {
  const [showAll, setShowAll] = useState(false);

  // Determine which friends to display based on the showAll state
  const displayedFriends = showAll ? members : members.slice(0, 5);
  const remainingCount = members.length - 5;

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 shadow-lg rounded-lg hidden md:block">
      {/* Title */}
      <h2 className="text-3xl font-bold text-left text-gray-800 mb-6">Members</h2>

      {/* Friends List */}
      <div className="space-y-4">
        {displayedFriends.map((friend, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-100 shadow-md rounded-lg transition duration-300 hover:shadow-xl"
          >
            {/* Status Indicator */}
            <div
              className={`w-4 h-4 rounded-full ${
                friend.locationStatus === "active" ? "bg-green-500" : "bg-rose-600"
              }`}
            ></div>

            {/* Profile Section */}
            <div className="flex items-center bg-white rounded-full px-2 py-1">
              <img
                className="h-10 w-10 rounded-full border-4 border-white"
                src={
                  friend.profilePicture ||
                  "https://randomuser.me/api/portraits/men/32.jpg"
                }
                alt={friend.name}
              />
              <h3 className="text-md font-semibold text-gray-700 ml-2 whitespace-nowrap">
                {friend.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* "Show More" Button */}
      {!showAll && members.length > 5 && (
        <div
          className="mt-4 text-blue-500 cursor-pointer hover:underline text-center"
          onClick={() => setShowAll(true)}
        >
          and {remainingCount} more...
        </div>
      )}
    </div>
  );
}

export default Friend;
