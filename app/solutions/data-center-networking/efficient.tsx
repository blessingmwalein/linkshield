import CircledNumber from "@/components/home/circled_number";
import Link from "next/link";
import React from "react";

const Efficient = () => {
  const sections = [
    {
      title: "Proactive Problem Solving with Predictive Analytics",
      description:
        "LinkShield leverages predictive network analytics to identify potential issues before they impact your data center. By analyzing network patterns and performance metrics, our solutions help you maintain optimal operations and prevent downtime, ensuring that your data center is always running smoothly.",
    },
    {
      title: "Simplify Operations with Automated Network Management",
      description:
        "Managing complex data center networks can be challenging. LinkShield's automated network management solutions streamline operations, reduce manual intervention, and improve efficiency. Our tools provide real-time monitoring, automated adjustments, and centralized control, making network management hassle-free.",
    },
    {
      title: "Maximize Uptime with High-Availability Network Solutions",
      description:
        "Downtime can be costly and disruptive. LinkShield offers high-availability solutions that ensure your data center network is resilient and reliable. By implementing redundancy, failover systems, and continuous monitoring, we help you achieve maximum uptime and maintain business continuity.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-4">
      <div className="flex flex-col gap-12 md:flex-row md:gap-12">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center gap-8 grow">
            <div className="flex flex-col gap-6 justify-center">
              <CircledNumber number={(index + 1).toString()} />

              <span className="font-bold text-2xl text-black">
                {section.title}
              </span>
              <span className="font-normal text-base text-black">
                {section.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6 pt-4">
        <Link
          href={
            "https://www.isolution.sa/2024/10/10/building-a-resilient-future-why-modernizing-your-data-center-is-a-must/"
          }
          target="_blank"
          className="flex justify-center items-center gap-2"
        >
          <span className="font-normal text-base text-black">Learn more</span>
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
  );
};

export default Efficient;
