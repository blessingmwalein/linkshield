import React from "react";
import PageHeader from "@/components/page_header";
import contactImage from "../images/contact_image.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import ContactUsSectionForm from "@/components/contact_us_form";

const Page: React.FC = () => {
  return (
    <>
      {/* <PageHeader title="Contact Us" description={""} image={undefined} /> */}

      <div className="flex flex-col md:flex-row mt-10">
        {/* Form Section */}
        <div className="lg:w-1/2 md:w-2/3 sm:w-full flex flex-col items-start lg:ml-16">
          <h2 className="mb-8 text-4xl tracking-tight font-bold text-center text-white dark:text-white">
            Contact Us
          </h2>
          {/* Replace the form section with the ContactUsSectionForm */}
          <ContactUsSectionForm />
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center mt-4 md:mt-0 md:w-1/2">
          <Image
            src={contactImage}
            alt="Contact Image"
            className="rounded-lg h-auto max-w-full"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </div>

      <div className="mt-6">
        <FooterNav />
      </div>
    </>
  );
};

export default Page;
