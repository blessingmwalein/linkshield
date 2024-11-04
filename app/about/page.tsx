// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import pageheaderdefault from "../images/pageheaderdefault.png"; // Corrected path for default image
import defaultuser from "../images/defaultuser.png"; // Corrected path for default image

import Image from "next/image";

import FooterNav from "@/components/footer";
import SecuritySolutions from "./solutions";
import TeamGrid from "./teams";
import RecognitionsAndAwards from "./awards";
import AverageCompaniesSection from "./work_with";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        description="From proactive threat detection to comprehensive compliance management and security audits, LinkShield offers bespoke cybersecurity solutions designed to protect your digital assets, ensure operational resilience, and secure your business against evolving cyber threats.."
        image={pageheaderdefault}
      />

      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] mt-6">
        <SecuritySolutions />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] pt-6">
        <div className="w-full max-w-[768px] flex flex-col items-center gap-4 mx-auto">
          <div className="flex flex-col items-center gap-6 self-stretch">
            <span className="font-bold text-4xl md:text-[48px] leading-tight text-center text-black">
              Meet Our Team
            </span>
            <span className="font-normal text-lg md:text-[18px] leading-[1.5] text-center text-black">
              Get to know the leaders behind LinkShield.
            </span>
          </div>
        </div>

        <TeamGrid />
        <div className="flex flex-col items-center gap-6 mt-7 mb-7 pb-7">
          <div className="flex flex-col items-center gap-4">
            <span className="font-bold text-[32px] text-center text-black">
              We’re hiring!
            </span>
            <span className="font-normal text-[18px] text-center text-black">
              Apply to join our vibrant team at LinkShield
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 px-6 py-3 outline outline-1 outline-black">
            <span className="font-normal text-[16px] text-black">
              Open positions
            </span>
          </div>
        </div>

        {/* <RecognitionsAndAwards /> */}
        {/* <AverageCompaniesSection /> */}
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
            <Link
              className="flex justify-center items-center gap-2 bg-black px-6 py-3 border border-white"
              href={"contact"}
            >
              <span className="font-normal text-[16px] text-white">
                Get started
              </span>
            </Link>
          </div>
        </div>
        <FooterNav />
      </div>
    </>
  );
  ``;
};

export default Page;
