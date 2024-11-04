import React from "react";
import Image from "next/image"; // or from another library as needed

// Import your local images
import critical from "../../images/critical.png"; // Adjust the path according to your project structure

const Critical = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left Text Content */}
      <div className="relative w-full md:w-1/2 h-[auto]">
        {" "}
        {/* Use w-1/2 for half width on md and larger */}
        <Image
          src={critical} // Use the local image imported above
          alt="Network Infrastructure"
          layout="responsive" // Make the image responsive
          width={616} // Keep the aspect ratio
          height={640} // Keep the aspect ratio
          className="object-cover" // Ensure the image covers the container
        />
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        {" "}
        {/* Use w-1/2 for half width on md and larger */}
        <div className="flex flex-col gap-4 self-stretch">
          <span className="font-bold text-[32px] md:text-[40px] leading-tight text-black">
          Solving Critical Data Center Networking Issues
          </span>
          <span className="font-normal text-[16px] md:text-[18px] leading-relaxed text-black">
          LinkShield tackles the most pressing challenges in data center networking with expert solutions that enhance security, scalability, and performance.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 self-stretch py-2">
          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-[18px] md:text-[20px] leading-snug text-black">
            Ensuring Secure Data Transfer
            </span>
            <span className="font-normal text-[14px] md:text-[16px] leading-snug text-black">
            Security is a top priority in data centers. LinkShield implements robust security measures to protect your data during transfer and storage, minimizing the risk of breaches.
            </span>
          </div>

          <div className="flex flex-col gap-4 grow">
            <span className="font-bold text-[18px] md:text-[20px] leading-snug text-black">
            Managing Complex Infrastructures
            </span>
            <span className="font-normal text-[14px] md:text-[16px] leading-snug text-black">
            Complex data center infrastructures can be hard to manage. LinkShield's solutions simplify management through automation and intelligent network design, reducing complexity and improving control.
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
   
    </div>
  );
};

export default Critical;
