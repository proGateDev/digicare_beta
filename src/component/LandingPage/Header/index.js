import React from 'react';
import Hero from '../Hero'

const CircleComponent = () => {
  return (
    <>
    <Hero/>
      <div className="flex justify-center items-center min-h-screen bg-gray-200" id='pricing'>
        {/* Wrapper for circles */}
        <div className="relative flex items-center">
          {/* Left circles */}
          <div className="absolute md:left-[-350px] sm:left-[-200px] flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full mb-4 shadow-lg flex items-center justify-center">
              <p className='text-center text-blue-500'>Real-Time Tracking​</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className="w-20 h-20 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
                <p className='text-center text-blue-500'>Easy-to-Use App</p>
              </div>
              <div className="w-20 h-20 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
                <p className='text-center text-blue-500'>Comfortable Design​</p>
              </div>
            </div>
            <div className="w-20 h-20 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
              <p className='text-center text-blue-500'>Analytics Insights​</p>
            </div>
          </div>

          {/* Center circle */}
          <div className="w-25 h-25 bg-blue-500 rounded-full shadow-lg flex items-center justify-center">
            <h2 className='text-white font-semibold'>₹99/user</h2>
          </div>

          {/* Right circles */}
          <div className="absolute md:right-[-350px] sm:right-[-200px] flex flex-col items-center">
            <div className="w-20 h-20 bg-white rounded-full mb-4 shadow-lg flex items-center justify-center">
              <p className='text-center text-blue-500'>Privacy and Data Security​</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className="w-20 h-20 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
                <p className='text-center text-blue-500'>SOS Button​</p>
              </div>
              <div className="w-20 h-20 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
                <p className='text-center text-blue-500'>Affordable Price</p>
              </div>
            </div>
            <div className="w-20 h-20 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
              <p className='text-center text-blue-500'>Care and Trust</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleComponent;
