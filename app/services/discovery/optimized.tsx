import React from "react";
import Image from "next/image"; // or from another library as needed
import networkImage from "../../images/scalable.png"; // Adjust the path according to your project structure

const OptimizedNetwork = () => {
  return (
    <div className="flex items-center gap-8 md:gap-20 self-stretch">
      {/* Image Section */}
      <div className="relative w-full md:w-[616px] h-[auto]">
        {" "}
        {/* Responsive image section */}
        <Image
          src={networkImage} // Use the local image imported above
          alt="Optimized Network"
          layout="responsive" // Make the image responsive
          width={616} // Keep the aspect ratio
          height={640} // Keep the aspect ratio
          className="object-cover" // Ensure the image covers the container
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-8 grow">
        <div className="flex flex-col gap-6 self-stretch">
          <span className="font-bold text-[32px] md:text-[40px] leading-tight text-black">
            Optimized and Scalable Network Architectures
          </span>
          <span className="font-normal text-[16px] md:text-[18px] leading-relaxed text-black">
            Scalability and optimization are key to maintaining a robust
            network. LinkShield ensures your network grows with your business
            while maintaining top performance.
          </span>
        </div>

        <div className="flex flex-col gap-4 self-stretch">
          {/* List of Features */}
          <div className="flex items-center gap-4 self-stretch">
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  d="M15.0046 13.6719L20.2773 7.6524L25.55 13.6719L20.2773 19.6914L15.0046 13.6719Z"
                  fill="#212E32"
                />
                <path
                  d="M7.87565 20.4844L13.1484 14.4649L18.4211 20.4844L13.1484 26.5039L7.87565 20.4844Z"
                  fill="#212E32"
                />
                <path
                  d="M7.87565 6.51953L13.1484 0.500052L18.4211 6.51953L13.1484 12.539L7.87565 6.51953Z"
                  fill="#212E32"
                />
                <path
                  d="M0.746739 13.3359L6.01948 7.31646L11.2922 13.3359L6.01948 19.3554L0.746739 13.3359Z"
                  fill="#212E32"
                />
              </svg>
            </div>
            <span className="font-normal text-[16px] leading-snug text-black">
              Scalable Network Architecture
            </span>
          </div>
          <div className="flex items-center gap-4 self-stretch">
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  d="M15.0046 13.6719L20.2773 7.6524L25.55 13.6719L20.2773 19.6914L15.0046 13.6719Z"
                  fill="#212E32"
                />
                <path
                  d="M7.87565 20.4844L13.1484 14.4649L18.4211 20.4844L13.1484 26.5039L7.87565 20.4844Z"
                  fill="#212E32"
                />
                <path
                  d="M7.87565 6.51953L13.1484 0.500052L18.4211 6.51953L13.1484 12.539L7.87565 6.51953Z"
                  fill="#212E32"
                />
                <path
                  d="M0.746739 13.3359L6.01948 7.31646L11.2922 13.3359L6.01948 19.3554L0.746739 13.3359Z"
                  fill="#212E32"
                />
              </svg>
            </div>
            <span className="font-normal text-[16px] leading-snug text-black">
              WAN Optimization
            </span>
          </div>
          <div className="flex items-center gap-4 self-stretch">
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  d="M15.0046 13.6719L20.2773 7.6524L25.55 13.6719L20.2773 19.6914L15.0046 13.6719Z"
                  fill="#212E32"
                />
                <path
                  d="M7.87565 20.4844L13.1484 14.4649L18.4211 20.4844L13.1484 26.5039L7.87565 20.4844Z"
                  fill="#212E32"
                />
                <path
                  d="M7.87565 6.51953L13.1484 0.500052L18.4211 6.51953L13.1484 12.539L7.87565 6.51953Z"
                  fill="#212E32"
                />
                <path
                  d="M0.746739 13.3359L6.01948 7.31646L11.2922 13.3359L6.01948 19.3554L0.746739 13.3359Z"
                  fill="#212E32"
                />
              </svg>
            </div>
            <span className="font-normal text-[16px] leading-snug text-black">
              SD-WAN Solutions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizedNetwork;
