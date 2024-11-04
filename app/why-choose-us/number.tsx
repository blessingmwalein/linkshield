import React from "react";
import Image from "next/image";
import perfomanceImage from "../images/perfomance.png";
import costSavingImage from "../images/costsaving.png";

const SuccessMetricsSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 w-full">
      {/* Success Rate in Compliance Audits */}
      <div className="flex flex-col justify-between grow p-8 rounded-[18px] border border-solid border-black">
        <span className="font-bold text-[80px] text-black">95%</span>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[20px] text-black">
            Success Rate in Compliance Audits
          </span>
          <span className="font-normal text-[16px] text-black">
            With rigorous standards and expertise, we ensure a 95% success rate
            in compliance audits, helping you meet regulatory requirements
            effortlessly.
          </span>
        </div>
      </div>

      {/* Cost Savings on IT Infrastructure */}
      <div className="flex flex-col gap-8 grow rounded-[18px]">
        {/* <img
          className="h-auto md:h-[277px] object-cover"
          src="your-image-source-here"
          alt="Cost Savings"
        /> */}
          <Image
          src={costSavingImage} // Dynamic image based on selected tab
          alt="Hero Image"
          className="h-auto md:h-[277px] object-cover rounded-lg "
        />
        <div className="flex flex-col gap-12 self-stretch p-8 rounded-[18px] border border-solid border-black">
          <span className="font-bold text-[80px] text-black">65%</span>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-[20px] text-black">
              Cost Savings on IT Infrastructure
            </span>
            <span className="font-normal text-[16px] text-black">
              Our cost-effective solutions help clients save 65% on IT
              infrastructure costs while maximizing value and performance.
            </span>
          </div>
        </div>
      </div>

      {/* Lower Security Breach Risk */}
      <div className="flex flex-col gap-8 grow rounded-[18px]">
        <div className="flex flex-col gap-12 self-stretch p-8 rounded-[18px] border border-solid border-black">
          <span className="font-bold text-[80px] text-black">80%</span>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-[20px] text-black">
              Lower Security Breach Risk
            </span>
            <span className="font-normal text-[16px] text-black">
              Through comprehensive security measures, we’ve reduced the risk of
              security breaches by 80%, safeguarding your data and assets.
            </span>
          </div>
        </div>
        {/* <img src="your-image-source-here" alt="Lower Security Breach Risk" /> */}
        <Image
          src={perfomanceImage} // Dynamic image based on selected tab
          alt="Hero Image"
          className="h-auto md:h-[277px] object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

export default SuccessMetricsSection;
