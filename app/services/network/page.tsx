// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import heroImage from "../../images/network/hero.png"; // Corrected path for default image
import mainHeroImage from "../../images/network/mainhero.png"; // Corrected path for default image
import heroImage2 from "../../images/cyber/hero1.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import userplace from "../../images/userplace.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";
import { FAQsComponent } from "../discovery/faqs";
import { GlobalFaq } from "@/components/global_faq";
import CybersecuritySolutions from "@/components/home/cyber_solutions";
import SquareButton from "@/components/square_button";
import CyberCard2 from "@/components/home/cyber_card2";
import Ratings from "@/components/ratings";
import KeyServices from "../cyber-security/key_services";
import CyberServicesBanner from "../cyber-security/services_banner";
import CyberSolutionsCounter from "../cyber-security/services_counter";
import Solutions from "./solutions";
import PerfomanceOptimal from "./perfomance";
import Monitoring from "./monitoring";

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
          title="Our Networking Solutions"
          description="LinkShield delivers tailored networking solutions that meet the unique needs of your business. From secure enterprise networking to cloud integration and data center management, our experts ensure your network infrastructure is robust, scalable, and optimized for performance.."
          image={heroImage}
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]  pb-10">
        <div className="mb-6">
          <Solutions />
        </div>

        <div className="mb-8">
          <PerfomanceOptimal />
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-6">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <span className="font-bold text-3xl md:text-4xl text-black">
              Enterprise Network Optimization
            </span>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <span className="font-normal text-base md:text-lg text-black">
              Optimize your enterprise network with LinkShield’s expert
              solutions, focusing on reducing latency, enhancing reliability,
              and improving overall network performance.
            </span>
          </div>
        </div>

        <Image
          src={mainHeroImage} // Dynamic image based on selected tab
          alt="Hero Image"
          className="rounded-lg w-full mt-6" // Add this class for curved corners
        />

        <Monitoring />

        <div className="mt-10">
          <Ratings />
        </div>
      </div>

      <div className="">
        <StartJourney />
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
