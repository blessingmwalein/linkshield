import React from "react";
import SquareButton from "../square_button";
import CyberCard from "./cyber_card";
import CyberCard2 from "./cyber_card2";
import SolutionsTab from "./tailored_solution_tab";
import CyberSecurityCard from "./cyber_security_card";

const CybersecuritySolutions: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-20 w-full bg-[#efefef] px-4 md:px-[141px] py-28 mt-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="flex flex-col gap-4 grow">
          <span className="font-bold text-3xl md:text-4xl text-black">
            Proactive and Customized Cybersecurity Solutions
          </span>
        </div>
        <span className="font-normal text-base md:text-lg text-black">
          Our proactive approach to cybersecurity ensures that your defenses are
          always up-to-date and tailored to your specific needs. Discover our
          custom solutions designed to protect your business effectively.
        </span>
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
            link="/services/cyber-security"
            children={
              <span className="font-normal text-[16px] text-black">
                Learn More
              </span>
            }
          />

          {/* Button 2 with Icon */}
          {/* <div className="flex justify-center items-center gap-2">
            <span className="font-normal text-[16px] text-black">Button</span>
            <ArrowIcon />
          </div> */}
        </div>
      </div>

      {/* Main Heading */}
      <span className="font-bold text-3xl md:text-4xl text-start text-black">
        Software Development Meets <br /> Cybersecurity
      </span>

      {/* Solutions Container */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 w-full">
        {/* Solution 1: Built-In Security */}
        <CyberCard2
          title="Built-In Security from Day One"
          description="Our software development process incorporates secure coding practices to protect against vulnerabilities. By integrating security from the outset, we ensure your applications are resilient to threats and comply with industry standards."
          link="https://safety.google/security/built-in-protection/"
        />

        {/* Solution 2: Agile Development */}
        <CyberCard2
          title="Agile Development"
          description="Our agile approach allows for iterative development and continuous improvement. By involving you in each phase, we ensure that the software evolves with your needs, delivering high-quality results on time and within budget."
          link="https://www.opentext.com/what-is/agile-development"
        />

        {/* Solution 3: Unified Approach to Security */}
        <CyberCard2
          title="Unified Approach to Security"
          description="LinkShield integrates advanced cybersecurity solutions with our software development services. This seamless integration enhances your application's security posture, providing comprehensive protection against cyber threats and ensuring a secure user experience."
          link="https://www.securitymagazine.com/articles/101006-a-unified-approach-to-risk-management"
        />
      </div>

      <span className="font-bold text-3xl md:text-4xl text-start text-black">
        Tailored Solutions from Your Starting Point
      </span>
      <SolutionsTab />

      <CyberSecurityCard />
    </div>
  );
};

export default CybersecuritySolutions;

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
