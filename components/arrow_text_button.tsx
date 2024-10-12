// Ensure this component runs on the client
"use client";

import React from "react";

// Define the props interface
interface ArrowTextButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const ArrowTextButton: React.FC<ArrowTextButtonProps> = ({
  text,
  onClick,
  icon,
}) => {
  return (
    <div
      className="flex justify-center md:justify-start items-center gap-2 pt-2 mt-4 cursor-pointer"
      onClick={onClick}
    >
      <span className="font-normal text-sm md:text-lg text-white">
        {text}
      </span>
      <div className="w-6 h-6 mt-4 ml-3">{icon}</div>
    </div>
  );
};

export default ArrowTextButton;
