import React from "react";
import bg from "../../images/jorneyback.png";
import Link from "next/link";
const StartJourney: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-20 w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg.src})`, // Path relative to the public folder
      }}
    >
      {/* Overlay for darkening the background if needed */}

      <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] bg-black bg-opacity-50">
        {/* Content section */}
        <div className="flex flex-col gap-6 w-full max-w-[768px]  lg:px-0 h-full justify-center items-start p-10">
          <div className="flex flex-col gap-6 text-start">
            <span className="font-bold text-4xl lg:text-[48px] leading-tight text-white">
              Start Your Journey with Us
            </span>
            <span className="font-normal text-base lg:text-lg text-white">
              Whether you have questions about our services, need support, or
              want to discuss your next project, our team is ready to assist.
              Contact us today to get started or to learn more about how we can
              support your business.
            </span>
          </div>

          {/* Buttons section */}
          <div className="flex gap-4 pt-4">
            {/* <div className="flex justify-center items-center gap-2 bg-black px-6 py-3 border border-black">
              <span className="font-normal text-base text-white">
                Get Started
              </span>
            </div> */}
            <Link
              href="/contact"
              className="flex justify-center items-center gap-2 px-6 py-3 border border-white"
            >
              <span className="font-normal text-base text-white">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
