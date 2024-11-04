// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import mobileDeveHero1 from "../../images/mobiledevhero1.png"; // Corrected path for default image
import uiuxhero2 from "../../images/mobiledevhero2.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import userplace from "../../images/userplace.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";
import { FAQsComponent } from "../discovery/faqs";
import MobileDevelopmentServices from "./services";
import HybridDevelopment from "./hybrid";
import Experience from "./experience";
import PerformanceServices from "./peerfomance";
import RobustServices from "./robust";
import Link from "next/link";
import { GlobalFaq } from "@/components/global_faq";

const Page: React.FC = () => {
  const faqs = [
    {
      question: "How does LinkShield ensure cross-platform apps deliver a native-like experience?",
      answer: "At LinkShield, we leverage frameworks like React Native and Flutter to create cross-platform apps that closely mimic the performance and aesthetics of native apps. Our developers optimize code specifically for each platform, ensuring smooth animations, fast load times, and a seamless user experience across both iOS and Android devices."
    },
    {
      question: "What strategies does LinkShield use to optimize mobile app performance on lower-end devices?",
      answer: "We adopt a multi-faceted approach to optimize performance, including minimizing resource usage, optimizing code, and using lightweight assets. LinkShield also employs adaptive design strategies, where the app dynamically adjusts its performance based on the device's capabilities, ensuring a consistent experience across a range of hardware."
    },
    {
      question: "How does LinkShield handle the complexities of mobile API integration, especially with legacy systems?",
      answer: "Our team specializes in integrating modern mobile apps with legacy systems through custom APIs and middleware solutions. We use robust error handling, data mapping, and secure communication protocols to ensure seamless integration, even when dealing with older or non-standard backend systems."
    },
    {
      question: "What steps does LinkShield take to protect mobile apps from reverse engineering and other security threats?",
      answer: "LinkShield implements advanced security measures, including code obfuscation, encryption of sensitive data, and the use of secure authentication protocols like OAuth. We also conduct thorough security testing, including penetration testing, to identify and mitigate potential vulnerabilities before deployment."
    },
    {
      question: "How does LinkShield approach the scalability of mobile applications, particularly in rapidly growing user bases?",
      answer: "Scalability is integral to our development process. We design apps with modular architectures that can be easily scaled horizontally and vertically. LinkShield also utilizes cloud services and load balancing techniques to handle increased user traffic and ensure consistent performance as your user base grows."
    }
  ];
  
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Mobile Development"
          description="At LinkShield, we specialize in crafting mobile apps that deliver seamless experiences. From native to cross-platform solutions, our expertise ensures your app stands out in the competitive mobile landscape."
          image={mobileDeveHero1}
        />
      </div>

      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <MobileDevelopmentServices />

        <div className="mt-10">
          <HybridDevelopment />
        </div>
        <div className="mt-6">
          <div className="flex flex-col items-center gap-4 p-4">
            {/* <span className="font-semibold text-[16px] text-center text-black">
              Tagline
            </span> */}

            <div className="flex flex-col items-center gap-6">
              <span className="font-bold text-[48px] text-center text-black">
                Enhancing User Experience with Intuitive Design
              </span>
              <span className="font-normal text-[18px] text-center w-1/2 text-black">
                Great apps not only function well but are also a delight to use.
                LinkShield focuses on delivering exceptional user experiences
                through thoughtful design and seamless interactions.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Experience />
        </div>

        <div className="mt-10">
          <PerformanceServices />
        </div>

        <div className="flex flex-col md:flex-row gap-20 self-stretch mt-5">
          {/* Title Section */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-4xl leading-tight text-black">
              Robust Security for Your Mobile Apps
            </span>
          </div>

          {/* Description Section */}
          <div className="flex flex-col gap-6 grow">
            <span className="font-normal text-lg leading-relaxed text-black">
              Security is a top priority in mobile development. LinkShield
              implements advanced security measures to protect your app and its
              users.
            </span>
          </div>
        </div>
        <div className="mt-10 pb-10">
          <RobustServices />
        </div>

        <div className="flex flex-col md:flex-row gap-12 mt-10 pb-10">
          <div className="flex flex-col gap-6 grow">
            <span className="font-bold text-[48px] text-black">
              Transform Your Mobile Vision into Reality with LinkShield
            </span>
          </div>

          <div className="flex flex-col gap-6 grow">
            <span className="font-normal text-[18px] text-black">
              Whether you’re looking to develop a new mobile app or enhance an
              existing one, LinkShield’s expertise in mobile development can
              help you achieve your goals with precision and efficiency.
            </span>

            <Link href="/contact" className="flex justify-start gap-4 pt-4">
              <button className="flex justify-center items-center gap-2 bg-black px-6 py-3 text-white border border-transparent">
                <span className="font-normal text-[16px]">Get a quote</span>
              </button>
            </Link>
          </div>
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
