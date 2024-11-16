import React from 'react';

function Index() {
  return (
    <div className="flex items-center justify-center p-6" >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">DigiCare4u: Empowering Care, Anytime, Anywhere</h1>
        <div className='flex justify-center items-center '>
        <img
              src="/images/logo.jpg"
              alt="Logo"
              className="w-34 h-39 cursor-pointer rounded-md" 
            />
        </div>
          <div className="flex justify-center mt-5">
          <a
            href="https://www.digicare4u.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              style={{
                background: 'rgba(0, 105, 217, 1) ',
                color: 'white'
              }}
              className="font-bold py-2 px-6 rounded"
            >
              Download Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Index;
