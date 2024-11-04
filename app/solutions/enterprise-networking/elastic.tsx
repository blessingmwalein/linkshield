import CircledNumber from "@/components/home/circled_number";
import Link from "next/link";
import React from "react";

const Elastic = () => {
  const sections = [
    {
      title: "Effortless Cloud Connectivity",
      description:
        "We simplify the process of integrating on-premises networks with cloud environments. Our cloud networking solutions provide secure and seamless connectivity, ensuring that your data flows efficiently between local and cloud-based systems. With our expertise, you can fully leverage the power of cloud computing while maintaining control and security.",
    },
    {
      title: "Optimized for High Data Throughput",
      description:
        "Managing large volumes of data can be challenging, but LinkShield is up to the task. We design and implement network architectures optimized for high data throughput, enabling your organization to handle massive amounts of data without performance bottlenecks.",
    },
    {
      title: "Efficient Bandwidth Utilization",
      description:
        "Bandwidth is a critical resource, and at LinkShield, we ensure it's used efficiently. Our bandwidth management strategies prioritize critical applications, reduce congestion, and optimize traffic flow, resulting in a more reliable and faster network experience. With our expertise, your network can maintain high performance even under heavy usage.",
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
          href={"https://www.elastic.co/integrations"}
          target="_blank"
          className="flex justify-center items-center gap-2 px-6 py-3 border border-black"
        >
          <span className="font-normal text-base text-black">Learn more</span>
        </Link>
      </div>
    </div>
  );
};

export default Elastic;
