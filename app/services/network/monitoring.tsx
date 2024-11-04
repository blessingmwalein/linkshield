import CyberCard from "@/components/home/cyber_card";
import SquareButton from "@/components/square_button";
import React from "react";

const Monitoring: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-20 w-full mt-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <span className="font-bold text-3xl md:text-4xl text-black">
          Advanced Network Monitoring
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <span className="font-normal text-base md:text-lg text-black">
          Stay ahead of potential issues with our advanced network monitoring services, providing real-time insights and alerts for proactive management.
          </span>
        </div>
      </div>
      {/* Solutions Section */}
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col md:flex-row gap-12 w-full">
          {/* Network Security */}
          <CyberCard
            number="1"
            title="High-Performance Bandwidth Allocation"
            description="Ensure your network can handle high traffic demands with LinkShield’s bandwidth allocation solutions, designed for optimal performance."
          />

          {/* Data Protection */}
          <CyberCard
            number="2"
            title="Network Redundancy Planning"
            description="Prepare for the unexpected with our network redundancy solutions, ensuring continuous operations and data integrity during outages."
          />

          {/* Cloud Security */}
          <CyberCard
            number="3"
            title="Multi-Cloud Networking"
            description="Enable seamless multi-cloud connectivity with LinkShield’s solutions, ensuring flexibility and high availability across cloud platforms."
          />
        </div>

       
      </div>

      {/* Main Heading */}
    </div>
  );
};

export default Monitoring;

const ArrowIcon: React.FC = () => (
  <svg
    className="w-[7px] h-[11px] text-black"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L7 6L1 11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
