// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import webdev from "../../images/webdevhero.png"; // Corrected path for default image
import uiuxhero2 from "../../images/mobiledevhero2.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import userplace from "../../images/userplace.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";
import { FAQsComponent } from "../discovery/faqs";
import BackEnds from "./backends";
import FrontEnds from "./frontends";
import Culture from "./culture";
import WebDevelopmentServices from "./services";
import SolutionsSection from "./solutions";

const Page: React.FC = () => {
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Web App Development Services"
          description="LinkShield specializes in delivering innovative and tailored web development solutions that elevate your online presence. From concept to launch, we build responsive, secure, and high-performing websites that captivate and convert."
          image={webdev}
        />
      </div>

      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <BackEnds />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <FrontEnds />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <WebDevelopmentServices />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <Culture />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] pb-10">
        <div className="w-full max-w-3xl flex flex-col items-center gap-4 p-4 mx-auto">
          {/* Tagline */}
          <span className="font-semibold text-[16px] text-center text-black">
            Tagline
          </span>

          {/* Title and Description */}
          <div className="flex flex-col items-center gap-6 w-full">
            <span className="font-bold text-[32px] md:text-[48px] text-center text-black">
              Drive Sales with Our E-commerce Solutions
            </span>
            <span className="font-normal text-[16px] md:text-[18px] text-center text-black">
              For businesses looking to enhance their online sales capabilities,
              LinkShield offers robust e-commerce development services. We build
              online stores that are not only visually appealing but also highly
              functional and secure.
            </span>
          </div>
        </div>

        <SolutionsSection />
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
