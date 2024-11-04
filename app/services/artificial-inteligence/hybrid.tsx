import React from "react";
import Image from "next/image";
import hybridDevImage from "../../images/hybrid.png"; // Replace with the path to your local image
import Link from "next/link";

const HybridDevelopment = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-20 p-4 md:p-6">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-auto">
        <Image
          src={hybridDevImage}
          alt="Hybrid Development"
          layout="responsive" // Changed to 'responsive' for better fluidity
          width={500} // Set a width for aspect ratio
          height={300} // Set a height for aspect ratio
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-6 grow p-4 md:w-1/2">
        {/* Title and Description */}
        <div className="flex flex-col gap-6">
          <span className="font-bold text-[48px] text-black">
            Hybrid Development
          </span>
          <span className="font-normal text-[18px] text-black">
            Save time and costs with our cross-platform solutions that provide a
            consistent experience across iOS, Android, and other platforms,
            using technologies like React Native and Flutter.
          </span>
        </div>

        {/* Buttons Section */}
        <div className="flex items-center gap-6 pt-4">
          <Link
            href={"/contact"}
            className="flex justify-center items-center gap-2 px-6 py-3 border border-black"
          >
            <span className="font-normal text-[16px] text-black">
              Get Started
            </span>
          </Link>
          <Link
            href={
              "https://www.turing.com/resources/hybrid-mobile-app-development"
            }
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <span className="font-normal text-[16px] text-black">
              Learn More
            </span>
            <div className="w-6 h-6">
              {/* Replace with appropriate SVG */}
              <svg className="w-[7.12px] h-[11.41px] text-black" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HybridDevelopment;
