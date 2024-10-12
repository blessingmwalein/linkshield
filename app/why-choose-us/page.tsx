// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import pageheaderdefault from "../images/pageheaderdefault.png"; // Corrected path for default image
import advantageimage from "../images/advantageimage.png"; // Corrected path for default image
import LinkShieldAdvantage from "./advantages";
import Image from "next/image";
import LinkShieldWhy from "./why";
import LinkShieldMetrics from "./linkshield_metrics";
import ExcellenceSection from "./excellence";
import ExceptionalTeamSection from "./execetional";
import SuccessMetricsSection from "./number";
import JourneySection from "./journey";
import FooterNav from "@/components/footer";

const Page: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Why Choose Us?"
        description="At LinkShield, we pride ourselves on delivering exceptional IT solutions that set us apart from the competition. Our commitment to excellence, innovation, and client satisfaction makes us the ideal partner for all your cybersecurity, software development, and networking needs."
        image={pageheaderdefault}
      />
      <div className="bg-[#EFEFEF] h-auto mt-20 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <LinkShieldAdvantage />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <Image
          src={advantageimage} // Dynamic image based on selected tab
          alt="Hero Image"
          className="rounded-lg w-full" // Add this class for curved corners
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <LinkShieldWhy />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <LinkShieldMetrics />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <ExcellenceSection />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <ExceptionalTeamSection />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <div className="flex flex-col md:flex-row gap-8 p-4 w-full">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <span className="font-bold text-4xl text-black">
              Good Numbers for Your Business
            </span>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <span className="font-normal text-lg text-black">
              Our commitment to delivering high-quality results, tailored
              strategies, and innovative technology ensures that your IT needs
              are met with precision and efficiency.
            </span>
          </div>
        </div>

        <SuccessMetricsSection />
        <div className="mt-6 mb-6">
          <JourneySection />
        </div>
      </div>

      <div className="mt-6">
        <FooterNav />
      </div>
    </>
  );
};

export default Page;
