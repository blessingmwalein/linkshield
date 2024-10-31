import React from "react";
import Image from "next/image";
import heroimage from "../../images/web/image1.png";

const Support = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 self-stretch">
      {/* Left Content - Takes half the width */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 justify-center items-center">
        {/* Tagline and Description */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              <span className="font-bold text-4xl text-black">
                Comprehensive Support and Maintenance
              </span>
              <span className="font-normal text-lg text-black">
                We provide ongoing support to keep your website secure,
                up-to-date, and running smoothly, allowing you to focus on your
                business.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section - Takes half the width */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src={heroimage}
          alt="Project Analysis"
          className="w-full object-cover" // Responsive width and maintain aspect ratio
          layout="responsive" // Makes the image responsive
        />
      </div>
    </div>
  );
};

export default Support;
