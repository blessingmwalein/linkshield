import React from "react";
import Image from "next/image";
import heroimage from "../../images/culturehero.png";

const Culture = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 self-stretch">
      {/* Left Content - Takes half the width */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 justify-center items-center">
        {/* Tagline and Description */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              <span className="font-bold text-4xl text-black">
              A Culture of Excellence
              </span>
              <span className="font-normal text-lg text-black">
              Excellence is embedded in everything we do by default. Complexity is how much work there is to be done and how much time it will take, this is what we charge for. Our prices are very affordable as a result. 
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Image Section - Takes half the width */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src={heroimage}
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="none"
      >
        <path
          d="M15.0046 13.6719L20.2773 7.6524L25.55 13.6719L20.2773 19.6914L15.0046 13.6719Z"
          fill="#212E32"
        />
        <path
          d="M7.87565 20.4844L13.1484 14.4649L18.4211 20.4844L13.1484 26.5039L7.87565 20.4844Z"
          fill="#212E32"
        />
        <path
          d="M7.87565 6.51953L13.1484 0.500052L18.4211 6.51953L13.1484 12.539L7.87565 6.51953Z"
          fill="#212E32"
        />
        <path
          d="M0.746739 13.3359L6.01948 7.31646L11.2922 13.3359L6.01948 19.3554L0.746739 13.3359Z"
          fill="#212E32"
        />
      </svg>
      <span className="font-bold text-xl text-black">{title}</span>
      <span className="font-normal text-lg text-black">{description}</span>
    </div>
  );
};

export default Culture;
