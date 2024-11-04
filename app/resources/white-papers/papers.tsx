import React from "react";
import Image from "next/image";
import aiImage from "../../images/aiimage.png"; // Replace with your local image path
import itImage from "../../images/itimage.png"; // Replace with your local image path

const Papers: React.FC = () => {
  const cards = [
    {
      title: "AI and Machine Learning Applications",
      category: "AI and Machine Learning",
      readTime: "5 min read",
      description:
        "Explore the transformative potential of AI and machine learning in our white paper, detailing practical applications for business growth.",
      img: aiImage,
    },
    {
      title: "Future of IT Infrastructure",
      category: "IT",
      readTime: "5 min read",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      img: itImage,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col gap-6 grow">
            {/* Image with fixed width/height but flexible for responsiveness */}
            <div className="relative w-full h-[300px] lg:w-[400px] lg:h-[300px]">
              <Image
                src={card.img}
                alt={card.title}
                className="rounded-lg object-cover"
                layout="fill" // Makes image fill the container while maintaining aspect ratio
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 px-2 py-1">
                  <span className="font-semibold text-sm text-black">
                    {card.category}
                  </span>
                </div>
                <span className="font-semibold text-sm text-black">
                  {card.readTime}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xl text-black">
                  {card.title}
                </span>
                <span className="font-normal text-base text-black">
                  {card.description}
                </span>
              </div>
            </div>
            <div className="flex justify-start items-start gap-2">
              <span className="font-normal text-base text-black">
                Read more
              </span>
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.71087 16.9492L15.4179 11.2422L9.71087 5.53516L8.29688 6.94916L12.5899 11.2422L8.29688 15.5352L9.71087 16.9492Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-end gap-2 px-6 py-3 border border-black">
        <span className="font-normal text-base text-black">View all</span>
      </div>
    </div>
  );
};

export default Papers;
