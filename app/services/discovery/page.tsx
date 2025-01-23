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
import IdeaPartner from "./idea_patner";
import { GlobalFaq } from "@/components/global_faq";

const Page: React.FC = () => {
  const faqs = [
    {
      question:
        "How does LinkShield handle the scalability of networking solutions for growing businesses?",
      answer:
        "LinkShield utilizes modular networking designs and scalable architectures, allowing businesses to expand their network infrastructure as needed without significant overhauls. We implement solutions like Software-Defined Networking (SDN) and Network Function Virtualization (NFV) to enhance scalability.",
    },
    {
      question:
        "What measures does LinkShield take to ensure network security across different environments?",
      answer:
        "Our approach to network security includes deploying multi-layered security protocols, using advanced firewalls, intrusion detection and prevention systems, and continuous monitoring. We also conduct regular security audits and vulnerability assessments to identify and mitigate potential risks.",
    },
    {
      question:
        "Can LinkShield integrate existing legacy systems into a new network infrastructure?",
      answer:
        "Yes, LinkShield has extensive experience in integrating legacy systems into modern network infrastructures. We use a combination of API gateways, middleware, and custom development to ensure seamless communication and interoperability between old and new systems.",
    },
    {
      question:
        "What are the key benefits of LinkShield’s cloud networking solutions?",
      answer:
        "LinkShield’s cloud networking solutions offer enhanced scalability, flexibility, and cost-effectiveness. They allow businesses to scale resources on-demand, improve network performance, and provide better disaster recovery options through cloud-based backups and failover mechanisms.",
    },
    {
      question:
        "How does LinkShield ensure the reliability of its network management services?",
      answer:
        "Reliability is achieved through proactive monitoring, automated management tools, and a dedicated support team. We use real-time analytics and automated alerts to identify issues before they impact operations, ensuring continuous network availability and performance.",
    },
  ];
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title={
            <>
              Project <br /> Discovery Phase
            </>
          }
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
      </div>
      <div className="">
        <IdeaPartner />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]  pb-10">
        <GlobalFaq faqs={faqs} />
      </div>
      <div className="mt-6">
        <FooterNav />
      </div>
    </>
  );
};

export default Page;
