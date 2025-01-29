import React from "react";

function DetailsCard() {
  return (
    <div className="min-h-screen bg-gray-100 pt-6">
      {/* <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Details Overview</h2>
        <p className="text-gray-600 mt-2">
          Explore the key details with clear and concise cards.
        </p>
      </div> */}

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full text-white text-2xl font-bold">
              1
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 text-center">
            Title 1
          </h3>
          {/* <p className="text-gray-600 text-center mt-2">
            This is a brief description for the first detail. You can include
            additional information here.
          </p> */}
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full text-white text-2xl font-bold">
              2
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 text-center">
            Title 2
          </h3>
          {/* <p className="text-gray-600 text-center mt-2">
            This is a brief description for the second detail. Highlight
            important aspects of this information.
          </p> */}
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-rose-500 rounded-full text-white text-2xl font-bold">
              3
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 text-center">
            Title 3
          </h3>
          {/* <p className="text-gray-600 text-center mt-2">
            This card provides insight into the third key detail. Keep it
            short and easy to read.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
