import React from 'react';

const CircleComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-200" id="pricing" style={{
        background: 'background: radial-gradient(circle, rgba(255,255,255,1) 17%, rgba(0,200,241,1) 52%, rgba(255,255,255,1) 100%);'
      }}>
        {/* Wrapper for circles */}
        <div className="relative flex items-center justify-center">
          {/* Left circles */}
          <div className="absolute left-[-350px] flex flex-col items-center ">
            <div className="w-35 h-35 bg-white rounded-full mb-4 shadow-lg flex items-center justify-center ">
              <p className="text-center text-blue-500">Real-Time Tracking​</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-35 h-35 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
                <p className="text-center text-blue-500">Easy-to-Use App</p>
              </div>
              <div className="w-35 h-35 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
                <p className="text-center text-blue-500">Comfortable Design​</p>
              </div>
            </div>
            <div className="w-35 h-35 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
              <p className="text-center text-blue-500">Analytics Insights​</p>
            </div>
          </div>

          {/* Center circle */}
          <div className="w-35 h-35 bg-blue-500 rounded-full shadow-lg flex items-center justify-center mx-4"               style={{
                background: ' rgba(0, 105, 217, 1) ',
                color: 'white'
              }}>
            <h2 className="text-white font-semibold">₹99/user</h2>
          </div>

          {/* Right circles */}
          <div className="absolute right-[-350px] flex flex-col items-center">
            <div className="w-35 h-35 bg-white rounded-full mb-4 shadow-lg flex items-center justify-center">
              <p className="text-center text-blue-500">Privacy and Data Security​</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-35 h-35 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
                <p className="text-center text-blue-500">SOS Button​</p>
              </div>
              <div className="w-35 h-35 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
                <p className="text-center text-blue-500">Affordable Price</p>
              </div>
            </div>
            <div className="w-35 h-35 bg-white rounded-full m-4 shadow-lg flex items-center justify-center">
              <p className="text-center text-blue-500">Care and Trust</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleComponent;
