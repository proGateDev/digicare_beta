import React from 'react';

const cards = [
  {
    id: 1,
    title: "Our Mission",
    description: "DigiCare4u is to provide an easy-to-use, secure, and efficient tracking platform that supports safety, productivity, and peace of mind. With Digicare4u, users gain access to accurate location updates, customized alerts, and insightful tracking history, all within a simple and intuitive interface. Whether for personal safety, team management, or personal productivity, Digicare4u is here to make individual tracking effortless and effective.",
  },
  {
    id: 2,
    title: "Who We Serve",
    description: "Digicare4u is ideal for individuals and organizations seeking reliable and secure tracking solutions. Families looking to ensure loved ones are safe, companies managing field or remote employees, and individuals tracking personal routines will all benefit from the flexibility and dependability of Digicare4u, Stay informed with custom alerts for specific locations, zones, or times, making it easy to track arrivals, departures, or unexpected movements. ",
  },
  {
    id: 3,
    title: "About Us",
    description: "Digicare4u provides highly accurate, real-time location updates, so users can have peace of mind knowing exactly where their loved ones or team members are.Ease of Use: With an intuitive design, Digicare4u is easy for anyone to use, even if they’re new to tracking software. Setup is fast, and our support team is always ready to help with any questions.",
  },
];

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white via-blue-200 to-white relative" id='about'>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.threatpost.com/wp-content/uploads/sites/103/2021/03/09182846/location-tracking-gps.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      {/* Content Section */}
      <div className="relative container z-10 py-6 px-4 text-center text-gray-800">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">About Us</h1>
        <p className="text-xl mb-6 mx-25 text-gray-200">
        Digicare4u is a specialized tracking software dedicated to empowering individuals and organizations with precise, real-time location tracking and monitoring.
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap -mx-3">
          {cards.map((card) => (
            <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 p-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <div className="p-4 flex-1 flex flex-col">
                  <p className="mb-4 text-gray-400 text-md font-medium flex-1 text-justify">{card.description}</p>
                  <div href="#" className="border-t border-gray-200 pt-2 text-xs text-gray-600 hover:text-red-500 uppercase no-underline tracking-wide">
                      <h3 className="text-2xl text-blue-500 font-bold">{card.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
