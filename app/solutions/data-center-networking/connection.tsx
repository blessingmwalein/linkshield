import React from "react";
import Image from "next/image"; // or from another library as needed

// Import your local images
import networkImage from "../../images/datahero2.png"; // Adjust the path according to your project structure

const Connection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left Text Content */}
      <div className="relative w-full md:w-1/2 h-[auto]">
        {" "}
        {/* Use w-1/2 for half width on md and larger */}
        <Image
          src={networkImage} // Use the local image imported above
          alt="Network Infrastructure"
          layout="responsive" // Make the image responsive
          width={616} // Keep the aspect ratio
          height={640} // Keep the aspect ratio
          className="object-cover" // Ensure the image covers the container
        />
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {" "}
        {/* Use w-1/2 for half width on md and larger */}
        <div className="flex flex-col gap-4 self-stretch">
          <span className="font-bold text-[32px] md:text-[40px] leading-tight text-black">
            Redefine Connectivity with Advanced Data Center Networking
          </span>
          <span className="font-normal text-[16px] md:text-[18px] leading-relaxed text-black">
            LinkShield provides a range of services tailored to meet the complex
            needs of modern data centers, ensuring performance, scalability, and
            security.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 self-stretch py-2">
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-[18px] md:text-[20px] leading-snug text-black">
              Data Center Network Design
            </span>
            <span className="font-normal text-[14px] md:text-[16px] leading-snug text-black">
              Our experts design efficient and scalable data center networks,
              tailored to meet your organization’s specific needs, ensuring
              robust connectivity and optimized performance.
            </span>
          </div>

          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-[18px] md:text-[20px] leading-snug text-black">
            Network Optimization for Data Centers
            </span>
            <span className="font-normal text-[14px] md:text-[16px] leading-snug text-black">
            LinkShield employs advanced techniques to optimize data center networks, enhancing speed and reliability while minimizing latency and bottlenecks.
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
    </div>
  );
};

export default Connection;
