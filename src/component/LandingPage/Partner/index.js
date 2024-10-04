import React from 'react';

function Index() {
  return (
    <div className="flex items-center justify-center bg-blue-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Partner</h1>
        <p className="text-lg text-center mb-6">
          Join us as a partner and explore new opportunities for collaboration!
        </p>
        <div className="flex justify-center">
          <button
          onClick={()=>alert('clicked')}
            style={{
              background: 'linear-gradient(291deg, rgba(255, 255, 255, 1) 0%, rgba(0, 105, 217, 1) 57%)',
              color: 'white'
            }}
            className="font-bold py-2 px-6 rounded"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
