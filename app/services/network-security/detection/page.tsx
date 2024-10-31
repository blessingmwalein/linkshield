// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import webdev from "../../../images/network/img1.png"; // Corrected path for default image

import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import userplace from "../../images/userplace.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";

import { GlobalFaq } from "@/components/global_faq";

const Page: React.FC = () => {
  const faqs = [
    {
      question: "What types of websites can LinkShield develop?",
      answer:
        "LinkShield specializes in developing a wide range of websites, including corporate sites, e-commerce platforms, blogs, and custom web applications. Our team tailors each project to fit the specific needs and goals of your business.",
    },
    {
      question: "How does LinkShield ensure website security?",
      answer:
        "We prioritize website security by implementing advanced security protocols, such as SSL encryption, firewalls, regular vulnerability assessments, and compliance with industry standards. Our goal is to protect your website from cyber threats and data breaches.",
    },
    {
      question:
        "Can LinkShield integrate third-party services into my website?",
      answer:
        "Yes, LinkShield has extensive experience in integrating third-party services and APIs into websites. Whether you need payment gateways, CRM systems, or marketing automation tools, we can seamlessly incorporate these functionalities into your site.",
    },
    {
      question: "How long does it typically take to develop a website?",
      answer:
        "The timeline for web development projects can vary depending on the complexity and requirements of the site. On average, a standard website takes 4-12 weeks from planning to launch. We provide detailed timelines during the project planning phase.",
    },
    {
      question:
        "What kind of support and maintenance does LinkShield offer after my website is launched?",
      answer:
        "LinkShield offers comprehensive support and maintenance services to ensure your website remains updated, secure, and fully functional. Our services include regular updates, security monitoring, bug fixes, and performance optimization.",
    },
  ];

  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Intrusion Detection and Prevention"
          description="LinkShield’s advanced intrusion detection and prevention systems protect your network by identifying and stopping threats before they can cause harm."
          image={webdev}
        />
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
