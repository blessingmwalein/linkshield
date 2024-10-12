import React from "react";
import excellence from "../images/excellence.png"; // Corrected path for default image
import Image from "next/image";

const ExcellenceSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4">
      {/* Image Section */}
      {/* <img 
        src="/path-to-your-image.jpg" 
        alt="Excellence" 
        className="w-full md:w-1/2 object-cover" 
      /> */}
      <Image
        src={excellence} // Dynamic image based on selected tab
        alt="Hero Image"
        className="rounded-lg " // Add this class for curved corners
      />

      {/* Text Section */}
      <div className="flex flex-col gap-8 w-full md:w-1/2 ml-6">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-[2.5rem] text-black">
            Excellence is Our Culture
          </span>
          <span className="font-normal text-lg text-black">
            Choose LinkShield for our unparalleled dedication to quality,
            client-centric approach, and proven results that make us the best
            partner for your IT needs.
          </span>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Comprehensive Services */}
          <div className="flex flex-col gap-4 grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
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
            <span className="font-bold text-xl text-black">
              Comprehensive Services
            </span>
            <span className="font-normal text-base text-black">
              From cybersecurity to software development and networking,
              LinkShield offers a comprehensive suite of services, providing
              everything you need under one roof.
            </span>
          </div>

          {/* Client-Centric Approach */}
          <div className="flex flex-col gap-4 grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
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
            <span className="font-bold text-xl text-black">
              Client-Centric Approach
            </span>
            <span className="font-normal text-base text-black">
              Your goals drive our work. LinkShield’s client-centric approach
              ensures that we prioritize your needs, delivering solutions that
              align with your objectives and enhance your success.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcellenceSection;
