import React from 'react';

function NewsUpdate() {
  const newsItems = [
    {
      title: "Breaking News 1",
      description: "This is the description for news 1.",
      date: "2024-09-30",
    },

  ];

  return (
    <div className="max-w-full mb-4">
      <div className="grid grid-cols-1 gap-6">
        {newsItems.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <p className="text-sm text-gray-500">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsUpdate;
