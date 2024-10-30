// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import heroImage from "../../images/cyber/hero.png"; // Corrected path for default image
import mainHeroImage from "../../images/cyber/bighero.png"; // Corrected path for default image
import heroImage2 from "../../images/cyber/hero1.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import userplace from "../../images/userplace.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";
import { FAQsComponent } from "../discovery/faqs";
import { GlobalFaq } from "@/components/global_faq";
import CyberServicesBanner from "./services_banner";
import CybersecuritySolutions from "@/components/home/cyber_solutions";
import CyberSolutionsCounter from "./services_counter";
import SquareButton from "@/components/square_button";
import CyberCard2 from "@/components/home/cyber_card2";
import KeyServices from "./key_services";
import Ratings from "@/components/ratings";

const Page: React.FC = () => {
  const faqs = [
    {
      question: "How does LinkShield handle Zero-Day vulnerabilities?",
      answer:
        "At LinkShield, we prioritize proactive defense measures to handle Zero-Day vulnerabilities. Our team continuously monitors threat intelligence feeds and uses advanced analytics to identify potential Zero-Day threats.",
    },
    {
      question:
        "What is the role of machine learning in LinkShield’s threat detection?",
      answer:
        "LinkShield leverages machine learning to enhance threat detection by analyzing vast amounts of network data in real-time. Our machine learning algorithms identify patterns and anomalies that may indicate malicious activity, even those previously unseen.",
    },
    {
      question:
        "How does LinkShield integrate cybersecurity with cloud services?",
      answer:
        "We integrate cybersecurity into cloud services by applying a multi-layered security approach. This includes using cloud-native security tools, implementing strong identity and access management controls, encrypting data both at rest and in transit, and regularly auditing cloud configurations for compliance.",
    },
    {
      question:
        "Can LinkShield’s cybersecurity services be integrated with existing SIEM solutions?",
      answer:
        "Yes, LinkShield’s cybersecurity services are designed to integrate seamlessly with existing Security Information and Event Management (SIEM) solutions. We can augment your SIEM capabilities with our advanced threat detection, response services, and expert analysis, providing you with comprehensive visibility into your security environment and enhancing your overall security posture.",
    },
    {
      question:
        "How does LinkShield approach incident response and post-incident analysis?",
      answer:
        "LinkShield adopts a structured and comprehensive approach to incident response, which includes preparation, identification, containment, eradication, recovery, and lessons learned. During an incident, our team works swiftly to minimize damage and restore normal operations. Post-incident, we conduct detailed analysis to understand the root cause, evaluate the effectiveness of our response, and implement improvements to prevent future incidents.",
    },
  ];

  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Cybersecurity Services"
          description="Our team offers a full range of solutions to protect your data, detect threats, and maintain compliance with industry regulations. From proactive threat management to comprehensive security assessments, we are committed to providing the protection and peace of mind you need in today’s digital world."
          image={heroImage}
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]  pb-10">
        <CyberServicesBanner />

        <div className="flex flex-col md:flex-row gap-8 mt-6">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <span className="font-bold text-3xl md:text-4xl text-black">
              Advanced Threat Protection and Management
            </span>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <span className="font-normal text-base md:text-lg text-black">
              Protect your business with our advanced threat protection
              services. We use cutting-edge technology and expert analysis to
              detect, respond to, and mitigate security threats in real-time.
            </span>
          </div>
        </div>

        <Image
          src={mainHeroImage} // Dynamic image based on selected tab
          alt="Hero Image"
          className="rounded-lg w-full mt-6" // Add this class for curved corners
        />

        <CyberSolutionsCounter />

        <div className="flex flex-col lg:flex-row h-auto mt-12">
          {/* Image on Left */}

          {/* Text on Right */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-black">
              Protecting Your Applications
            </h2>
            <p className="mt-6 text-lg text-black-400 w-full lg:w-3/4">
              Our application security services identify and mitigate
              vulnerabilities in your software applications, ensuring that they
              are secure from potential threats and attacks.
            </p>
            {/* Contact Button */}
            <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
              {/* Button 1 */}
              <SquareButton
              link={'https://www.pynt.io/learning-hub/application-security/10-application-security-vulnerabilities-and-how-to-mitigate-them'}
                children={
                  <span className="font-normal text-[16px] text-black">
                    Learn More
                  </span>
                }
              />

              {/* Button 2 with Icon */}
              {/* <div className="flex justify-center items-center gap-2">
                <span className="font-normal text-[16px] text-black hover:text-white">
                  Button
                </span>
                <ArrowIcon />
              </div> */}
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-4">
            <Image
              src={heroImage2}
              alt="Contact Image 1"
              width={350}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        <KeyServices />

        <div className="mt-10">
          <Ratings />
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
