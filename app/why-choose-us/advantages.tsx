import React from "react";

const LinkShieldAdvantage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 self-stretch p-4">
      {/* Left Section */}
      <div className="flex flex-col gap-4 md:w-1/2 mt-10">
        <span className="font-bold text-4xl leading-tight text-black">
          The LinkShield Advantage
        </span>
        <span className="font-normal text-lg leading-normal text-black">
          LinkShield offers unmatched expertise and value, providing tailored solutions that address your unique challenges and drive your success.
        </span>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-8 md:w-1/2 mt-10">
        <div className="flex flex-col gap-6 self-stretch py-2">
          {/* Expertise and Experience */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl leading-tight text-black">
              Expertise and Experience
            </span>
            <span className="font-normal text-base leading-normal text-black">
              Our team brings years of experience and deep industry knowledge, ensuring top-notch solutions across cybersecurity, software development, and networking.
            </span>
          </div>

          {/* Customized Solutions */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl leading-tight text-black">
              Customized Solutions
            </span>
            <span className="font-normal text-base leading-normal text-black">
              We understand that every business is unique. LinkShield crafts bespoke solutions tailored to your specific requirements, ensuring optimal results and satisfaction.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkShieldAdvantage;
