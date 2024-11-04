import CircledNumber from "@/components/home/circled_number";
import React from "react";

const Challenges = () => {
  const sections = [
    {
      title: "Seamless Integration Services",
      description:
        "We facilitate smooth integration of third-party services and tools, ensuring they work harmoniously with your website.",
    },
    {
      title: "Bespoke Full Stack Solutions",
      description:
      "Our team builds tailored platforms that optimize the business’ experience, increase conversions, and reduce ad spend.",
    },
    {
      title: "Scalable Architecture Design",
      description:
        "We design backend infrastructures that are capable of handling increased traffic and data, supporting business growth.",
    },
    {
      title: "Enhanced UX/UI Design",
      description:
        "We create intuitive and visually appealing designs that improve user satisfaction and engagement, driving conversions.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-4 mt-10 pb-10">
      <div className="flex flex-col gap-12 md:flex-row md:gap-12">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center gap-8 grow">
            <div className="flex flex-col gap-6 justify-center">
              <CircledNumber number={(index + 1).toString()} />

              <span className="font-bold text-2xl text-black">
                {section.title}
              </span>
              <span className="font-normal text-base text-black">
                {section.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex items-center gap-6 pt-4">
        <div className="flex justify-center items-center gap-2 px-6 py-3 border border-black">
          <span className="font-normal text-base text-black">Button</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span className="font-normal text-base text-black">Button</span>
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
      </div> */}
    </div>
  );
};

export default Challenges;
