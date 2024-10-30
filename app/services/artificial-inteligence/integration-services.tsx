import React from "react";
import Image from "next/image"; // Make sure to import Image from 'next/image'
import Link from "next/link";

const IntegrationSerevices = ({
  title,
  description,
  actionLink,
  image,
}: any) => {
  return (
    <div className="flex flex-col md:flex-row self-stretch grow bg-white outline outline-black mt-6">
      <div className="flex flex-col justify-center items-end self-stretch md:w-1/2">
        <Image
          src={image} // Dynamic image based on the passed prop
          alt="Hero Image"
          layout="responsive" // Optional: Adjusts the image to fill its parent while maintaining aspect ratio
        />
      </div>
      <div className="flex flex-col justify-center gap-8 self-stretch p-12 md:w-1/2">
        <div className="flex flex-col gap-2 self-stretch">
          <span className="font-semibold text-[16px] text-black">Tagline</span>
          <div className="flex flex-col gap-6 self-stretch">
            <span className="font-bold text-[40px] text-black">{title}</span>
            <span className="font-normal text-[16px] text-black">
              {description}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6 self-stretch">
          <Link
            href={actionLink}
            target="_blank"
            className="flex justify-center items-center gap-2 px-6 py-3 outline outline-black"
          >
            <span className="font-normal text-[16px] text-black">
              Learn More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSerevices;
