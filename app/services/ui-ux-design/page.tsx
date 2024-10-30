// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import uiUxImage from "../../images/uiuxhero.png"; // Corrected path for default image
import uiuxhero2 from "../../images/uiuxhero2.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import userplace from "../../images/userplace.png";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ArrowIcon from "@/components/arrow_icon";
import { FAQsComponent } from "../discovery/faqs";
import ResearchCard from "./research";
import ProcessTabs from "./process_tabs";
import UsabilityTesting from "./usability";
import CustomizedSolutions from "./customizes_solutions";
import { GlobalFaq } from "@/components/global_faq";

const Page: React.FC = () => {
  const faqs = [
    {
      question: "How does LinkShield integrate UX design into Agile development processes?",
      answer: "At LinkShield, we implement UX design into Agile workflows through continuous collaboration and iteration. UX designers work closely with developers in every sprint to ensure user feedback is incorporated, allowing us to make rapid adjustments and maintain alignment with user needs and project goals."
    },
    {
      question: "What methodologies does LinkShield employ to ensure our designs are scalable and future-proof?",
      answer: "We adopt a modular design approach, utilizing design systems and atomic design principles to create scalable and adaptable components. This methodology allows us to maintain design consistency and easily implement updates or new features."
    },
    {
      question: "Can LinkShield conduct heuristic evaluations on existing digital products, and how do these evaluations impact design decisions?",
      answer: "We use established heuristics to systematically evaluate usability issues within your product. Our experts analyze various elements such as error prevention, flexibility, and consistency. The insights gathered are prioritized and integrated into actionable design recommendations."
    },
    {
      question: "How does LinkShield ensure that UI/UX designs align with complex user journeys and personas?",
      answer: "Our team creates detailed user personas and journey maps to deeply understand user behavior, motivations, and pain points. We use these tools to inform the design process, ensuring that every element is tailored to support the user’s journey. Regular usability testing and feedback loops are also implemented to validate these personas and journeys."
    },
    {
      question: "What role does data analytics play in LinkShield’s design optimization process?",
      answer: "LinkShield leverages data analytics extensively to inform and optimize design decisions. We use quantitative data from user interactions, heatmaps, and conversion metrics to identify user behavior patterns and pain points. This data-driven approach enables us to validate design hypotheses, prioritize design changes, and continuously improve the user experience based on empirical evidence rather than assumptions."
    }
  ];
  
  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="UI/UX Design"
          description="LinkShield’s UI/UX design services bring your vision to life. We create intuitive, engaging, and user-centric designs that enhance user experiences and drive business success."
          image={uiUxImage}
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <div className="flex flex-col md:flex-row gap-20 self-stretch">
          {/* Title Section */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-4xl leading-tight text-black">
              Building Engaging User Experiences
            </span>
          </div>

          {/* Description Section */}
          <div className="flex flex-col gap-6 grow">
            <span className="font-normal text-lg leading-relaxed text-black">
              At LinkShield, we believe that great design is not just about
              aesthetics; it's about functionality and user experience. Our
              services ensure your digital products are as intuitive as they are
              visually appealing.
            </span>
          </div>
        </div>

        <div className="mt-10">
          <Image
            src={uiuxhero2} // Dynamic image based on selected tab
            alt="Hero Image"
            className="rounded-lg w-full" // Add this class for curved corners
          />
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <span className="font-semibold text-lg text-center text-black">
            UI/UX
          </span>
          <div className="flex flex-col items-center gap-6">
            <h2 className="font-bold text-4xl text-center text-black">
              Comprehensive UI/UX Design Services
            </h2>
            <p className="font-normal text-lg text-center text-black">
              Our UI/UX design team crafts intuitive and visually stunning
              interfaces.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ResearchCard />
        </div>

        <div className="flex flex-col md:flex-row gap-20 self-stretch mt-5">
          {/* Title Section */}
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-4xl leading-tight text-black">
              Our Process
            </span>
          </div>
        </div>

        <div className="mt-10">
          <ProcessTabs />
        </div>
        <div className="mt-10">
          <UsabilityTesting />
        </div>

        <div className="max-w-[768px] flex flex-col items-center gap-4 mx-auto mt-6">
          {/* <span className="font-semibold text-lg text-center text-black">
            Tagline
          </span> */}
          <div className="flex flex-col items-center gap-6 w-full">
            <span className="font-bold text-4xl text-center text-black">
              Tailored UI/UX Solutions for Every Business Size
            </span>
            <span className="font-normal text-base text-center text-black">
              At LinkShield, we understand that different businesses have
              different needs. Our UI/UX process is designed to cater to the
              unique requirements of businesses of all sizes and models. Whether
              you're a small startup or a large enterprise, we have the
              expertise to create user-friendly and visually appealing
              interfaces that enhance your digital presence.
            </span>
          </div>
        </div>

        <div className="mt-10 pb-10">
          <CustomizedSolutions />
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
