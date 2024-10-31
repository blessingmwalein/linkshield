"use client";

import { Accordion } from "flowbite-react";
import inter1 from "../../images/inter1.png"; // Ensure these paths point to the correct images
import inter2 from "../../images/inter2.png";
import inter3 from "../../images/inter3.png";
import inter4 from "../../images/inter4.png";
import Link from "next/link";

const Intergrated = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Left Side - FAQs Title and Contact Button */}
      <div className="flex flex-col gap-8 flex-grow md:w-1/2 w-full">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-4xl text-black">
            Integrated Management and Advanced Connectivity
          </span>
          <span className="font-normal text-lg text-black">
            LinkShield offers solutions that integrate seamlessly with existing
            data center infrastructures, ensuring smooth operations and enhanced
            connectivity.
          </span>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <Link
            href={"/contact"}
            className="flex justify-center items-center gap-2 px-6 py-3 border border-black cursor-pointer"
          >
            <span className="font-normal text-base text-black">
              Get started
            </span>
          </Link>
          <Link
            href={
              "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjd1a2q87aJAxWksYMHHaKzKiQYABAAGgJlZg&co=1&ase=2&gclid=Cj0KCQjwsoe5BhDiARIsAOXVoUsevWDzYGCZRIiI5erifpwLq9YXC1ujhStekG7kSS1ESvuaUNbHS3caAh_7EALw_wcB&ohost=www.google.com&cid=CAESVeD21AIUGSmI232lk2oiRhJXHbF2gl1Isj4TVs7bIiyoTOvyGoRo-JXbuRcQwkE-QbDrqHHwvB3t7zr5N3vAtMvZfH_LD8xiaaY1SrjwMH40f9fq8sk&sig=AOD64_2pBuLSoMcJi326jq42M_F20M50tw&q&nis=4&adurl&ved=2ahUKEwiTi6mq87aJAxU21wIHHYyKEPcQ0Qx6BAgLEAE"
            }
            target="_blank"
            className="flex justify-center items-center gap-2"
          >
            <span className="font-normal text-base text-black">Learn more</span>
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

      {/* Right Side - Background Cards */}
      <div className="flex flex-col grow w-full space-y-4">
        <BackgroundCard
          title="Data Center Interconnect (DCI)"
          description="We provide DCI solutions that enable high-speed, secure connectivity between multiple data centers, ensuring seamless data flow and communication."
          image={inter1}
        />
        <BackgroundCard
          title="Hybrid Data Center Management"
          description="Our hybrid management solutions enable efficient management of both on-premises and cloud-based data centers, providing unified control and visibility."
          image={inter2}
        />
        <BackgroundCard
          title="Disaster Recovery and Backup Solutions"
          description="LinkShield offers robust disaster recovery and backup solutions, ensuring data integrity and availability even in the event of a failure."
          image={inter3}
        />
        <BackgroundCard
          title="Tailored Data Center Solutions"
          description="At LinkShield, we understand the unique requirements of each business. Our tailored solutions ensure your data center network is optimized for your specific needs and objectives."
          image={inter4}
        />
      </div>
    </div>
  );
};

export default Intergrated;

// BackgroundCard.js
const BackgroundCard = ({ image, title, description }: any) => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-80 rounded-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${image.src})` }} // Removed .src to use the image directly
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="mt-2 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
