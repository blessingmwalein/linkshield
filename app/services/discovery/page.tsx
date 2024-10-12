// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import discoveruhero from "../../images/discoveryhero.png"; // Corrected path for default image
import enterpricehero2 from "../../images/enterprisehero2.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import Project from "./project";
import OptimizedNetwork from "./optimized";
import SecurityMonitoringSection from "./analysis";
import Partners from "./roadmap";
import Elastic from "./elastic";
import userplace from "../../images/userplace.png"; // Corrected path for default image
import { FAQsComponent } from "./faqs";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";
import CompetitorTabs from "./competitor_tab";
import ProjectUnderstanding from "./understatnding";
import ProjectAnalysis from "./analysis";

const Page: React.FC = () => {
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Project  Discovery Phase"
          description="Understanding your project’s needs is essential for its success. At LinkShield, we guide you through a comprehensive discovery phase to ensure your project is built on a solid foundation."
          image={discoveruhero}
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <Project />
        <div className="mt-10">
          <CompetitorTabs />
        </div>
        <div className="mt-10">
          <ProjectUnderstanding />
        </div>
        <div className="mt-10">
          <ProjectAnalysis />
        </div>
       
        <div className="mt-10 flex flex-col justify-start items-start">
          <span className="font-bold text-2xl w-3/4 justify-start items-start  text-black">
          Creating a Roadmap to Guide Your Project
          </span>

          <div className="mt-10">
            <Partners />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-col gap-4 max-w-full mx-auto px-4 items-start">
            <span className="font-semibold text-lg text-center text-black">
              Tagline
            </span>
            <div className="flex flex-col gap-6">
              <span className="font-bold text-3xl text-black">
                Elastic Integrations
              </span>
              <span className="font-normal text-base text-black">
                LinkShield ensures seamless cloud connectivity and efficient
                handling of large data volumes. Our solutions facilitate secure
                integration with cloud environments, while our optimized network
                designs support high data throughput and efficient bandwidth
                utilization.
              </span>
            </div>
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
