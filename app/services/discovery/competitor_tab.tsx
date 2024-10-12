"use client";

import ArrowIcon from "@/components/arrow_icon";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";

const CompetitorTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    {
      title: "Analyse Competitors",
      description: "Digital Footprint Audit: Analyze competitors' SEO, content, and social media strategies to spot gaps and opportunities. Technical Benchmarking: Assess their tech stack, scalability, and security for exploitable weaknesses. Market Positioning: Evaluate product offerings and innovation cycles to identify strengths and weaknesses."},
    {
      title: "Gap Analysis",
      description: "Details about our UI/UX web development services.",
    },
    {
      title: "Project Documentation",
      description: "Insight into our mobile development capabilities.",
    },
    {
      title: "Identify Business Needs",
      description: "Exploring our AI solutions.",
    },
    {
      title: "Determine Business Needs",
      description: "Exploring our AI solutions.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full rounded-2xl shadow-lg bg-white">
      {/* Left Side: Vertical Tabs */}
      <div className="flex flex-col md:w-1/4 w-full bg-[#284C59] rounded-tl-2xl rounded-bl-2xl">
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList className="flex flex-col space-y-2 p-4">
            {/* Tab Items */}
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className={`py-2 px-4 font-bold text-xl text-right transition-colors duration-300 ease-in-out rounded-lg ${
                  selectedIndex === index
                    ? "text-white"
                    : "text-gray-400 hover:bg-gray-500 hover:text-white"
                }`}
              >
                {tab.title}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>

      {/* Right Side: Panel Content */}
      <div className="md:w-3/4 w-full pl-0 md:pl-8 rounded-tr-2xl rounded-br-2xl bg-gray-50">
        <TabGroup>
          <TabPanels>
            {tabs.map((tab, index) => (
              <TabPanel key={index}>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800">{tab.title}</h2>
                  <p className="mt-4 text-lg text-gray-600">{tab.description}</p>
                  <div className="flex justify-center md:justify-start items-center gap-2 pt-2 mt-4">
                    <span className="font-normal text-base md:text-lg text-black cursor-pointer">
                      More Competitive Audits
                    </span>
                    <div className="w-6 h-6 mt-4 ml-3">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default CompetitorTabs;
