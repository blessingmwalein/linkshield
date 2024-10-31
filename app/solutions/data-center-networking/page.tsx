// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import datacenterimage from "../../images/datacenterhero.png"; // Corrected path for default image
import datahero from "../../images/datahero.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";

import userplace from "../../images/userplace.png"; // Corrected path for default image
import Connection from "./connection";
import Scalability from "./monitoring";
import { FAQsComponent } from "../enterprise-networking/faqs";
import Efficient from "./efficient";
import Critical from "./critical";
import Intergrated from "./intergrated";
import Ratings from "@/components/ratings";

const Page: React.FC = () => {
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Data Center Networking"
          description="LinkShield provides high-performance data center networking solutions designed to scale with your business. Our innovative designs ensure seamless connectivity, robust security, and optimized data flow, making your data center a reliable backbone for your operations."
          image={datacenterimage}
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto mt-10 pt-6 pb-6 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <Connection />

        <div className="mt-10">
          <Scalability />
        </div>

        <div className="mt-10">
          <Image
            src={datahero} // Dynamic image based on selected tab
            alt="Hero Image"
            className="rounded-lg w-full" // Add this class for curved corners
          />
        </div>
      </div>
      <div className="bg-[#EFEFEF] h-auto  pt-6 pb-6 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <Intergrated />
      </div>

      <div className="bg-[#EFEFEF] h-auto  pt-6 pb-6 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <Critical />
        <div className="mt-10">
          <div className="flex flex-col gap-4 max-w-full mx-auto px-4 items-start">
            {/* <span className="font-semibold text-lg text-center text-black">
              Tagline
            </span> */}
            <div className="flex flex-col gap-6 w-1/2">
              <span className="font-bold text-3xl text-black">
                Reliable, Efficient, Resilient: The Future of Data Center
                Networking
              </span>
              <span className="font-normal text-base text-black">
                LinkShield’s data center networking ensures reliability with
                predictive analytics to prevent issues, automated management for
                seamless control, and high-availability solutions to maximize
                uptime and protect against disruptions.
              </span>
            </div>
          </div>

          <div className="mt-10">
            <Efficient />
          </div>
          <div className="mt-10 pb-10">
            <Ratings />
          </div>
        </div>
      </div>

      <div className="">
        <StartJourney />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]  pb-10">
        <FAQsComponent />
      </div>

      <div className="mt-6">
        <FooterNav />
      </div>
    </>
  );
};

export default Page;
