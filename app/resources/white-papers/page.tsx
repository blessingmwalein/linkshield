// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import whitepapers from "../../images/whitepapers.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import Papers from "./papers";
import StartJourney from "./start_jorney";

const Page: React.FC = () => {
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Whitepapaers"
          description="Here, we share in-depth research, insights, and expert analyses on key topics in cybersecurity, software development, and networking. Our white papers are designed to provide valuable information and support your strategic decision-making."
          image={whitepapers}
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <div className="flex flex-col items-start gap-6 self-stretch ">
          <span className="font-bold text-4xl text-black">
            In-Depth Research and Insight
          </span>
          <span className="font-normal text-lg text-black max-w-prose">
            Our white papers offer a wealth of knowledge and expert
            perspectives, addressing critical issues and emerging trends in the
            IT landscape.
          </span>
        </div>
        <div className="mt-5 pb-10">
          <Papers />
        </div>
      </div>
      <div className="">
        <StartJourney />
      </div>
      <div className="bg-[#EFEFEF] h-auto  px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] pt-10 pb-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
          {/* Left Section */}
          <div className="flex flex-col gap-6 flex-grow">
            <span className="font-bold text-3xl lg:text-[40px] leading-tight text-black">
              Stay Updated with LinkShield’s Newsletters
            </span>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-md lg:max-w-[513px] flex flex-col gap-4">
            <div className="flex gap-4 w-full">
              {/* Email Input */}
              <div className="flex items-center gap-2 flex-grow bg-white p-3 border border-black">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none text-[16px] text-[#666666]"
                />
              </div>

              {/* Sign Up Button */}
              <div className="flex justify-center items-center gap-2 bg-black px-6 py-3 border border-black cursor-pointer">
                <span className="font-normal text-[16px] text-white">
                  Sign Up
                </span>
              </div>
            </div>

            {/* Terms and Conditions */}
            <span className="font-normal text-[12px] leading-tight text-center">
              By clicking Sign Up, you're confirming that you agree with our
              Terms and Conditions.
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <FooterNav />
      </div>
    </>
  );
};

export default Page;
