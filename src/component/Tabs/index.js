import { useState } from "react";


const Tabs = ({ members }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const filteredMembers = () => {
    switch (activeTab) {
      case 0: // H.R.
        return members ? members.filter(member => member.userType === 'HR') : [];
      case 1: // Developer
        return members ? members.filter(member => member.userType === 'Developer') : [];
      case 2: // Sales
        return members ? members.filter(member => member.userType === 'Sales') : [];
      case 3: // Family
        return members ? members.filter(member => member.userType === 'Family') : [];
      default:
        return [];
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-3">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-300 bg-gray-50 rounded-t-lg shadow-md">
        <button
          onClick={() => handleTabClick(0)}
          className={`w-full md:w-1/4 py-3 px-6 text-sm font-medium text-center transition-colors duration-300 ${
            activeTab === 0
              ? 'border-b-4 border-blue-600 text-blue-600 bg-white'
              : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          H.R.
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`w-full md:w-1/4 py-3 px-6 text-sm font-medium text-center transition-colors duration-300 ${
            activeTab === 1
              ? 'border-b-4 border-blue-600 text-blue-600 bg-white'
              : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          Developer
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`w-full md:w-1/4 py-3 px-6 text-sm font-medium text-center transition-colors duration-300 ${
            activeTab === 2
              ? 'border-b-4 border-blue-600 text-blue-600 bg-white'
              : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          Sales
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`w-full md:w-1/4 py-3 px-6 text-sm font-medium text-center transition-colors duration-300 ${
            activeTab === 3
              ? 'border-b-4 border-blue-600 text-blue-600 bg-white'
              : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          Family
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-white rounded-b-lg shadow-md">
        {filteredMembers().map((member) => (
          <div key={member.trackingId} className="text-gray-700">
            {member.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
