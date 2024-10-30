import React from "react";

import Image from "next/image";
import servicesBanner from "../../images/software/hero.png";

const SoftwareServciesBanner: React.FC = () => {
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
            Innovative Software Development Services Tailored for Your Success
          </span>
          <span className="font-normal text-lg text-black">
            LinkShield develops high-performance web applications that offer
            seamless user experiences. Our team ensures your web applications
            are responsive, secure, and optimized for performance.
          </span>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Comprehensive Services */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-xl text-black">
              User-Centric Design
            </span>
            <span className="font-normal text-base text-black">
              Our development process prioritizes user experience, ensuring that
              your software is intuitive, user-friendly, and engaging.
            </span>
          </div>

          {/* Client-Centric Approach */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-xl text-black">
              Full-Stack Development
            </span>
            <span className="font-normal text-base text-black">
              Our full-stack development services cover every aspect of your
              application, from the user interface to the server-side logic. We
              use the latest technologies to build scalable and robust software
              solutions.
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

export default SoftwareServciesBanner;
