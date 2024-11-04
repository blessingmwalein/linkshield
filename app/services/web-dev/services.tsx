import React from "react";

const ServiceItem = ({ icon, title, description }: any) => {
  return (
    <div className="flex flex-col gap-4 grow">
      <div className="w-12 h-12">{icon}</div> {/* Placeholder for icon */}
      <span className="font-bold text-[20px] text-black">{title}</span>
      <span className="font-normal text-[16px] text-black">{description}</span>
    </div>
  );
};

const WebDevelopmentServices = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 grow">
        <span className="font-bold text-[48px] text-black">
          Comprehensive Web Development Services
        </span>
      </div>

      {/* Services Section */}
      <div className="flex flex-col gap-8 grow">
        <span className="font-normal text-[18px] text-black">
          At LinkShield, we offer a wide range of web development services to
          cater to every business need. Our team of experts is equipped to
          deliver custom solutions that drive results and enhance your online
          presence.
        </span>

        <div className="flex flex-col gap-6 py-2">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Service Item 1 */}
            <ServiceItem
              icon={
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
              } // Replace with your icon component
              title="Custom Web Development"
              description="Tailored web solutions designed to meet your specific business needs, ensuring a unique and engaging user experience."
            />

            {/* Service Item 2 */}
            <ServiceItem
              icon={
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
              } // Replace with your icon component
              title="Full-Stack Development"
              description="Comprehensive frontend and backend development services, integrating seamlessly to create a cohesive and powerful web application."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
