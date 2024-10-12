import React from "react";
import Image from "next/image";


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
          <div className="flex justify-center items-center gap-2 px-6 py-3 border border-black">
            <span className="font-normal text-lg leading-normal text-black">
              Button
            </span>
          </div>
          {/* Button 2 with Icon */}
          <div className="flex justify-center items-center gap-2">
            <span className="font-normal text-lg leading-normal text-black">
              Button
            </span>
            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.70697 16.9492L15.414 11.2422L9.70697 5.53516L8.29297 6.94916L12.586 11.2422L8.29297 15.5352L9.70697 16.9492Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkShieldWhy;
