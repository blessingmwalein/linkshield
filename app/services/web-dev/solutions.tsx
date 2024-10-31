import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import solution1 from "../../images/solution1.png";
import solution2 from "../../images/solution2.png";
import solution3 from "../../images/soluton3.png";
import Link from "next/link";

const SolutionsSection = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <div className="flex flex-col md:flex-row justify-center gap-12 w-full">
        {/* E-commerce Development */}
        <div className="flex flex-col gap-8 flex-grow">
          <Image
            src={solution1} // Local image path
            alt="E-commerce Development"
            width={240} // Set image dimensions
            height={240}
            className="object-cover w-full"
          />
          <div className="flex flex-col items-center gap-6 w-full">
            <span className="font-bold text-[32px] text-center text-black">
              E-commerce Development
            </span>
            <span className="font-normal text-[16px] text-center text-black">
              Build robust online stores with integrated payment gateways,
              inventory management, and user-friendly interfaces.
            </span>
          </div>
        </div>

        {/* Content Management Systems (CMS) */}
        <div className="flex flex-col gap-8 flex-grow">
          <Image
            src={solution2} // Local image path
            alt="Content Management Systems"
            width={240}
            height={240}
            className="object-cover w-full"
          />
          <div className="flex flex-col items-center gap-6 w-full">
            <span className="font-bold text-[32px] text-center text-black">
              Content Management Systems (CMS)
            </span>
            <span className="font-normal text-[16px] text-center text-black">
              Implement scalable CMS solutions that allow for easy content
              updates and management, tailored to your business operations.
            </span>
          </div>
        </div>

        {/* Ongoing Support and Maintenance */}
        <div className="flex flex-col gap-8 flex-grow">
          <Image
            src={solution3} // Local image path
            alt="Ongoing Support and Maintenance"
            width={240}
            height={240}
            className="object-cover w-full"
          />
          <div className="flex flex-col items-center gap-6 w-full">
            <span className="font-bold text-[32px] text-center text-black">
              Ongoing Support and Maintenance
            </span>
            <span className="font-normal text-[16px] text-center text-black">
              We will provide continuous support to keep your website updated,
              secure, and functioning at its best.
            </span>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex items-center gap-6 pt-4">
        <Link
          href={"/contact"}
          className="flex justify-center items-center gap-2 px-6 py-3 border border-black"
        >
          <span className="font-normal text-[16px] text-black">
            Get Started
          </span>
        </Link>
        <Link
          href={
            "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.maropost.com/blog/5-proven-ecommerce-marketing-strategies-for-driving-sales/&ved=2ahUKEwjK65Sj-7aJAxVSxQIHHdWcKSgQFnoECBAQAQ&usg=AOvVaw1Z2Ol9hWY4HE6NxJcqyBVo"
          }
          target="_blank"
          className="flex justify-center items-center gap-2"
        >
          <span className="font-normal text-[16px] text-black">Learn more</span>
          <div className="w-6 h-6">
            <svg className="w-[7.12px] h-[11.41px] text-black" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SolutionsSection;
