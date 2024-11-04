import React from "react";
import Image from "next/image";
import discoveryhero from "../../images/mobiledevhero2.png";
import Link from "next/link";

const MobileDevelopmentServices = () => {
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
                Transformative AI Solutions for Your Business
              </span>
            </div>
          </div>

          {/* Risk Analysis and User Experience Sections */}
        </div>
      </div>

      {/* Image Section - Takes half the width */}
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <span className="font-normal text-lg text-black mb-6">
          LinkShield offers a range of AI services to help you leverage
          cutting-edge technology for smarter, more efficient business
          processes.
        </span>
        <div className="flex flex-col md:flex-row gap-6 py-2">
          <Card
            title="AI-Driven Application Development"
            description="We develop custom AI-powered applications that enhance functionality, automate tasks, and provide actionable insights, tailored to your specific business needs."
          />
          <Card
            title="Machine Learning Solutions"
            description="Our team creates and implements machine learning models to predict trends, improve decision-making, and optimize operations, driving value through advanced data analysis."
          />
        </div>
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

export default MobileDevelopmentServices;
