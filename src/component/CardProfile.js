import React from 'react';

function CardProfile({ memberDetail }) {
  // console.log('userMemberDetail',userMemberDetail);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-9">
        <div className="flex items-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-white "
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{memberDetail?.name}</h2>
            <p className="text-gray-600">{memberDetail?.groupType}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium">Contact Info</h3>
          <p className="text-gray-600 mt-2">Email:  {memberDetail?.email}</p>
          <p className="text-gray-600">Phone: {memberDetail?.mobile}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
