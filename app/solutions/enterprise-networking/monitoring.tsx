import Link from "next/link";
import React from "react";

const SecurityMonitoringSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 self-stretch p-4">
      {/* Left Text Section */}
      <div className="flex flex-col gap-2 grow">
        <span className="font-semibold text-base text-black md:text-lg">
          Tagline
        </span>
        <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black">
          Security and Monitoring for Peace of Mind
        </span>
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col gap-6 grow">
        <div className="flex flex-col gap-8 self-stretch">
          <span className="font-normal text-base md:text-lg text-black">
            Security is paramount in today’s connected world. LinkShield’s
            networking solutions incorporate robust security measures to protect
            your data and infrastructure.
          </span>

          {/* VPN and Intrusion Detection Section */}
          <div className="flex flex-col md:flex-row gap-6 self-stretch py-2">
            <div className="flex flex-col gap-4 grow">
              <span className="font-bold text-lg md:text-xl text-black">
                VPN and Remote Access
              </span>
              <span className="font-normal text-base md:text-lg text-black">
                LinkShield sets up secure Virtual Private Networks (VPNs) that
                enable safe and encrypted remote access, allowing your workforce
                to connect securely from anywhere.
              </span>
            </div>

            <div className="flex flex-col gap-4 grow">
              <span className="font-bold text-lg md:text-xl text-black">
                Intrusion Detection and Prevention
              </span>
              <span className="font-normal text-base md:text-lg text-black">
                Our intrusion detection and prevention systems protect your
                network from unauthorized access and cyber threats, ensuring
                your data remains secure.
              </span>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
          <Link
            href={"/contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 px-4 py-2 border border-black "
          >
            <span className="font-normal text-base md:text-lg text-black">
              Get Started
            </span>
          </Link>
          <Link
          href={"https://mountmanelectric.com/protecting-your-home-or-business-how-security-systems-can-provide-peace-of-mind/"}
          className="flex justify-center items-center gap-2">
            <span className="font-normal text-base md:text-lg text-black">
              Learn more
            </span>
            <div className="w-6 h-6">
              {/* SVG Placeholder */}
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
    </div>
  );
};

export default SecurityMonitoringSection;
