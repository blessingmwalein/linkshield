import React from "react";
import perfomanceimage from "../../images/software/performance.png";
import agileImage from "../../images/software/agile.png";
import cmsImage from "../../images/software/cms.png";
import Image from "next/image";

const Innovations: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left Column (Mobile Application Development) */}
        <div className="flex flex-col gap-8 flex-grow lg:w-1/2">
          <div className="bg-white border border-black">
            {/* Tagline and Heading Section */}
            <div className="flex flex-col justify-center gap-8 p-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-6">
                  <span className="font-bold text-3xl lg:text-4xl text-black">
                    Mobile Application Development
                  </span>
                  <span className="font-normal text-base text-black">
                    Our mobile development services cater to both iOS and
                    Android platforms. We build intuitive, high-quality mobile
                    applications that enhance user engagement and provide a
                    superior mobile experience.
                  </span>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex justify-center items-center">
              <Image
                className="object-cover w-full h-auto"
                height={500}
                src={perfomanceimage}
                alt="Performance"
              />
            </div>
          </div>

          {/* Architecture Design Card */}
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            <div className="bg-white border border-black p-6 flex flex-col">
              <span className="font-bold text-xl text-black">
                Scalable Architecture Design
              </span>
              <span className="font-normal text-base text-black mt-6">
                We design software architectures that are scalable and adaptable
                to future needs. Our solutions grow with your business, ensuring
                long-term value and efficiency.
              </span>
            </div>
            <div className="bg-white border border-black p-6 flex flex-col">
              <span className="font-bold text-xl text-black">
                API Development and Integration
              </span>
              <span className="font-normal text-base text-black mt-6">
                LinkShield provides API development and integration services to
                connect your software with external systems, enabling seamless
                data exchange and functionality.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (Enterprise Software Development) */}
        <div className="flex flex-col gap-8 flex-grow lg:w-1/2">
          <div className="bg-white border border-black flex flex-col lg:flex-row">
            {/* Image and Content Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <Image
                className="object-cover w-full h-auto"
                height={500}
                src={cmsImage}
                alt="CMS"
              />
            </div>
            <div className="flex lg:w-1/2 flex-col justify-center p-6 flex-grow">
              <span className="font-bold text-2xl text-black">
                Enterprise Software Development
              </span>
              <span className="font-normal text-base text-black">
                Scalable Solutions for Growing Businesses. LinkShield
                specializes in developing enterprise-level software solutions
                that are scalable, secure, and capable of handling complex
                business processes.
              </span>
            </div>
          </div>

          {/* Agile Development Section */}
          <div className="bg-white border border-black">
            <div className="p-8">
              {/* <span className="font-semibold text-lg text-black">Tagline</span> */}
              <div className="flex flex-col gap-6">
                <span className="font-bold text-3xl text-black">
                  Agile Development Methodology
                </span>
                <span className="font-normal text-base text-black">
                  We employ agile development methodologies to ensure fast
                  delivery of software solutions. Our iterative approach allows
                  for regular updates and improvements, keeping your project
                  aligned with your business goals.
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="w-full h-auto object-cover"
                src={agileImage}
                alt="Agile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovations;
