import React from "react";
import Image from "next/image";
import discoveryhero from "../../images/discoveryhero2.png";
import Link from "next/link";

const ProjectAnalysis = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start gap-8 self-stretch">
      {/* Left Content - Takes half the width */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 justify-start items-start">
        {/* Tagline and Description */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {/* <span className="font-semibold text-lg text-black">Tagline</span> */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-4xl text-black">
                Thorough Analysis for Successful Project Outcomes
              </span>
              <span className="font-normal text-lg text-black">
                LinkShield's discovery phase includes in-depth analysis to
                ensure your project is set up for success from the start.
              </span>
            </div>
          </div>

          {/* Risk Analysis and User Experience Sections */}
          <div className="flex flex-col md:flex-row gap-6 py-2">
            <Card
              title="Risk Analysis and Mitigation"
              description="Our team conducts a thorough risk analysis to identify potential challenges and develops strategies to mitigate them, ensuring a smooth project execution."
            />
            <Card
              title="User Experience Research"
              description="LinkShield places a strong emphasis on user experience, conducting research to understand user needs and preferences, which informs design and functionality."
            />
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex items-center gap-6 pt-4">
          <Link
            href={"/contact"}
            className="flex justify-center items-center gap-2"
          >
            <span className="font-normal text-lg text-black">Get Started</span>
            <div className="w-6 h-6">
              <svg className="w-full h-full text-black" viewBox="0 0 24 24">
                <path
                  d="M9.71087 16.9492L15.4179 11.2422L9.71087 5.53516L8.29688 6.94916L12.5899 11.2422L8.29688 15.5352L9.71087 16.9492Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Image Section - Takes half the width */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src={discoveryhero}
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

export default ProjectAnalysis;
