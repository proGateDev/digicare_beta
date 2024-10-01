const MemberCard = ({ member }) => {
    return (
      <div className={`bg-gradient-to-r ${member.isApproved ? 'from-green-400 to-green-500' : 'from-red-400 to-red-500'} p-6 rounded-lg shadow-md transition-transform transform hover:scale-105`}>
        <div className="flex items-center">
          <img
            src={`https://via.placeholder.com/100`} // Placeholder image; replace with member's image URL
            alt={member.name}
            className="w-20 h-20 rounded-full border-2 border-white shadow-md"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-white">{member.name}</h2>
            <p className="text-sm text-gray-200">{member.email}</p>
            <p className="text-sm text-gray-200">Mobile: {member.mobile}</p>
          </div>
        </div>
        <p className="mt-2 text-sm text-white">Location Status: {member.locationStatus}</p>
        <div className="mt-4 flex justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${member.isApproved ? 'bg-green-700' : 'bg-red-700'}`}>
            {member.isApproved ? 'Approved' : 'Pending'}
          </span>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors">
              Edit
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  