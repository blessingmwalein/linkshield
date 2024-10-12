import Link from "next/link";
import React from "react";

const JourneyComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 grow px-4 py-16 border border-solid border-black">
      <div className="max-w-[768px] flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-6 w-full">
          <span className="font-bold text-4xl text-center text-black">
            Start Your Journey with Us
          </span>
          <span className="font-normal text-lg text-center text-black">
            Whether you have questions about our services, need support, or want to discuss your next project, our team is ready to assist.
          </span>
        </div>
        <div className="flex gap-4 pt-4 w-full justify-center">
          <Link
            href="/contact"
          className="flex justify-center items-center gap-2 bg-black px-6 py-3 text-white text-base">
            Contact Us
          </Link>
          <Link
            href="/contact"
          className="flex justify-center items-center gap-2 border border-black px-6 py-3 text-black text-base">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JourneyComponent;
