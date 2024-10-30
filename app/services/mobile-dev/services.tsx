import React from "react";
import Image from "next/image";
import discoveryhero from "../../images/mobiledevhero2.png";
import Link from "next/link";

const MobileDevelopmentServices = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start gap-8 self-stretch">
      {/* Left Content - Takes half the width */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 justify-start items-start">
        {/* Tagline and Description */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {/* <span className="font-semibold text-lg text-black">Tagline</span> */}
            <div className="flex flex-col gap-6">
              <span className="font-bold text-4xl text-black">
                Comprehensive Mobile Development Services
              </span>
              <span className="font-normal text-lg text-black">
                LinkShield delivers end-to-end mobile development solutions that
                cater to various platforms and business needs. Our team is
                dedicated to building robust, scalable, and secure mobile
                applications.
              </span>
            </div>
          </div>

          {/* Risk Analysis and User Experience Sections */}
          <div className="flex flex-col md:flex-row gap-6 py-2">
            <Card
              title="iOS App Development"
              description="Leveraging the latest technologies and frameworks, our team develops high-quality iOS applications that offer a superior user experience and integrate seamlessly with Apple’s ecosystem."
            />
            <Card
              title="Android App Development"
              description="Our expertise in Android development ensures your app reaches the vast Android user base with optimized performance, stunning design, and robust functionality."
            />
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex items-center gap-6 pt-4">
          <Link 
            href={"/contact"}
          className="flex justify-center items-center gap-2">
            <span className="font-normal text-lg text-black">Get Started</span>
            <div className="w-6 h-6">
              <svg className="w-full h-full text-black" viewBox="0 0 24 24">
                <path
                  d="M9.71087 16.9492L15.4179 11.2422L9.71087 5.53516L8.29688 6.94916L12.5899 11.2422L8.29688 15.5352L9.71087 16.9492Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Image Section - Takes half the width */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image
          src={discoveryhero}
          alt="Project Analysis"
          className="w-full object-cover" // Responsive width and maintain aspect ratio
          layout="responsive" // Makes the image responsive
        />
      </div>
    </div>
  );
};

// Card Component for Risk Analysis and User Experience
const Card = ({ title, description }: any) => {
  return (
    <div className="flex flex-col gap-4 grow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="27"
        viewBox="0 0 26 27"
        fill="none"
      >
        <path
          d="M15.0046 13.6719L20.2773 7.6524L25.55 13.6719L20.2773 19.6914L15.0046 13.6719Z"
          fill="#212E32"
        />
        <path
          d="M7.87565 20.4844L13.1484 14.4649L18.4211 20.4844L13.1484 26.5039L7.87565 20.4844Z"
          fill="#212E32"
        />
        <path
          d="M7.87565 6.51953L13.1484 0.500052L18.4211 6.51953L13.1484 12.539L7.87565 6.51953Z"
          fill="#212E32"
        />
        <path
          d="M0.746739 13.3359L6.01948 7.31646L11.2922 13.3359L6.01948 19.3554L0.746739 13.3359Z"
          fill="#212E32"
        />
      </svg>
      <span className="font-bold text-xl text-black">{title}</span>
      <span className="font-normal text-lg text-black">{description}</span>
    </div>
  );
};

export default MobileDevelopmentServices;
