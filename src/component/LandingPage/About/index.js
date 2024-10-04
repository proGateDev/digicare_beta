import React from 'react';

const cards = [
  {
    id: 1,
    title: "Title 1",
    description: "स्थिर शॉट्स, पैनिंग या टिल्टिंग से अलग, ट्रैकिंग शॉट कैमरे को अंतरिक्ष में घूमने की स्वतंत्रता प्रदान करता है । जबकि पैनिंग और टिल्टिंग में कैमरे को अपनी धुरी के चारों ओर घुमाना शामिल है, ट्रैकिंग शॉट शारीरिक गति के बारे में हैं।.",
  },
  {
    id: 2,
    title: "Title 2",
    description: "स्थिर शॉट्स, पैनिंग या टिल्टिंग से अलग, ट्रैकिंग शॉट कैमरे को अंतरिक्ष में घूमने की स्वतंत्रता प्रदान करता है । जबकि पैनिंग और टिल्टिंग में कैमरे को अपनी धुरी के चारों ओर घुमाना शामिल है, ट्रैकिंग शॉट शारीरिक गति के बारे में हैं।.",
  },
  {
    id: 3,
    title: "Title 3",
    description: "स्थिर शॉट्स, पैनिंग या टिल्टिंग से अलग, ट्रैकिंग शॉट कैमरे को अंतरिक्ष में घूमने की स्वतंत्रता प्रदान करता है । जबकि पैनिंग और टिल्टिंग में कैमरे को अपनी धुरी के चारों ओर घुमाना शामिल है, ट्रैकिंग शॉट शारीरिक गति के बारे में हैं।.",
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
      <div className="relative z-10 py-6 px-4 text-center text-gray-800">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          This is the About section where you can describe your content.
          Provide some information about your project or organization here.
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap -mx-3">
          {cards.map((card) => (
            <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 p-3">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-4 text-2xl">{card.title}</h3>
                  <p className="mb-4 text-gray-600 text-sm flex-1">{card.description}</p>
                  <a
                    href="#"
                    className="border-t border-gray-200 pt-2 text-xs text-gray-600 hover:text-red-500 uppercase no-underline tracking-wide"
                  >
                    Twitter
                  </a>
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
