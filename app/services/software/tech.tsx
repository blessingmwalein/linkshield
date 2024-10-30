import React from "react";
import Image from "next/image";
import techImage from "../../images/software/tech.png";

// Define a functional component using TypeScript
const Tech: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 p-4 w-full">
      {/* Left Side - Text Section */}
      <div className="flex flex-col gap-4 flex-grow lg:w-1/2">
        <span className="text-lg lg:text-xl font-semibold text-center lg:text-left text-black">
          Tagline
        </span>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-2xl lg:text-4xl text-black">
            Leveraging the Latest Technologies
          </span>
          <span className="font-normal text-base lg:text-lg text-black">
            We utilize the latest technologies to build innovative software
            solutions that keep your business ahead of the competition.
          </span>
        </div>
        {/* Buttons */}
      </div>

      {/* Right Side - Image Section */}
      <div className="lg:w-1/2 flex justify-center items-center flex-grow">
       
        <Image
          className="object-cover w-full h-auto"
          height={500}
          src={techImage}
          alt="CMS"
        />
      </div>
    </div>
  );
};

export default Tech;
