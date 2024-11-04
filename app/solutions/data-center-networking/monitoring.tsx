import React from "react";

const Scalability = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 self-stretch p-4">
      {/* Left Text Section */}
      <div className="flex flex-col gap-2 grow">
        <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-black">
        Scalable and High-Performance Network Architectures
        </span>
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col gap-6 grow">
        <div className="flex flex-col gap-8 self-stretch">
          <span className="font-normal text-base md:text-lg text-black">
          Scalability and performance are crucial in the ever-evolving landscape of data center networking. LinkShield ensures your infrastructure grows with your business needs.
          </span>

          {/* VPN and Intrusion Detection Section */}
          <div className="flex flex-col md:flex-row gap-6 self-stretch py-2">
            <div className="flex flex-col gap-4 grow">
              <span className="font-bold text-lg md:text-xl text-black">Virtualization Solutions</span>
              <span className="font-normal text-base md:text-lg text-black">
              LinkShield integrates virtualization technologies to maximize resource utilization, reduce costs, and simplify data center management, enhancing overall efficiency.
              </span>
            </div>

            <div className="flex flex-col gap-4 grow">
              <span className="font-bold text-lg md:text-xl text-black">Software-Defined Networking (SDN)</span>
              <span className="font-normal text-base md:text-lg text-black">
              Our SDN solutions provide flexible, automated, and efficient network management, enabling dynamic responses to changing data center demands.
              </span>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Scalability;
