import Link from "next/link";
import ArrowIcon from "../arrow_icon";

interface CyberCardProps {
  title: string;
  description: string;
  link: string;
}

const CyberCard2 = ({ title, description, link }: CyberCardProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 grow">
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
        href={link || "#"}
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Security recommendation for external links
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

export default CyberCard2;
