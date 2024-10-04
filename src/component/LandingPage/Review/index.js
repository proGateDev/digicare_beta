import React from "react";
import Partner from '../Partner'

const CardList = () => {
  const reviews = [
    {
      id: '1',
      image: "/images/sample.jpg",
      title: "Card 1",
      description: "This is the About section where you can describe your content. Provide some information about your project or organization here.",
      buttonText: "Learn More",
    },
    {
      id: '2',
      image: "/images/sample2.jpg",
      title: "Card 2",
      description: "This is the About section where you can describe your content. Provide some information about your project or organization here.",
      buttonText: "Explore",
    },
    {
      id: '3',
      image: "/images/sample3.jpg",
      title: "Card 3",
      description: "This is the About section where you can describe your content. Provide some information about your project or organization here.",
      buttonText: "Read More",
    }
  ];

  return (
    <>
      <div className=" p-15">
        <h2 className="text-center">Review</h2>
        <div className=" flex flex-wrap -mx-3 py-10">
          {reviews.map((card) => (
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
        <Partner />
      </div>
    </>
  );
};

export default CardList;
