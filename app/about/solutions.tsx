import React from "react";
import Image from "next/image";

import solutionsImage from "../images/solututions.png";

const SecuritySolutions: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 p-4">
      <div className="flex flex-col gap-6 grow">
        <div className="flex flex-col gap-6 self-stretch">
          <span className="font-bold text-3xl md:text-4xl text-black">
            Protecting businesses from cyber threats with our advanced security
            solutions.
          </span>
          <span className="font-normal text-base md:text-lg text-black">
            LinkShield is a leading cybersecurity company that specializes in
            providing comprehensive security solutions for businesses. With our
            expertise in mobile and web development, we also offer cutting-edge
            software solutions to help businesses stay ahead of the evolving
            threat landscape.
          </span>
        </div>
      </div>

      <Image
        src={solutionsImage} // Dynamic image based on selected tab
        alt="Hero Image"
        className="rounded-lg " // Add this class for curved corners
      />
    </div>
  );
};

export default SecuritySolutions;
