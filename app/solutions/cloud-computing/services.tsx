import React from "react";
import Image from "next/image";
import discoveryhero from "../../images/mobiledevhero2.png";
import Link from "next/link";

const CloudInfrastructure = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start gap-8 self-stretch mt-10">
      {/* Left Content - Takes half the width */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 justify-start items-start">
        {/* Tagline and Description */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {/* <span className="font-semibold text-lg text-black">Tagline</span> */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-4xl text-black">
              Optimize and Secure Your Cloud Infrastructure
              </span>
            </div>
          </div>

          {/* Risk Analysis and User Experience Sections */}
        </div>
      </div>

      {/* Image Section - Takes half the width */}
      <div className="flex flex-col justify-center w-full md:w-1/2">
        <span className="font-normal text-lg text-black mb-6">
        Ensure your cloud network performs at its best with LinkShield’s optimization and security solutions, designed to handle high demand and protect your assets.
        </span>
        <div className="flex flex-col md:flex-row gap-6 py-2">
          <Card
            title="Cloud Performance Optimization"
            description="LinkShield utilizes advanced techniques to optimize cloud network performance, reducing latency and improving data flow for a superior user experience."
          />
          <Card
            title="Network Virtualization"
            description="Our network virtualization solutions streamline cloud management, enabling efficient resource allocation and enhanced flexibility within your cloud infrastructure."
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

export default CloudInfrastructure;
