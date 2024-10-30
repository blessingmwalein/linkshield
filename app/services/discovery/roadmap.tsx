import { link } from "fs";
import Link from "next/link";
import React from "react";

const RoadMap = () => {
  const sections = [
    {
      title: "Project Roadmap Development",
      description:
        "We create a detailed project roadmap that outlines each phase of development, milestones, and key deliverables, ensuring that all stakeholders are aligned..",
      link: "https://www.projectmanager.com/blog/tips-for-project-roadmap",
    },
    {
      title: "Prototyping and Proof of Concept",
      description:
        "Our team develops prototypes and proofs of concept to validate ideas, test assumptions, and provide a tangible representation of the final product.",
      link: "https://www.nomtek.com/blog/poc-mvp-prototype-differences",
    },
    {
      title: "Budget and Resource Planning",
      description:
        "LinkShield helps you plan your budget and allocate resources efficiently, ensuring that the project stays within budget and meets its financial goals.",
      link: "https://sswm.info/pt-pt/humanitarian-crises/prolonged-encampments/planning-process-tools/implementation-tools/budget-allocation-and-resource-planning",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-start items-start gap-12">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-start gap-6 grow w-full lg:w-1/3"
        >
          <div className="flex flex-col ite  gap-6 w-full">
            <span className="font-bold text-2xl text-black">
              {section.title}
            </span>
            <span className="font-normal text-base text-black">
              {section.description}
            </span>
          </div>
          <div className="flex flex-col  gap-2 pt-2">
            <Link
              href={section.link}
              target="_blank"
              className="flex justify-center  gap-2"
            >
              <span className="font-normal text-base text-black">
                Learn More
              </span>
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.71087 16.9492L15.4179 11.2422L9.71087 5.53516L8.29688 6.94916L12.5899 11.2422L8.29688 15.5352L9.71087 16.9492Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadMap;
