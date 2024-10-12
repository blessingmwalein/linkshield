//circled number

import React from 'react';

interface CircledNumberProps {
  number: string;
}

const CircledNumber = ({ number }: CircledNumberProps) => {
  return (
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#212E32] text-white text-3xl font-bold">
      {number}
    </div>
  );
};

export default CircledNumber;