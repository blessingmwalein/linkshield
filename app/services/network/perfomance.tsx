import React from "react";
import Image from "next/image";
import perfomanceImage from "../../images/network/perfomance.png";

const PerfomanceOptimal: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 w-full">
      {/* Left Column */}
      <div className="flex flex-col gap-6 flex-grow w-full">
        <div className="flex flex-col gap-6 w-full">
          <span className="font-bold text-black text-4xl md:text-4xl">
            Customized Network Design for Optimal Performance
          </span>
          <span className="font-normal text-black text-base md:text-lg">
            At LinkShield, we design custom network architectures that align
            with your business goals, focusing on efficiency, security, and
            scalability.
          </span>
        </div>

        {/* List Section */}
        <div className="flex flex-col gap-4 w-full py-2">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M11.5391 10.6348L15.594 6.00563L19.6488 10.6348L15.594 15.2639L11.5391 10.6348Z"
                fill="#212E32"
              />
              <path
                d="M6.06254 15.875L10.1174 11.2459L14.1723 15.875L10.1174 20.5041L6.06254 15.875Z"
                fill="#212E32"
              />
              <path
                d="M6.06254 5.13281L10.1174 0.50368L14.1723 5.13281L10.1174 9.76195L6.06254 5.13281Z"
                fill="#212E32"
              />
              <path
                d="M0.574262 10.377L4.62913 5.74782L8.684 10.377L4.62913 15.0061L0.574262 10.377Z"
                fill="#212E32"
              />
            </svg>
            <span className="font-normal text-black text-base ml-3">
              Comprehensive Network Infrastructure Management
            </span>
          </div>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M11.5391 10.6348L15.594 6.00563L19.6488 10.6348L15.594 15.2639L11.5391 10.6348Z"
                fill="#212E32"
              />
              <path
                d="M6.06254 15.875L10.1174 11.2459L14.1723 15.875L10.1174 20.5041L6.06254 15.875Z"
                fill="#212E32"
              />
              <path
                d="M6.06254 5.13281L10.1174 0.50368L14.1723 5.13281L10.1174 9.76195L6.06254 5.13281Z"
                fill="#212E32"
              />
              <path
                d="M0.574262 10.377L4.62913 5.74782L8.684 10.377L4.62913 15.0061L0.574262 10.377Z"
                fill="#212E32"
              />
            </svg>
            <span className="font-normal text-black text-base ml-3">
              Scalable Networking Architecture for Future Growth
            </span>
          </div>

          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M11.5391 10.6348L15.594 6.00563L19.6488 10.6348L15.594 15.2639L11.5391 10.6348Z"
                fill="#212E32"
              />
              <path
                d="M6.06254 15.875L10.1174 11.2459L14.1723 15.875L10.1174 20.5041L6.06254 15.875Z"
                fill="#212E32"
              />
              <path
                d="M6.06254 5.13281L10.1174 0.50368L14.1723 5.13281L10.1174 9.76195L6.06254 5.13281Z"
                fill="#212E32"
              />
              <path
                d="M0.574262 10.377L4.62913 5.74782L8.684 10.377L4.62913 15.0061L0.574262 10.377Z"
                fill="#212E32"
              />
            </svg>
            <span className="font-normal text-black text-base ml-3">
              Enhancing Network Performance with Intelligent Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <Image
        className="object-cover w-full h-auto"
        src={perfomanceImage}
        alt="Performance Image"
        height={500}
      />
    </div>
  );
};

export default PerfomanceOptimal;
