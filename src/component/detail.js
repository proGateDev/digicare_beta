import React, { useEffect } from 'react';
import Track from './tracking';
import CardProfile from '../component/CardProfile'
import UserTrack from './userTracking';
import BackSpace from './BackSpace';

const Details = ({ memberDetail }) => {

  useEffect(() => {

  })

  return (
    <>
      <div className="container mx-auto p-1">

        {/* Header Section */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            {/* <h1 className="text-2xl font-bold">Tracking Details</h1> */}
            <BackSpace />
          </div>

          <div className='flex justify-between items-center'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => alert('Download Report')}>Download Report</button>          </div>
        </div>
        <div className='pb-5 min-w-fit'>
          <CardProfile
            memberDetail={memberDetail}
          />
        </div>

        <div className="bg-white p-2 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Current Location</h2>
          <UserTrack />
        </div>

        <div className="bg-white p-1 rounded-lg shadow my-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Current Status:
              <span className={`ml-2 w-4 h-4 rounded-full ${memberDetail?.locationStatus === 'inactive' ? 'bg-rose-500' : 'bg-green-500'}`}></span>
              <span className="ml-2">{memberDetail?.locationStatus}</span>
            </h2>
          </div>
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
      </div>
    </>
  );
};

export default Details;
