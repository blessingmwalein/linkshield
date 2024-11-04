import ArrowIcon from "@/components/arrow_icon";
import Link from "next/link";

const Solutions = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <span className="font-bold text-3xl md:text-4xl text-start text-black">
        Comprehensive Networking Solutions for Modern Enterprises
      </span>

      {/* Solutions Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full mt-11">
        {/* Solution 1: Built-In Security */}
        <ServiceCard
          title="Tailored Enterprise Networking for Your Business Needs"
          description="LinkShield’s enterprise networking solutions provide robust, secure, and efficient network infrastructure tailored to your organization’s specific requirements, ensuring seamless communication and data flow."
          link="https://www.orientsoftware.com/blog/enterprise-networking/"
        />

        {/* Solution 2: Agile Development */}
        <ServiceCard
          title="Seamless Cloud Integration for Scalable Growth"
          description="Our cloud networking solutions enable your business to scale effortlessly, integrating seamlessly with cloud platforms to enhance flexibility, reduce costs, and improve performance."
          link="https://www.codemechsolutions.com/technologies/custom-cloud-integration"
        />

        {/* Solution 3: Unified Approach to Security */}
        <ServiceCard
          title="Data Center Networking with High Availability and Security"
          description="LinkShield offers advanced data center networking solutions, focusing on high availability, scalability, and robust security to ensure uninterrupted operations and data protection."
          link="https://intellias.com/data-center-networking/"
        />
      </div>
    </div>
  );
};

export default Solutions;

interface CyberCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ title, description, link }: CyberCardProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 grow items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        viewBox="0 0 27 26"
        fill="none"
      >
        <path
          d="M15.0046 13.1719L20.2773 7.1524L25.55 13.1719L20.2773 19.1914L15.0046 13.1719Z"
          fill="#212E32"
        />
        <path
          d="M7.87565 19.9844L13.1484 13.9649L18.4211 19.9844L13.1484 26.0039L7.87565 19.9844Z"
          fill="#212E32"
        />
        <path
          d="M7.87565 6.01953L13.1484 5.16881e-05L18.4211 6.01953L13.1484 12.039L7.87565 6.01953Z"
          fill="#212E32"
        />
        <path
          d="M0.746739 12.8359L6.01948 6.81646L11.2922 12.8359L6.01948 18.8554L0.746739 12.8359Z"
          fill="#212E32"
        />
      </svg>
      <span className="font-bold text-lg md:text-xl text-black text-center md:text-left">
        {title}
      </span>
      <span className="font-normal text-base md:text-lg text-black text-center md:text-left">
        {description}
      </span>
      <Link
        href={link}
        target="_blank"
        className="flex justify-center md:justify-start items-center gap-2 pt-2"
      >
        <span className="font-normal text-base md:text-lg text-black cursor-pointer">
          Learn More
        </span>
        <div className="w-6 h-6 mt-4 ml-3">
          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
};
