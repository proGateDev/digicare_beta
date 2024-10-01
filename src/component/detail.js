import React, { useEffect } from 'react';
import Track from './tracking';
import CardProfile from '../component/CardProfile'
import UserTrack from './userTracking';

const Details = ({ memberDetail }) => {

  useEffect(() => {

  })

  return (
    <>
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => alert('Download Report')}>Download Report</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => window.location.reload()}>Refresh</button>
          </div>
        </div>
        <CardProfile
          memberDetail={memberDetail}

        />

        {/* Tracking Status Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Current Status: Unknown</h2>
          </div>
          {/* Progress Bar (Optional) */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
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
              <span className="font-semibold">Started On:</span> N/A
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">Tracking Timeline</h2>
          <ul className="space-y-4">
            <li className="flex space-x-4">
              <span className="text-gray-500">time</span>
              <span>description</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Current Location</h2>
          {/* <Track
            memberDetail={memberDetail}
          /> */}
          <UserTrack
            location={memberDetail?.location}
          />
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
