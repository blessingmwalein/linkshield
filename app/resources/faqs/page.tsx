// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import pageheaderdefault from "../images/pageheaderdefault.png"; // Corrected path for default image
import defaultuser from "../images/defaultuser.png"; // Corrected path for default image

import Image from "next/image";

import FooterNav from "@/components/footer";
import JourneySection from "@/app/why-choose-us/journey";

const Page: React.FC = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] mt-6">
        <JourneySection />
      </div>
     
      <div className="mt-6">
        <div className="flex flex-col items-center gap-6 p-4">
          <div className="flex flex-col items-center gap-6 self-stretch">
            <span className="font-bold text-[48px] text-center text-white">
              Still have questions?
            </span>
            <span className="font-normal text-[18px] text-center text-white">
              Contact us for more information or to request a quote.
            </span>
          </div>
          <div className="flex gap-4 pt-4">
            <div className="flex justify-center items-center gap-2 bg-black px-6 py-3 border border-white">
              <span className="font-normal text-[16px] text-white">
                Get started
              </span>
            </div>
          </div>
        </div>
        <FooterNav />
      </div>
    </>
  );
  ``;
};

export default Page;
