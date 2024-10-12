// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import uiUxImage from "../../images/uiuxhero.png"; // Corrected path for default image
import uiuxhero2 from "../../images/uiuxhero2.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import userplace from "../../images/userplace.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";
import { FAQsComponent } from "../discovery/faqs";
import ResearchCard from "./research";
import ProcessTabs from "./process_tabs";
import UsabilityTesting from "./usability";
import CustomizedSolutions from "./customizes_solutions";

const Page: React.FC = () => {
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="UI/UX Design"
          description="LinkShield’s UI/UX design services bring your vision to life. We create intuitive, engaging, and user-centric designs that enhance user experiences and drive business success."
          image={uiUxImage}
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <div className="flex flex-col md:flex-row gap-20 self-stretch">
          {/* Title Section */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-4xl leading-tight text-black">
              Building Engaging User Experiences
            </span>
          </div>

          {/* Description Section */}
          <div className="flex flex-col gap-6 grow">
            <span className="font-normal text-lg leading-relaxed text-black">
              At LinkShield, we believe that great design is not just about
              aesthetics; it's about functionality and user experience. Our
              services ensure your digital products are as intuitive as they are
              visually appealing.
            </span>
          </div>
        </div>

        <div className="mt-10">
          <Image
            src={uiuxhero2} // Dynamic image based on selected tab
            alt="Hero Image"
            className="rounded-lg w-full" // Add this class for curved corners
          />
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <span className="font-semibold text-lg text-center text-black">
            UI/UX
          </span>
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-4xl text-center text-black">
              Comprehensive UI/UX Design Services
            </h2>
            <p className="font-normal text-lg text-center text-black">
              Our UI/UX design team crafts intuitive and visually stunning
              interfaces.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ResearchCard />
        </div>

        <div className="flex flex-col md:flex-row gap-20 self-stretch">
          {/* Title Section */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-4xl leading-tight text-black">
              Our Process
            </span>
          </div>
        </div>

        <div className="mt-10">
          <ProcessTabs />
        </div>
        <div className="mt-10">
          <UsabilityTesting />
        </div>

        <div className="max-w-[768px] flex flex-col items-center gap-4 mx-auto">
          <span className="font-semibold text-lg text-center text-black">
            Tagline
          </span>
          <div className="flex flex-col items-center gap-6 w-full">
            <span className="font-bold text-4xl text-center text-black">
              Tailored UI/UX Solutions for Every Business Size
            </span>
            <span className="font-normal text-base text-center text-black">
              At LinkShield, we understand that different businesses have
              different needs. Our UI/UX process is designed to cater to the
              unique requirements of businesses of all sizes and models. Whether
              you're a small startup or a large enterprise, we have the
              expertise to create user-friendly and visually appealing
              interfaces that enhance your digital presence.
            </span>
          </div>
        </div>

        <div className="mt-10 pb-10">
          <CustomizedSolutions />
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
