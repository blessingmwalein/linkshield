import React from "react";
import Image from "next/image"; // or from another library as needed

// Import your local images
import networkImage from "../../images/connection.png"; // Adjust the path according to your project structure

const Connection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left Text Content */}
      <div className="flex flex-col gap-4 w-full md:w-1/2"> {/* Use w-1/2 for half width on md and larger */}
        <div className="flex flex-col gap-4 self-stretch">
          <span className="font-bold text-[32px] md:text-[40px] leading-tight text-black">
            Empowering Connectivity with Advanced Enterprise Networking
          </span>
          <span className="font-normal text-[16px] md:text-[18px] leading-relaxed text-black">
            LinkShield provides a full suite of networking services designed to enhance connectivity, security, and performance across your enterprise.
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 self-stretch py-2">
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-[18px] md:text-[20px] leading-snug text-black">
              Network Infrastructure Design
            </span>
            <span className="font-normal text-[14px] md:text-[16px] leading-snug text-black">
              Our experts design tailored network infrastructures that meet your organization’s specific requirements, providing a foundation for reliable and scalable connectivity.
            </span>
          </div>
          
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-[18px] md:text-[20px] leading-snug text-black">
              Cloud Networking Solutions
            </span>
            <span className="font-normal text-[14px] md:text-[16px] leading-snug text-black">
              We offer cloud networking services that enable secure and efficient connectivity between on-premises networks and cloud environments, ensuring seamless data access and collaboration.
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[auto]"> {/* Use w-1/2 for half width on md and larger */}
        <Image
          src={networkImage} // Use the local image imported above
          alt="Network Infrastructure"
          layout="responsive" // Make the image responsive
          width={616} // Keep the aspect ratio
          height={640} // Keep the aspect ratio
          className="object-cover" // Ensure the image covers the container
        />
      </div>
    </div>
  );
};

export default Connection;
