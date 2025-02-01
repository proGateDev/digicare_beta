import React from "react";

function DetailsCard() {
  return (
    <div className="bg-white-100">
      <div className="flex justify-between items-center">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full text-white text-2xl font-bold">
              1
            </div>
          </div>
          <h3 className="text-lg text-gray-800 text-center">
          Assgnment
          </h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full text-white text-2xl font-bold">
              2
            </div>
          </div>
          <h3 className="text-lg text-gray-800 text-center">
          Attendance
          </h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-rose-500 rounded-full text-white text-2xl font-bold">
              3
            </div>
          </div>
          <h3 className="text-lg text-gray-800 text-center">
           Assgnment
          </h3>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full text-white text-2xl font-bold">
              2
            </div>
          </div>
          <h3 className="text-lg text-gray-800 text-center">
            Assignment
          </h3>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
