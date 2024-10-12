import React from "react";
import Image from "next/image";
import blog5 from "../../images/blog5.png"; // Replace with your local image path
import blog6 from "../../images/blog6.png"; // Replace with your local image path

const Blogs: React.FC = () => {
  const cards = [
    {
      title: "Advanced Networking Solutions for Remote Work",
      category: "Advanced Networking",
      readTime: "5 min read",
      description:
        "Strategies and technologies for optimizing network performance and security for remote work environments.",
      img: blog5,
    },
    {
      title: "Future Trends in Cybersecurity for Enterprises",
      category: "Cyber Security",
      readTime: "5 min read",
      description:
        "An overview of emerging trends and technologies in cybersecurity that are shaping the future of enterprise security.",
      img: blog6,
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
                className="rounded-lg object-cover w-full"
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

export default Blogs;
