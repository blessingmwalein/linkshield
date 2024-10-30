import Link from "next/link";
import React from "react";

const CustomizedSolutions = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full p-4 md:p-0">
      <div className="flex flex-col md:flex-row gap-12 w-full">
        {/* First Card */}
        <div className="flex flex-col items-center gap-6 grow">
          <div className="flex flex-col items-center gap-6 w-full">
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
            <span className="font-bold text-2xl md:text-3xl text-center text-black">
              Customized Solutions for Your Business
            </span>
            <span className="font-normal text-sm md:text-base text-center text-black">
              Our team of experienced designers and developers work closely with
              you to understand your business goals and objectives. We then
              create tailored UI/UX solutions that align with your brand
              identity and resonate with your target audience.
            </span>
          </div>
        </div>
        {/* Second Card */}
        <div className="flex flex-col items-center gap-6 grow">
          <div className="flex flex-col items-center gap-6 w-full">
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
            <span className="font-bold text-2xl md:text-3xl text-center text-black">
              Streamline Your User Experience
            </span>
            <span className="font-normal text-sm md:text-base text-center text-black">
              With our expertise in UI/UX design, we help businesses optimize
              their user experience, making it intuitive and seamless. By
              simplifying complex processes and enhancing usability, we ensure
              that your customers have a positive interaction with your digital
              products.
            </span>
          </div>
        </div>
        {/* Third Card */}
        <div className="flex flex-col items-center gap-6 grow">
          <div className="flex flex-col items-center gap-6 w-full">
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
            <span className="font-bold text-2xl md:text-3xl text-center text-black">
              Stay Ahead of the Competition
            </span>
            <span className="font-normal text-sm md:text-base text-center text-black">
              In today's competitive landscape, a great user experience can set
              your business apart. Our UI/UX solutions are designed to give you
              a competitive edge, helping you attract and retain customers,
              increase conversions, and drive business growth.
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 pt-4">
        <Link
          href={"/contact"}
          className="flex justify-center items-center gap-2 px-6 py-3 border border-black rounded"
        >
          <span className="font-normal text-sm md:text-base text-black">
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CustomizedSolutions;
