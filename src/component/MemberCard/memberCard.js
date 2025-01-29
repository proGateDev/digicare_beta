import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
// import { apiEndpoints } from '../../../contsants/endPoints'
// import { data } from 'autoprefixer';
import { useRouter } from 'next/router';


function MemberCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  console.log('====== member=========')
  console.log(props.members)
  console.log('===============')

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="flex flex-wrap">
      {props?.members?.map((member) => (
        <div key={member.trackingId} onClick={()=>router.push(`/user/members/details?memberId=${member._id}`)} className="w-full mx-auto bg-white rounded-lg overflow-hidden shadow-lg m-4">
          <div className="p-4 flex items-center justify-between">
            <div className='flex items-center'>
              <img
                className="h-16 w-16 rounded-full border-4 border-white"
                src={member.profilePicture || 'https://randomuser.me/api/portraits/men/32.jpg'} // Fallback image
                alt={member.name}
              />
              <div className="ml-4">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-gray-600">  {member.email}</p>
                <p className="text-gray-600">  {member.mobile}</p>
                <p className="text-gray-600 font-bold">  {member.userType}</p>
                <p className={`text-sm font-semibold ${member.locationStatus ? 'text-green-500' : 'text-red-500'}`}> {member.locationStatus ? 'Online' : 'Offline'} </p>
                {/* <p className="text-gray-600">{member.location?.coordinates?.}</p> */}
              </div>
            </div>
            <div className={`p-2 rounded-md ${member.locationStatus === 'active' ? 'text-green-500' : 'text-red-500'}`}>
              <button className="p-3 text-white font-bold bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 focus:ring-4 focus:ring-green-300 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                Location: Lucknow
              </button>
            </div>
          </div>

          {/* Accordion for Tracking Details */}
          <div className="border-t border-gray-200 mt-4 px-4 py-2">
            <h4
              className="flex justify-between items-center font-semibold cursor-pointer"
              onClick={toggleAccordion} // Toggle accordion on click
            >
              <span>Tracking Details</span>
              {isOpen ? (
                <FaAngleUp className="text-black-500" /> // Show up arrow when open
              ) : (
                <FaAngleDown className="text-black-500" /> // Show down arrow when closed
              )}
            </h4>
            {isOpen && ( // Conditional rendering for accordion content
              <ul className="text-gray-700 mt-2">

                <li>Tracking ID: {member.trackingId}</li>
                <li>Last Seen: {member.lastSeen}</li>
                <li>Status: {member.status}</li>
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemberCard;
