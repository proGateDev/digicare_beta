import React from 'react';

function Friend() {
  const friends = [
    { name: "Alice", status: "online", profilePicture: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { name: "Bob", status: "offline", profilePicture: 'https://randomuser.me/api/portraits/men/33.jpg' },
    { name: "Charlie", status: "online", profilePicture: 'https://randomuser.me/api/portraits/men/34.jpg' },
    { name: "David", status: "offline", profilePicture: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { name: "Eve", status: "online", profilePicture: 'https://randomuser.me/api/portraits/women/34.jpg' },
    { name: "Frank", status: "offline", profilePicture: 'https://randomuser.me/api/portraits/men/36.jpg' },
    { name: "Grace", status: "online", profilePicture: 'https://randomuser.me/api/portraits/women/35.jpg' },
    { name: "David", status: "offline", profilePicture: 'https://randomuser.me/api/portraits/men/35.jpg' },
    // Add more friends if needed
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-gray shadow-lg rounded-lg hidden md:block"> {/* Hide on mobile */}
      <h2 className="text-3xl font-bold text-left text-gray-800 mb-6">Members</h2>
      <div className="space-y-4">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-100 shadow-md rounded-lg transition duration-300 hover:shadow-xl"
          >
            <div className={`w-4 h-4 rounded-full mr-4 ${friend.status === 'online' ? 'bg-green-500' : 'bg-rose-600'}`}>
            </div>
            <div className="flex items-center bg-gray-200 rounded-full px-2 py-1">
              <img
                className="h-10 w-10 rounded-full border-4 border-white"
                src={friend.profilePicture || 'https://randomuser.me/api/portraits/men/32.jpg'} // Fallback image
                alt={friend.name}
              />
              <h3 className="text-lg font-semibold text-gray-700">{friend.name}</h3>
            </div>
            <p className={`ml-4 text-sm ${friend.status === 'online' ? 'text-green-600' : 'text-gray-500'}`}>
              {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friend;
