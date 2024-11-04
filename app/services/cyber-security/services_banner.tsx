import React from "react";

import Image from "next/image";
import servicesBanner from "../../images/cyber/servicesbanner.png";

const CyberServicesBanner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 ">
      {/* Image Section */}
      {/* <img 
        src="/path-to-your-image.jpg" 
        alt="Excellence" 
        className="w-full md:w-1/2 object-cover" 
      /> */}

      {/* Text Section */}
      <div className="flex flex-col gap-8 w-full md:w-1/2 ">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-[2.5rem] text-black">
            Comprehensive Cybersecurity Services to Protect Your Business
          </span>
          <span className="font-normal text-lg text-black">
            Our suite of cybersecurity services addresses every aspect of your
            security needs, from proactive threat detection to compliance
            assurance. Explore our offerings to find the right solutions for
            your business.
          </span>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Comprehensive Services */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-xl text-black">
              Simulated Attacks to Find Weaknesses
            </span>
            <span className="font-normal text-base text-black">
              We conduct penetration testing to simulate real-world attacks on
              your systems, uncovering vulnerabilities before malicious actors
              can exploit them and providing detailed recommendations for
              remediation.
            </span>
          </div>

          {/* Client-Centric Approach */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-xl text-black">
              Security Audits
            </span>
            <span className="font-normal text-base text-black">
              Our thorough security audits evaluate your entire IT
              infrastructure to identify vulnerabilities and ensure compliance
              with security standards, providing actionable insights for
              improving your security posture.
            </span>
          </div>
        </div>
      </div>

      <Image
        src={servicesBanner} // Dynamic image based on selected tab
        alt="Hero Image"
        className="rounded-lg " // Add this class for curved corners
      />
    </div>
  );
};

export default CyberServicesBanner;
