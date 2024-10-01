import React from 'react';
import Track from './tracking';

const Details = ({ userMemberDetail }) => {

  console.log('=======token===========')
  console.log(userMemberDetail)
  console.log('=================')

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Tracking Details</h1>
          <button className="text-sm text-gray-500 hover:text-gray-700" onClick={() => window.history.back()}>
            ← Back
          </button>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Download Report</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Refresh</button>
        </div>
      </div>

      {/* Tracking Status Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Current Status: Unknown</h2>
          {/* <span className={`text-sm ${trackingData.status === 'Delivered' ? 'text-green-500' : 'text-yellow-500'}`}>
           status
          </span> */}
        </div>
        {/* Progress Bar (Optional) */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
          {/* <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${trackingData.progress}%` }}></div> */}
        </div>
        <p>Estimated Delivery:N/A</p>
      </div>

      {/* Details Overview Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Tracking Information</h2>
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Tracking Number:</span>N/A
          </div>
          <div>
            <span className="font-semibold">Shipped From:</span> Unknown
          </div>
          <div>
            <span className="font-semibold">Destination:</span>Unknown
          </div>
          <div>
            <span className="font-semibold">Started On:</span> 'N/A'
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Tracking Timeline</h2>
        <ul className="space-y-4">
          {/* {trackingData.events?.map((event, index) =>key={index} ( */}
          <li className="flex space-x-4">
            <span className="text-gray-500">time</span>
            <span>description</span>
          </li>
          {/* )) || <p>No events available.</p>} */}
        </ul>
      </div>

      {/* Optional Map Section */}
      {/* {trackingData.location && ( */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Current Location</h2>
        {/* Embed a map or use a map component */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <Track />
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Details;
