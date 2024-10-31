// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import artHeroImage from "../../images/art/arthero.png"; // Corrected path for default image
import mainhero from "../../images/art/mainhero.png"; // Corrected path for default image
import image1 from "../../images/art/image1.png"; // Corrected path for default image
import image2 from "../../images/art/Image2.png"; // Corrected path for default image
import image3 from "../../images/art/Image3.png"; // Corrected path for default image
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
import BusinessOperationsSection from "./operations";
import IntegrationSerevices from "./integration-services";

const Page: React.FC = () => {
  const faqs = [
    {
      question:
        "What techniques does LinkShield use for machine learning model optimization?",
      answer:
        "LinkShield employs advanced techniques such as hyperparameter tuning, ensemble methods, and deep learning architectures to optimize machine learning models. We use tools like grid search and Bayesian optimization to fine-tune parameters and improve model accuracy and performance.",
    },
    {
      question:
        "How does LinkShield handle the ethical implications of AI in our solutions?",
      answer:
        "We prioritize ethical considerations by implementing fairness audits, transparency in algorithmic decisions, and bias mitigation strategies. LinkShield’s approach includes regular reviews and adjustments to ensure our AI solutions adhere to ethical standards and promote fairness.",
    },
    {
      question:
        "What measures does LinkShield take to ensure AI model explainability and transparency?",
      answer:
        "LinkShield emphasizes explainability by using interpretable machine learning models and techniques like SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations). We provide clear documentation and visualizations to help stakeholders understand AI model decisions and outcomes.",
    },
    {
      question:
        "How does LinkShield address data privacy concerns in AI implementations?",
      answer:
        "We implement robust data privacy measures, including data anonymization, secure data storage, and compliance with privacy regulations like GDPR. LinkShield ensures that user data is protected throughout the AI lifecycle, from collection to processing and storage.",
    },
    {
      question:
        "What is LinkShield’s approach to continuous improvement in AI solutions?",
      answer:
        "LinkShield adopts a continuous improvement approach by regularly updating AI models based on new data and performance feedback. We use iterative testing, model retraining, and performance monitoring to enhance our AI solutions and ensure they remain effective and relevant.",
    },
  ];

  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Artificial Intelligence"
          description="We harness the potential of Artificial Intelligence to drive innovation and efficiency. Our AI solutions are designed to transform your business operations, providing intelligent insights and automation tailored to your unique needs."
          image={artHeroImage}
        />
      </div>

      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <MobileDevelopmentServices />

        <Image
          src={mainhero} // Dynamic image based on selected tab
          alt="Hero Image"
          className="rounded-lg w-full mt-6" // Add this class for curved corners
        />

        <div className="mt-6">
          <div className="flex flex-col items-center gap-4 p-4">
            {/* <span className="font-semibold text-[16px] text-center text-black">
              Tagline
            </span> */}

            <div className="flex flex-col items-center gap-6">
              <span className="font-bold text-[48px] text-center text-black">
                Harness the Future of AI with LinkShield
              </span>
              <span className="font-normal text-[18px] text-center w-1/2 text-black">
                Discover how LinkShield can transform your business with
                innovative AI solutions. Our expertise and advanced technologies
                are here to help you stay ahead in a rapidly evolving digital
                landscape.
              </span>
            </div>
          </div>
        </div>
        <div>
          <BusinessOperationsSection
            title="Revolutionize Business Operations with LLMs"
            description="LinkShield enables businesses to harness the power of Large Language Models (LLMs) to streamline and enhance their workflows. Our team integrates LLMs into your existing systems, providing capabilities such as natural language understanding, automated content generation, and intelligent data analysis. Whether it's automating customer support or enhancing data-driven decision-making, we ensure that LLMs fit seamlessly into your business processes, driving efficiency and innovation."
            image={image1}
            actionLink="https://medium.com/ailogic/adopting-llms-for-business-how-large-language-models-are-transforming-business-operations-97fdc0780309"
          />
          <IntegrationSerevices
            title="AI Integration Services"
            description="We seamlessly integrate AI technologies with your current systems and platforms, ensuring a smooth transition and maximizing the value of your AI investments."
            image={image2}
            actionLink="https://www.halo-lab.com/services/all/ai-integration"
          />
          <BusinessOperationsSection
            title="Custom AI Application Development"
            description="We design and develop bespoke AI applications tailored to your business requirements, providing you with unique solutions that drive growth and innovation."
            image={image3}
            actionLink="https://apro-software.com/artificial-intelligence-development-services/"
          />
        </div>
        <div className="mt-10">
          <div className="flex flex-col gap-2 self-stretch w-1/2 mb-5">
            {/* <span className="font-semibold text-[16px] text-black">
              Tagline
            </span> */}
            <div className="flex flex-col gap-6 self-stretch">
              <span className="font-bold text-[40px] text-black">
                Partner with LinkShield for Cutting-Edge AI Innovations
              </span>
              <span className="font-normal text-[16px] text-black">
                Join forces with LinkShield to explore and implement advanced AI
                solutions that propel your business forward. Our expertise
                ensures that you harness AI’s full potential.
              </span>
            </div>
          </div>
          <Experience />
        </div>

        <div className="flex flex-col items-center gap-4 p-4">
          {/* <span className="font-semibold text-[16px] text-center text-black">
              Tagline
            </span> */}

          <div className="flex flex-col items-center gap-6">
            <span className="font-bold text-[48px] text-center text-black">
              Addressing AI Challenges with Expertise
            </span>
            <span className="font-normal text-[18px] text-center w-1/2 text-black">
              AI implementations come with their set of challenges. LinkShield’s
              expertise ensures these issues are effectively addressed,
              providing robust solutions for a successful AI journey.
            </span>
          </div>
        </div>
        <div className="mt-10 pb-10">
          <RobustServices />
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
