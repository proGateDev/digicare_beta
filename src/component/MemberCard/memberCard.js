import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function MemberCard({ member }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage accordion open/close

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full mx-auto bg-white rounded-lg overflow-hidden shadow-lg m-4">
      <div className="p-4 flex items-center">
        <img
          className="h-16 w-16 rounded-full border-4 border-white"
          src={member.profilePicture || 'https://randomuser.me/api/portraits/men/32.jpg'} // Fallback image
          alt={member.name}
        />
        <div className="ml-4">
          <h3 className="font-bold text-xl">{member.name}</h3>
          <p className="text-gray-600">{member.location}</p>
          <p className={`text-sm font-semibold ${member.isOnline ? 'text-green-500' : 'text-red-500'}`}>
            {member.isOnline ? 'Online' : 'Offline'}
          </p>
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
  );
}

// Sample members array
const members = [
  {
    name: 'John Doe',
    profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'New York, NY',
    isOnline: true,
    trackingId: '12345',
    lastSeen: '2024-09-30 12:00 PM',
    status: 'Active',
  },
  {
    name: 'Jane Smith',
    profilePicture: 'https://randomuser.me/api/portraits/women/31.jpg',
    location: 'Los Angeles, CA',
    isOnline: false,
    trackingId: '12346',
    lastSeen: '2024-09-29 10:30 AM',
    status: 'Inactive',
  },
  {
    name: 'Michael Brown',
    profilePicture: 'https://randomuser.me/api/portraits/men/33.jpg',
    location: 'Chicago, IL',
    isOnline: true,
    trackingId: '12347',
    lastSeen: '2024-09-30 08:45 AM',
    status: 'Active',
  },
];

// Main App component to render MemberCards
export default function App() {
  return (
    <div className="flex flex-col items-center">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
}
