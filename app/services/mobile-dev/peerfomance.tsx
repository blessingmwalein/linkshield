import React from "react";
import Image from "next/image";
import perfomance from "../../images/perfomanceservice.png";

const PerformanceServices = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start gap-8 self-stretch">
      {/* Left Content - Takes half the width */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 justify-start items-start">
        {/* Tagline and Description */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              <span className="font-bold text-4xl text-black">
              Optimized Performance and User Experience
              </span>
              <span className="font-normal text-lg text-black">
              Performance and user experience are critical to the success of a mobile app. LinkShield ensures your app is not only functional but also fast and intuitive.
              </span>
            </div>
          </div>

          {/* Risk Analysis and User Experience Sections */}
          <div className="flex flex-col md:flex-row gap-6 py-2">
            <Card
              title="Mobile User Experience Design"
              description="LinkShield’s design team focuses on creating intuitive and engaging mobile user experiences, ensuring that your app is easy to navigate and visually appealing."
            />
            <Card
              title="Precision Tuning for Maximum Speed"
              description="We implement optimized algorithms and memory management techniques to reduce load times, minimize latency, and deliver consistently high performance, even under heavy app usage."
            />
          </div>
        </div>

      </div>

      {/* Image Section - Takes half the width */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src={perfomance}
          alt="Project Analysis"
          className="w-full object-cover" // Responsive width and maintain aspect ratio
          layout="responsive" // Makes the image responsive
        />
      </div>
    </div>
  );
};

// Card Component for Risk Analysis and User Experience
const Card = ({ title, description }: any) => {
  return (
    <div className="flex flex-col gap-4 grow">
      
      <span className="font-bold text-xl text-black">{title}</span>
      <span className="font-normal text-lg text-black">{description}</span>
    </div>
  );
};

export default PerformanceServices;
