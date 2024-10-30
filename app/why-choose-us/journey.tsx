import Link from "next/link";
import React from "react";

const JourneySection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      <div className="flex flex-col gap-6 grow">
        <span className="font-bold text-[48px] text-black">Start Your Journey with Us</span>
      </div>
      <div className="flex flex-col gap-6 grow justify-start items-start ">
        <span className="font-normal text-[18px] text-black">
          Contact LinkShield today to discover how our exceptional services and client-focused approach can benefit your business.
        </span>
        <Link 
        href={"/contact"}
        className="flex justify-start md:justify-start pt-4">
          <div className="flex justify-center items-center gap-2 bg-black px-6 py-3 rounded text-white">
            <span className="font-normal text-[16px]">Get a quote</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JourneySection;
