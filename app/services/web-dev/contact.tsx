import React from "react";
import Image from "next/image";
import contactImage from "../../images/web/image2.png";
import Link from "next/link";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center self-stretch rounded-2xl border border-solid border-black p-6 md:p-12 mt-10">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center gap-6 md:w-1/2">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-3xl md:text-5xl text-black">
            Let’s bring your vision to life
          </span>
          <span className="font-normal text-base md:text-lg text-black">
            Whether you're starting from scratch or looking to upgrade your
            existing website, we have the expertise to deliver exceptional
            results. Contact us today to discuss your project and see how we can
            help you achieve your digital goals.
          </span>
        </div>
        <div className="flex gap-4 pt-4">
          <Link
            href={"/contact"}
            className="flex justify-center items-center gap-2 bg-black px-6 py-3 rounded-lg"
          >
            <span className="font-normal text-base text-white">Contact</span>
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image
          src={contactImage}
          alt="Contact"
          className="object-cover rounded-lg"
          layout="responsive"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default ContactSection;
