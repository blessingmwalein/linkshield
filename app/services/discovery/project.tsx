import React from "react";
import Image from "next/image"; // or from another library as needed

// Import your local images
import projectImage from "../../images/projectimage.png"; // Adjust the path according to your project structure
import ArrowIcon from "@/components/arrow_icon";
import Link from "next/link";

const Project = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left Text Content */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {" "}
        {/* Use w-1/2 for half width on md and larger */}
        <div className="flex flex-col gap-4 self-stretch">
          <span className="font-bold text-[32px] md:text-[40px] leading-tight text-black">
            Comprehensive Project Discovery Services
          </span>
          <span className="font-normal text-[16px] md:text-[18px] leading-relaxed text-black">
            At LinkShield, we offer a structured approach to the project
            discovery phase, ensuring that your project is well-planned,
            efficient, and aligned with your goals.
          </span>
        </div>
        <Link
          href={"https://maddevs.io/project-discovery/"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center md:justify-start items-center gap-2 pt-2 mt-4"
        >
          <span className="font-normal text-base md:text-lg text-black cursor-pointer">
            Learn More
          </span>
          <div className="w-6 h-6 mt-4 ml-3">
            <ArrowIcon />
          </div>
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[auto]">
        {" "}
        {/* Use w-1/2 for half width on md and larger */}
        <Image
          src={projectImage} // Use the local image imported above
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

export default Project;
