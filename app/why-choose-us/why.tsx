import React from "react";
import Image from "next/image";
import Link from "next/link";


const LinkShieldWhy: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 self-stretch p-4">
      {/* Left Section */}
      <div className="flex flex-col gap-4 grow">
        <span className="font-semibold text-lg leading-tight text-black">
          Tagline
        </span>
        <span className="font-bold text-4xl leading-snug text-black">
          Why LinkShield is the Right Choice
        </span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4 grow w-3/4">
        <span className="font-normal text-xl leading-normal text-black">
          Choose LinkShield for our unparalleled dedication to quality,
          client-centric approach, and proven results that make us the best
          partner for your IT needs.
        </span>
        <div className="flex items-center gap-6 pt-4">
          {/* Button 1 */}
          <Link
          href={"/contact"}
          className="flex justify-center items-center gap-2 px-6 py-3 border border-black">
            <span className="font-normal text-lg leading-normal text-black">
              Get Started
            </span>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default LinkShieldWhy;
