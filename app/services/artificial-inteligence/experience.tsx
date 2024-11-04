import CircledNumber from "@/components/home/circled_number";
import React from "react";

const Experience = () => {
  const sections = [
    {
      title: "AI Solutions for Business Growth",
      description:
        "LinkShield’s AI solutions are designed to support and drive business growth, enhancing efficiency, automating processes, and delivering valuable insights to help you achieve your strategic goals.",
    },
    {
      title: "Predictive Analytics",
      description:
      "Our predictive analytics services use AI to analyze historical data and forecast future trends, empowering you to make informed decisions and stay ahead of the competition.",
    },
    {
      title: "AI Security Solutions",
      description:
        "We implement robust security measures to protect your AI systems from threats, including data breaches and malicious attacks, ensuring your AI applications remain secure and reliable.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-4">
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

export default Experience;
