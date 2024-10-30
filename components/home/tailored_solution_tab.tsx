"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import ArrowIcon from "../arrow_icon";
import Link from "next/link";
import { link } from "fs";

const SolutionsTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [
    {
      title: "The discovery phase process",
      description:
        "The Discovery Phase is the cornerstone of our process at LinkShield, designed to ensure that our solutions are perfectly aligned with your business goals. We start by engaging in detailed consultations with you to understand your unique challenges, objectives, and requirements. Through a combination of workshops, interviews, and analysis, we gather essential insights that guide the development of a tailored strategy.",
      link: "/services/discovery",
    },
    {
      title: "UI/UX Web Dev",
      description: "Details about our UI/UX web development services.",
      link: "/services/ui-ux-design",
    },
    {
      title: "Mobile Dev",
      description: "Insight into our mobile development capabilities.",
      link: "/services/mobile-dev",
    },
    {
      title: "Artificial Intelligence",
      description: "Exploring our AI solutions.",
      link: "/services/artificial-inteligence",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(tabs[0]);

  return (
    <div className="flex flex-col md:flex-row w-full rounded-2xl shadow-lg bg-white">
      {/* Left Side: Vertical Tabs */}
      <div className="flex flex-col md:w-1/4 w-full bg-[#284C59] rounded-tl-2xl rounded-bl-2xl">
        {/* <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}> */}
        <div className="flex flex-col space-y-2 p-4">
          {/* Tab Items */}
          {tabs.map((tab, index) => (
            <button
              // key={index}
              onClick={() => {
                setSelectedIndex(index);
                setSelectedItem(tab);
              }}
              className={`py-2 px-4 font-bold text-xl text-right transition-colors duration-300 ease-in-out rounded-lg ${
                selectedIndex === index
                  ? "text-white"
                  : "text-gray-400 hover:bg-gray-500 hover:text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {/* </TabGroup> */}
      </div>

      {/* Right Side: Panel Content */}
      <div className="md:w-3/4 w-full pl-0 md:pl-8 rounded-tr-2xl rounded-br-2xl bg-gray-50">
        <TabGroup>
          <TabPanels>
            <TabPanel >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedItem.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  {selectedItem.description}
                </p>
                <Link
                  href={selectedItem.link}
                  className="flex justify-center md:justify-start items-center gap-2 pt-2 mt-4"
                >
                  <span className="font-normal text-base md:text-lg text-black cursor-pointer">
                    Learn More
                  </span>
                  <div className="w-6 h-6 mt-4 ml-3">
                    <ArrowIcon />
                  </div>
                </Link>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default SolutionsTab;
