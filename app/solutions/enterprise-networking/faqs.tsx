"use client";

import { Accordion } from "flowbite-react";

export function FAQsComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Left Side - FAQs Title and Contact Button */}
      <div className="flex flex-col gap-8 flex-grow md:w-1/2">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-4xl text-black">FAQs</span>
          <span className="font-normal text-lg text-black">
            Ready to Upgrade Your Network?
          </span>
        </div>
        <div className="flex justify-center w-1/2 items-center gap-2 px-6 py-3 border border-black">
          <span className="font-normal text-base text-black">Contact</span>
        </div>
      </div>

      {/* Right Side - Accordion */}
      <div className="flex flex-col grow ">
        <Accordion>
          {/* First Accordion Item */}
          <Accordion.Panel>
            <Accordion.Title>
              What strategies does LinkShield use to ensure scalable network
              architectures?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                LinkShield uses modular design principles and scalable
                technologies like SD-WAN to build network infrastructures. These
                strategies allow for easy expansion and integration of new
                devices and locations without disrupting existing network
                performance.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* Second Accordion Item */}
          <Accordion.Panel>
            <Accordion.Title>
              How does LinkShield handle network security in multi-cloud
              environments?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                We implement comprehensive security measures such as encrypted
                communication, identity and access management (IAM), and
                continuous monitoring. Our approach ensures that data remains
                secure across multiple cloud platforms and hybrid environments.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* Third Accordion Item */}
          <Accordion.Panel>
            <Accordion.Title>
              What are the key benefits of implementing SD-WAN with LinkShield?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                SD-WAN provides optimized traffic flow, improved application
                performance, and cost-effective connectivity. LinkShield’s
                SD-WAN solutions offer secure, flexible, and reliable
                networking, which enhances the overall efficiency of your
                network.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* Fourth Accordion Item */}
          <Accordion.Panel>
            <Accordion.Title>
              How does LinkShield approach the integration of legacy systems
              with modern networking solutions?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                LinkShield conducts thorough assessments of existing systems to
                understand compatibility and integration challenges. We then
                design custom solutions that bridge the gap between legacy
                systems and new technologies, ensuring seamless operation and
                minimal disruption.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* Fifth Accordion Item */}
          <Accordion.Panel>
            <Accordion.Title>
              What proactive measures does LinkShield take to prevent network
              downtime?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                LinkShield employs real-time monitoring, automated alerts, and
                redundancy measures to prevent network downtime. Our proactive
                approach includes regular maintenance, performance tuning, and
                the use of failover systems to ensure continuous network
                availability.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}
