"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import ArrowIcon from "../arrow_icon";

const SolutionsTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabs = [
    {
      title: "The discovery phase process",
      description: "The Discovery Phase is the cornerstone of our process at LinkShield, designed to ensure that our solutions are perfectly aligned with your business goals. We start by engaging in detailed consultations with you to understand your unique challenges, objectives, and requirements. Through a combination of workshops, interviews, and analysis, we gather essential insights that guide the development of a tailored strategy.",
    },
    {
      title: "UI/UX Web Dev",
      description: "Details about our UI/UX web development services.",
    },
    {
      title: "Mobile Dev",
      description: "Insight into our mobile development capabilities.",
    },
    {
      title: "Artificial Intelligence",
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
                      Learn More
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

export default SolutionsTab;
