import React from 'react';

function CardProfile({ memberDetail }) {
  // console.log('userMemberDetail',userMemberDetail);

  return (
    <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden hidden md:block mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="w-20 h-20 rounded-full border-4 border-white "
              src= 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png'
              alt="Profile"
            />
            <div className="p-1">
              <p className="text-lg font-semibold text-nowrap">{memberDetail?.name || 'User Name'}</p>
              <p className="text-gray-600 text-nowrap">{memberDetail?.groupType || 'H.R.'}</p>
            </div>
          </div>

          <div>
            <div className="mt-4">
              <h3 className="text-lg font-medium">Contact Info</h3>
              <p className="text-gray-600 mt-2"> {memberDetail?.email || 'user@user.com'}</p>
              <p className="text-gray-600"> {memberDetail?.mobile || '0987654321'}</p>
              <p className="text-gray-600"> {memberDetail?.employeId || 'PGT-001'}</p>
            </div>
          </div>

          <div>
         
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardProfile;
