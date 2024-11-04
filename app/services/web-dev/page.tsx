// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import webdev from "../../images/webdevhero.png"; // Corrected path for default image
import uiuxhero2 from "../../images/mobiledevhero2.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import userplace from "../../images/userplace.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";
import { FAQsComponent } from "../discovery/faqs";
import BackEnds from "./backends";
import FrontEnds from "./frontends";
import Culture from "./culture";
import WebDevelopmentServices from "./services";
import SolutionsSection from "./solutions";
import Challenges from "./challenges";
import Support from "./support";
import ContactSection from "./contact";
import { GlobalFaq } from "@/components/global_faq";

const Page: React.FC = () => {
  const faqs = [
    {
      question: "What types of websites can LinkShield develop?",
      answer: "LinkShield specializes in developing a wide range of websites, including corporate sites, e-commerce platforms, blogs, and custom web applications. Our team tailors each project to fit the specific needs and goals of your business."
    },
    {
      question: "How does LinkShield ensure website security?",
      answer: "We prioritize website security by implementing advanced security protocols, such as SSL encryption, firewalls, regular vulnerability assessments, and compliance with industry standards. Our goal is to protect your website from cyber threats and data breaches."
    },
    {
      question: "Can LinkShield integrate third-party services into my website?",
      answer: "Yes, LinkShield has extensive experience in integrating third-party services and APIs into websites. Whether you need payment gateways, CRM systems, or marketing automation tools, we can seamlessly incorporate these functionalities into your site."
    },
    {
      question: "How long does it typically take to develop a website?",
      answer: "The timeline for web development projects can vary depending on the complexity and requirements of the site. On average, a standard website takes 4-12 weeks from planning to launch. We provide detailed timelines during the project planning phase."
    },
    {
      question: "What kind of support and maintenance does LinkShield offer after my website is launched?",
      answer: "LinkShield offers comprehensive support and maintenance services to ensure your website remains updated, secure, and fully functional. Our services include regular updates, security monitoring, bug fixes, and performance optimization."
    }
  ];
  
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Web App Development Services"
          description="LinkShield specializes in delivering innovative and tailored web development solutions that elevate your online presence. From concept to launch, we build responsive, secure, and high-performing websites that captivate and convert."
          image={webdev}
        />
      </div>

      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <BackEnds />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <FrontEnds />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <WebDevelopmentServices />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <Culture />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] pb-10">
        <div className="w-full max-w-3xl flex flex-col items-center gap-4 p-4 mx-auto">
          {/* Tagline */}
          <span className="font-semibold text-[16px] text-center text-black">
            Tagline
          </span>

          {/* Title and Description */}
          <div className="flex flex-col items-center gap-6 w-full">
            <span className="font-bold text-[32px] md:text-[48px] text-center text-black">
              Drive Sales with Our E-commerce Solutions
            </span>
            <span className="font-normal text-[16px] md:text-[18px] text-center text-black">
              For businesses looking to enhance their online sales capabilities,
              LinkShield offers robust e-commerce development services. We build
              online stores that are not only visually appealing but also highly
              functional and secure.
            </span>
          </div>
        </div>

        <SolutionsSection />

        <div className="flex flex-col md:flex-row gap-8 w-full self-stretch mt-6 mb-6">
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-4xl text-black">
            Custom Solutions for Complex Challenges
            </span>
          </div>
          <div className="flex flex-col gap-6 grow">
            <span className="font-normal text-lg text-black">
            Whether it’s integrating third-party tools or scaling for growth, LinkShield has the expertise to provide custom solutions for your unique challenges.
            </span>
          </div>
        </div>

        <Challenges />

        <Support />

        <ContactSection />


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
