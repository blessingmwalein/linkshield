import React from "react";

const OurWorkCards = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 justify-between mb-8 md:mb-12"> {/* Adjusted bottom margin for mobile */}
      <div className="flex-grow">
        <WorkCard
          title="97%"
          description="of LinkShield customers say their experience is better than other agencies they had used before."
        />
      </div>
      <div className="flex-grow">
        <WorkCard
          title="40"
          description="projects completed on average by LinkShield per annum."
        />
      </div>
      <div className="flex-grow">
        <WorkCard
          title="500 hours"
          description="total average time saved per year by LinkShield clients."
        />
      </div>
    </div>
  );
};

export default OurWorkCards;

interface WorkCardProps {
  title: string;
  description: string;
}

const WorkCard = ({ title, description }: WorkCardProps) => {
  return (
    <div className="w-full max-w-sm bg-[#304146] rounded-2xl shadow">
      <div className="flex flex-col items-start pb-4 px-6">
        <h3 className="mb-2 text-4xl md:text-5xl font-bold text-white mt-4">{title}</h3>
        <p className="text-base text-white leading-6">{description}</p>
      </div>
    </div>
  );
};
