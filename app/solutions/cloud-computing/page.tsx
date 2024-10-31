// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import enterpricehero from "../../images/cloudhero1.png"; // Corrected path for default image
import enterpricehero2 from "../../images/cloudhero2.png"; // Corrected path for default image
import image1 from "../../images/cloud/image1.png"; // Corrected path for default image
import image2 from "../../images/cloud/image2.png"; // Corrected path for default image
import image3 from "../../images/cloud/image3.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import { FAQsComponent } from "../enterprise-networking/faqs";
import BusinessOperationsSection from "@/app/services/artificial-inteligence/operations";
import IntegrationSerevices from "@/app/services/artificial-inteligence/integration-services";
import CloudInfrastructure from "./services";
import Proof from "./proof";
import { GlobalFaq } from "@/components/global_faq";

const Page: React.FC = () => {
  const faqs = [
    {
      question:
        "What are the best practices for designing a cloud network architecture?",
      answer:
        "LinkShield recommends starting with a thorough assessment of your business needs, implementing scalable designs, and incorporating robust security measures. Best practices also include leveraging automation and ensuring seamless integration with existing systems.",
    },
    {
      question:
        "How does LinkShield handle data security in a multi-cloud environment?",
      answer:
        "We use a combination of encryption, access controls, and continuous monitoring to secure data across multiple cloud platforms. Our approach ensures consistent protection and compliance with industry standards.",
    },
    {
      question:
        "What strategies does LinkShield use to optimize cloud network performance?",
      answer:
        "Our strategies include WAN optimization, load balancing, and efficient resource allocation. These techniques reduce latency, enhance data flow, and improve overall network efficiency.",
    },
    {
      question: "How does LinkShield approach hybrid cloud integration?",
      answer:
        "We design hybrid cloud solutions that facilitate seamless integration between on-premises and cloud resources. Our approach ensures smooth data transfer and unified management across different environments.",
    },
    {
      question:
        "What factors should be considered for cost-effective cloud networking?",
      answer:
        "LinkShield focuses on optimizing resource usage, implementing cost-management tools, and leveraging scalable solutions to ensure you get the most value from your cloud investment while controlling expenses.",
    },
  ];

  return (
    <>
      <div className="pb-6">
        <PageHeader
          title="Cloud Networking"
          description="At LinkShield, we specialize in designing and implementing cloud networking solutions that enhance connectivity, security, and performance. Our expertise ensures that your cloud infrastructure supports your business needs seamlessly and efficiently."
          image={enterpricehero}
        />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <div className="flex flex-col md:flex-row gap-8 w-full self-stretch">
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-4xl text-black">
              Elevate Your Connectivity with Expert Cloud Networking Solutions
            </span>
          </div>
          <div className="flex flex-col gap-6 grow">
            <span className="font-normal text-lg text-black">
              LinkShield provides a range of services to optimize your cloud
              network, ensuring it meets your business’s demands for
              performance, scalability, and security.
            </span>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src={enterpricehero2} // Dynamic image based on selected tab
            alt="Hero Image"
            className="rounded-lg w-full" // Add this class for curved corners
          />
        </div>

        <div>
          <div className="flex flex-col gap-4 grow mt-6">
            <span className="font-bold text-4xl text-black">
              Cloud Networking Services
            </span>
          </div>
        </div>
        <div>
          <BusinessOperationsSection
            title="Cloud Network Design"
            description="Our team designs robust cloud network architectures tailored to your needs, ensuring scalable and reliable connectivity across your cloud environment."
            image={image1}
            actionLink="https://www.techtarget.com/searchnetworking/tip/An-introduction-to-cloud-network-architecture"
          />
          <IntegrationSerevices
            title="Hybrid Cloud Integration"
            description="We offer solutions for integrating on-premises systems with cloud platforms, creating a cohesive hybrid cloud environment that enhances flexibility and efficiency."
            image={image2}
            actionLink="https://www.halo-lab.com/services/all/ai-integration"
          />
          <BusinessOperationsSection
            title="Cloud Security Solutions"
            description="Security is integral to our cloud networking approach. We implement comprehensive security measures, including encryption and access controls, to protect your data in the cloud."
            image={image3}
            actionLink="https://www.exabeam.com/explainers/cloud-security/cloud-security-solutions-8-solution-categories-you-must-know/"
          />
        </div>
        <CloudInfrastructure />
        <div className="flex flex-col md:flex-row gap-8 w-full self-stretch mt-6">
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-4xl text-black">
              Future-Proof Your Cloud Network with LinkShield
            </span>
          </div>
          <div className="flex flex-col gap-6 grow">
            <span className="font-normal text-lg text-black">
              Prepare your cloud infrastructure for future growth and challenges
              with LinkShield’s cutting-edge solutions, ensuring long-term
              success and efficiency.
            </span>
          </div>
        </div>

        <Proof />
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
