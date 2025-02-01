import React from 'react';
import { FaCreditCard } from 'react-icons/fa';

const CenteredCard = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-sm mx-auto border border-gray-300 rounded-lg p-4 text-center shadow-sm bg-white mr-5">
        {/* Card Icon */}
        <div className="">
          <FaCreditCard size={48} className="text-gray-600" />
        </div>
        
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">Card Title</h2>
        
        {/* Amount */}
        <p className="text-xl font-bold">$123.45</p>
      </div>
    </div>
  );
};

export default CenteredCard;
