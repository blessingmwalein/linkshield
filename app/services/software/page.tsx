// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import webdev from "../../images/webdevhero.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";

import BackEnds from "../web-dev/backends";
import FrontEnds from "../web-dev/frontends";
import SoftwareServciesBanner from "./services_banner";
import { FAQ, GlobalFaq } from "@/components/global_faq";
import Innovations from "./invovations";
import mainHeroImage from "../../images/cyber/bighero.png"; // Corrected path for default image
import Tech from "./tech";

const Page: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question:
        "How does LinkShield manage the complexity of developing microservices-based architectures?",
      answer:
        "At LinkShield, we handle the complexity of microservices architectures by implementing containerization and orchestration tools like Docker and Kubernetes. We also employ service discovery, API gateways, and distributed tracing to manage communication, scaling, and monitoring across microservices, ensuring efficient and scalable solutions.",
    },
    {
      question:
        "What strategies does LinkShield use to optimize the performance of large-scale software applications?",
      answer:
        "To optimize performance, LinkShield employs strategies such as load balancing, caching mechanisms, asynchronous processing, and database optimization. We also use performance profiling and monitoring tools to continuously analyze and improve application speed and efficiency under different load conditions.",
    },
    {
      question:
        "How does LinkShield ensure data consistency and integrity across distributed systems?",
      answer:
        "LinkShield ensures data consistency and integrity by using techniques such as distributed transactions, eventual consistency models, and employing robust data synchronization protocols. We utilize databases that support strong consistency models and implement mechanisms like data versioning and conflict resolution.",
    },
    {
      question:
        "What methodologies does LinkShield employ for continuous integration and continuous deployment (CI/CD) in software projects?",
      answer:
        "We integrate version control systems, automated testing frameworks, and containerized environments to enable continuous integration. For continuous deployment, we utilize tools like Jenkins, GitLab CI, and automated rollback mechanisms to ensure smooth and reliable releases.",
    },
    {
      question:
        "How does LinkShield approach handling technical debt in long-term software projects?",
      answer:
        "LinkShield proactively manages technical debt by implementing regular code reviews, refactoring outdated code, and maintaining up-to-date documentation. We prioritize addressing technical debt through our sprint planning and backlog management, ensuring that the quality and maintainability of the software are not compromised over time.",
    },
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
        <div className="mt-10">
          <SoftwareServciesBanner />
        </div>
        <div className="mt-10">
          <BackEnds />
        </div>
        <div className="mt-10">
          <FrontEnds />
        </div>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 self-stretch">
            <div className="flex flex-col items-center gap-6 w-full">
              <span className="font-bold w-1/2 text-center text-black text-2xl md:text-4xl">
                Driving Innovation with Advanced Software Solutions
              </span>
              <span className="w-1/2 font-normal text-center text-black text-base md:text-lg">
                We are committed to driving innovation through our software
                development services. Learn more about how we integrate
                cutting-edge technologies to deliver impactful solutions.
              </span>
            </div>
          </div>

          <div className="mt-10">
            <Innovations />
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <span className="font-bold text-3xl md:text-4xl text-black">
                Software Maintenance and Support
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <span className="font-normal text-base md:text-lg text-black">
                We offer comprehensive software maintenance and support services
                to ensure your applications remain up-to-date, secure, and
                perform at their best. Our team is always available to assist
                with any issues or updates.
              </span>
            </div>
          </div>

          <Image
            src={mainHeroImage} // Dynamic image based on selected tab
            alt="Hero Image"
            className="rounded-lg w-full mt-6" // Add this class for curved corners
          />

          <div className="mt-10">
            <Tech />
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-6 pb-10">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <span className="font-bold text-3xl md:text-4xl text-black">
                Building with Security in Mind
              </span>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <span className="font-normal text-base md:text-lg text-black">
                Security is integrated into every stage of our development
                process, ensuring that your software is protected against
                potential threats. 50% 50% Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </span>
            </div>
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
