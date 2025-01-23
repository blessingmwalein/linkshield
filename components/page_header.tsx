"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: ReactNode; // Allow title to accept JSX or string
  description: string;
  image: any;
}

const PageHeader = ({ title, description, image }: PageHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
      {/* Left Side: Tabs and Descriptions */}
      <div className="w-full flex flex-col justify-center mb-8 lg:mb-0 lg:mr-4">
        {/* Render title directly */}
        <h2 className="text-6xl font-bold text-white">{title}</h2>
        <p className="mt-6 text-lg text-[#b9d6e0] w-full lg:w-3/4">
          {description}
        </p>
        {/* Button Section */}
        <Link
          href={"/contact"}
          className="mt-6 w-40 flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-solid bg-white cursor-pointer"
        >
          <span className="font-bold text-xl text-center text-black">
            Get quote
          </span>
        </Link>
      </div>

      {/* Right Side: Hero Image */}
      <div className="w-full flex justify-center md:justify-end md:w-3/4 mt-4 md:mt-0">
        <Image
          src={image} // Dynamic image based on selected tab
          alt="Hero Image"
          width={700}
          height={700}
          className="rounded-lg" // Add this class for curved corners
        />
      </div>
    </div>
  );
};

export default PageHeader;
