import Link from "next/link";
import React from "react";

const Partners = () => {
  const sections = [
    {
      title: "Maintaining Network Security",
      link: "https://www.esecurityplanet.com/networks/how-to-secure-a-network/",
      description:
        "Network security is crucial to protect sensitive information. LinkShield implements advanced security protocols and real-time monitoring to safeguard your data from potential threats.",
    },
    {
      title: "Secure, Scalable, and Reliable Networks",
      link: "https://www.greycortex.com/blog/secure-and-reliable-networks-your-frontline-against-cyber-threats",
      description:
        "At LinkShield, we build networks that not only meet today's demands but are also prepared for tomorrow's challenges. Let us be your partner in ensuring seamless and secure connectivity.",
    },
    {
      title: "Performance and Stellar Uptimes",
      link: "https://www.ptc.com/en/case-studies/stellar",
      description:
        "Network performance issues, such as latency and slow data transfer, can hinder productivity. LinkShield’s WAN optimization and SD-WAN solutions enhance network performance, reducing latency and improving data flow for a seamless user experience.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-6 grow w-full lg:w-1/3"
        >
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
            <span className="font-bold text-2xl text-center text-black">
              {section.title}
            </span>
            <span className="font-normal text-base text-center text-black">
              {section.description}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 pt-2">
            <Link
              href={section.link}
              target="_blank"
              className="flex justify-center items-center gap-2"
            >
              <span className="font-normal text-base text-black">
                Learn more
              </span>
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.71087 16.9492L15.4179 11.2422L9.71087 5.53516L8.29688 6.94916L12.5899 11.2422L8.29688 15.5352L9.71087 16.9492Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Partners;
