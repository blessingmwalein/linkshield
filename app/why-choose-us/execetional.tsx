import React from "react";
import exceptionalImage from "../images/exceptional.png";
import Image from "next/image";

const ExceptionalTeamSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4">
      {/* Text Section */}
      <div className="flex flex-col gap-8 w-full md:w-1/2">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-3xl text-black">
            Exceptional Team and Unmatched Customer Service
          </span>
          <span className="font-normal text-lg text-black">
            At LinkShield, our exceptional team is the cornerstone of our
            success. With a relentless dedication to excellence, we provide
            unparalleled customer service and expert support, ensuring that your
            needs are always our top priority.
          </span>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Personalized Customer Care */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-xl text-black">
              Personalized Customer Care
            </span>
            <span className="font-normal text-base text-black">
              We prioritize your success by offering personalized support
              tailored to your unique requirements. Our client-centric approach
              ensures that you receive attentive and responsive service,
              building strong partnerships and lasting trust.
            </span>
          </div>

          {/* 24/7 Expertise at Your Service */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-xl text-black">
              24/7 Expertise at Your Service
            </span>
            <span className="font-normal text-base text-black">
              Our dedicated team of experts is available around the clock,
              ensuring that your needs are met promptly and effectively. We
              bring extensive knowledge and a proactive approach to every
              project, delivering results that exceed expectations.
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      {/* <img
        src="/path-to-your-image.jpg"
        alt="Exceptional Team"
        className="w-full md:w-1/2 object-cover"
      /> */}
      <Image
        src={exceptionalImage} // Dynamic image based on selected tab
        alt="Hero Image"
        className="rounded-lg " // Add this class for curved corners
      />
    </div>
  );
};

export default ExceptionalTeamSection;
