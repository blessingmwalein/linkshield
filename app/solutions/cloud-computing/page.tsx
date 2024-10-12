// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import enterpricehero from "../../images/cloudhero1.png"; // Corrected path for default image
import enterpricehero2 from "../../images/cloudhero2.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import StartJourney from "@/app/resources/white-papers/start_jorney";
import { FAQsComponent } from "../enterprise-networking/faqs";

const Page: React.FC = () => {
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
       
       
      </div>
      <div className="">
        <StartJourney />
      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]  pb-10">
        <FAQsComponent />
      </div>

      <div className="mt-6">
        <FooterNav />
      </div>
    </>
  );
};

export default Page;
