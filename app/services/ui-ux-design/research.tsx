import React from "react";
import Image from "next/image";
import ux1 from "../../images/uxui1.png";
import ux2 from "../../images/ux2.png"; // Corrected path for default image
import ux3 from "../../images/ux3.png"; // Corrected path for default image
import Link from "next/link";

const ResearchCard = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 grow">
          <div className="flex flex-col self-stretch bg-white outline outline-black">
            <div className="flex flex-col justify-center gap-8 p-12">
              <div className="flex flex-col gap-2 self-stretch">
                <span className="font-semibold text-base text-black">
                  Innovate
                </span>
                <div className="flex flex-col gap-6 self-stretch">
                  <span className="font-bold text-3xl text-black">
                    User Research and Analysis
                  </span>
                  <span className="font-normal text-base text-black">
                    Understanding your users is key to designing effective
                    interfaces. We conduct in-depth user research to gather
                    insights and inform our design decisions.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 self-stretch">
                <Link
                  href={"/contact"}
                  className="flex justify-center items-center gap-2 px-6 py-3 outline outline-black"
                >
                  <span className="font-normal text-base text-black">
                    Get Started
                  </span>
                </Link>
                <Link
                  href={
                    "https://www.userinterviews.com/ux-research-field-guide-chapter/research-analysis"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2"
                >
                  <span className="font-normal text-base text-black">
                    Learn More
                  </span>
                  <div className="w-6 h-6">
                    <svg className="w-6 h-6 text-black" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center self-stretch">
              <Image
                src={ux1} // Update with your local image path
                alt="User Research and Analysis"
                layout="responsive"
                width={500}
                height={360}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col grow bg-white outline outline-black">
              <div className="flex flex-col gap-6 grow p-6">
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-xl text-black">
                    Interaction Design
                  </span>
                  <span className="font-normal text-base text-black">
                    We design interactive elements that guide users intuitively
                    through your digital product, enhancing usability and
                    engagement.
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <Link
                    href={
                      "https://www.interaction-design.org/literature/article/what-is-interaction-design"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2"
                  >
                    <span className="font-normal text-base text-black">
                      Learn More
                    </span>
                    <div className="w-6 h-6">
                      <svg className="w-6 h-6 text-black" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col grow bg-white outline outline-black">
              <div className="flex flex-col gap-6 grow p-6">
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-xl text-black">
                    Information Architecture
                  </span>
                  <span className="font-normal text-base text-black">
                    Organizing content effectively is crucial for usability. Our
                    information architecture services ensure users find what
                    they need quickly and easily.
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <Link
                    href={
                      "https://en.wikipedia.org/wiki/Information_architecture"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2"
                  >
                    <span className="font-normal text-base text-black">
                      Learn More
                    </span>
                    <div className="w-6 h-6">
                      <svg className="w-6 h-6 text-black" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 grow">
          <div className="flex self-stretch bg-white outline outline-black">
            <div className="flex flex-col justify-center items-end self-stretch grow w-1/2">
              <Image
                src={ux2} // Update with your local image path
                alt="Wireframing and Prototyping"
                layout="responsive"
                width={500}
                height={340}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 self-stretch grow p-3 w-1/2">
              <div className="flex flex-col gap-2 self-stretch">
                <span className="font-semibold text-base text-black">
                  Elevate
                </span>
                <div className="flex flex-col gap-2 self-stretch">
                  <span className="font-bold text-2xl text-black">
                    Wireframing and Prototyping
                  </span>
                  <span className="font-normal text-base text-black">
                    Before diving into development, we create wireframes and
                    prototypes to visualize the design and user interactions,
                    allowing for early feedback and adjustments.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 self-stretch">
                <Link
                  href={
                    "https://theproductmanager.com/topics/prototyping-vs-wireframing/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2"
                >
                  <span className="font-normal text-base text-black">
                    Learn More
                  </span>
                  <div className="w-6 h-6">
                    <svg className="w-6 h-6 text-black" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-stretch bg-white outline outline-black">
            <div className="flex flex-col justify-center gap-8 self-stretch p-12">
              <div className="flex flex-col gap-2 self-stretch">
                <span className="font-semibold text-base text-black">
                  Transform
                </span>
                <div className="flex flex-col gap-6 self-stretch">
                  <span className="font-bold text-3xl text-black">
                    Responsive Design
                  </span>
                  <span className="font-normal text-base text-black">
                    With LinkShield, your product will look and function
                    flawlessly across all devices and screen sizes, ensuring a
                    consistent experience for every user.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 self-stretch">
                <Link
                  href={"/contact"}
                  className="flex justify-center items-center gap-2 px-6 py-3 outline outline-black"
                >
                  <span className="font-normal text-base text-black">
                    Get Started
                  </span>
                </Link>
                <Link
                  href="https://en.wikipedia.org/wiki/Responsive_web_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2"
                >
                  <span className="font-normal text-base text-black">
                    Learn More
                  </span>
                  <div className="w-6 h-6">
                    <svg className="w-6 h-6 text-black" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center self-stretch">
              <Image
                src={ux3} // Update with your local image path
                alt="Responsive Design"
                layout="responsive"
                width={500}
                height={360}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
