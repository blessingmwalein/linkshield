"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

// Import your images
import cyyberImage from "../../app/images/cyber_hero.png";
import devImage from "../../app/images/dev_hero.png";
import networkImage from "../../app/images/networking_hero.png";
import TextLogo from "../text_logo";
import Link from "next/link";

// Define your images for each tab
const heroImages = [cyyberImage, devImage, networkImage];

const HomeTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-full mt-12 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
      {/* Left Side: Tabs and Descriptions */}
      <div className="flex flex-col items-start w-full md:w-1/2">
        <TextLogo />

        <div className="mt-12">
          <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <TabList className="flex flex-wrap justify-start border-b-2 border-transparent">
              {/* Tab Items */}
              <Tab
                className={`py-2 px-1 font-bold ${
                  selectedIndex === 0
                    ? "text-white border-b-4 border-white"
                    : "text-gray-500"
                }`}
              >
                Cybersecurity
              </Tab>
              <Tab
                className={`py-2 px-1 font-bold ${
                  selectedIndex === 1
                    ? "text-white border-b-4 border-white"
                    : "text-gray-500"
                }`}
              >
                Developer
              </Tab>
              <Tab
                className={`py-2 px-1 font-bold ${
                  selectedIndex === 2
                    ? "text-white border-b-4 border-white"
                    : "text-gray-500"
                }`}
              >
                Networking
              </Tab>
            </TabList>
            {/* Panel Contents */}
            <TabPanels>
              <TabPanel>
                <PanelCard
                  description="Our Cyber package offers cybersecurity coverage ranging from proactive
                  threat detection to comprehensive compliance management and security
                  audits. LinkShield offers bespoke cybersecurity solutions designed to
                  protect and secure your business against evolving cyber threats."
                  to={"/services/cyber-security"}
                />
              </TabPanel>
              <TabPanel>
                <PanelCard
                  to={"/services/software"}
                  description="Full stack software development services. We integrate top-tier cybersecurity expertise into our process to create robust, secure applications from any point of development. Our solutions scale gracefully and fortify your digital infrastructure, delivering both resilience and peace of mind."
                />
              </TabPanel>
              <TabPanel>
                <PanelCard
                  to={"/services/network"}
                  description="We offer integrated networking solutions for enterprises, data centers, and the cloud. From seamless, scalable connections for your operations to optimized data center infrastructure and secure cloud networking, we ensure your business stays connected and secure in today's digital landscape."
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="w-full flex justify-center md:justify-end md:w-1/2 mt-4 md:mt-0">
        <Image
          src={heroImages[selectedIndex]} // Dynamic image based on selected tab
          alt="Hero Image"
          width={600}
          height={600}
          className="rounded-lg" // Add this class for curved corners
        />
      </div>
    </div>
  );
};

export default HomeTab;

interface PanelCardProps {
  description: string;
  to?: any;
}

const PanelCard = ({ description, to }: PanelCardProps) => {
  return (
    <div className="max-w-md p-6 bg-[#304146] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
      <p className="mb-3 text-base text-white">{description}</p>
      <div className="flex">
        <div>
          <Link
            href={"/contact"}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
          >
            Get a quote
          </Link>
        </div>
        <div className="ml-6">
          <Link
            href={to}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
          >
            See More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
