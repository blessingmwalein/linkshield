import CyberCard from "@/components/home/cyber_card";
import SquareButton from "@/components/square_button";
import React from "react";

const CyberSolutionsCounter: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-20 w-full mt-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <span className="font-bold text-3xl md:text-4xl text-black">
            Proactive and Customized Cybersecurity Solutions
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <span className="font-normal text-base md:text-lg text-black">
            Our proactive approach to cybersecurity ensures that your defenses
            are always up-to-date and tailored to your specific needs. Discover
            our custom solutions designed to protect your business effectively.
          </span>
        </div>
      </div>
      {/* Solutions Section */}
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col md:flex-row gap-12 w-full">
          {/* Network Security */}
          <CyberCard
            number="1"
            title="Network Security"
            description="Our network security solutions protect your organization’s network infrastructure from unauthorized access, data breaches, and other cyber threats, ensuring a secure and reliable network environment."
          />

          {/* Data Protection */}
          <CyberCard
            number="2"
            title="Data Protection"
            description="We provide comprehensive data protection services to safeguard your sensitive information from unauthorized access, data breaches, and other cyber threats, ensuring the confidentiality and integrity of your data."
          />

          {/* Cloud Security */}
          <CyberCard
            number="3"
            title="Cloud Security"
            description="Our cloud security solutions protect your cloud-based applications and data from cyber threats, ensuring the security and compliance of your cloud environment."
          />
        </div>

        {/* Button Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
          {/* Button 1 */}
          <SquareButton
            link={
              "/https://www.checkpoint.com/cyber-hub/network-security/what-is-network-security/"
            }
            children={
              <span className="font-normal text-[16px] text-black">
                Learn More
              </span>
            }
          />

          {/* Button 2 with Icon */}
          {/* <div className="flex justify-center items-center gap-2">
            <span className="font-normal text-[16px] text-black hover:text-white">
              Button
            </span>
            <ArrowIcon />
          </div> */}
        </div>
      </div>

      {/* Main Heading */}
    </div>
  );
};

export default CyberSolutionsCounter;

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
