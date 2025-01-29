import React from "react";

function Friend(props) {
  // console.log("props-========", props.members);

  return (
    <div className="max-w-md mx-auto p-6 bg-gray shadow-lg rounded-lg hidden md:block">
      {" "}
      {/* Hide on mobile */}
      <h2 className="text-3xl font-bold text-left text-gray-800 mb-6">
        Members
      </h2>
      <div className="space-y-4">
        {props?.members?.map((friend, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-100 shadow-md rounded-lg transition duration-300 hover:shadow-xl"
          >
            {/* Status Indicator */}
            <div
              className={`w-4 h-4 rounded-full mr-4 ${
                friend.locationStatus === "active"
                  ? "bg-green-500"
                  : "bg-rose-600"
              }`}
            ></div>

            {/* Profile Section */}
            <div className="flex items-start bg-white rounded-full px-2 py-1">
              <img
                className="h-10 w-10 rounded-full border-4 border-white"
                src={
                  friend.profilePicture ||
                  "https://randomuser.me/api/portraits/men/32.jpg"
                } // Fallback image
                alt={friend.name}
              />
              <h3 className="text-md font-semibold text-gray-700 ml-2 text-nowrap">
                {friend.name}
              </h3>
            </div>

            {/* Status Text */}
            {/* <p
              className={`ml-4 text-sm ${
                friend.locationStatus === "active"
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {friend.locationStatus.charAt(0).toUpperCase() +
                friend.locationStatus.slice(1)}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friend;
