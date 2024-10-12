import React from 'react';

const ProjectUnderstanding = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 self-stretch">
      <div className="flex flex-col gap-8 grow">
        {/* Secure Section */}
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-lg text-black">Secure</span>
          <span className="font-bold text-4xl text-black">Understanding your project’s needs</span>
        </div>
        
        {/* Get Started Button */}
        <div className="flex items-center gap-4 pt-4">
          <div className="flex justify-center items-center gap-2">
            <span className="font-normal text-lg text-black">Get started</span>
            <div className="w-6 h-6">
              <svg className="w-full h-full text-black" viewBox="0 0 24 24">
                <path d="M9.71087 16.9492L15.4179 11.2422L9.71087 5.53516L8.29688 6.94916L12.5899 11.2422L8.29688 15.5352L9.71087 16.9492Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 grow">
        {/* Project Details Section */}
        <DetailCard
          title="Requirements Gathering"
          description="Our team works closely with you to understand and document your project's functional and non-functional requirements, ensuring clarity and precision."
        />
        <DetailCard
          title="Stakeholder Engagement"
          description="LinkShield facilitates workshops and discussions with key stakeholders to align project objectives, expectations, and deliverables."
        />
        <DetailCard
          title="Technical Feasibility Assessment"
          description="We evaluate the technical feasibility of your project, considering all technological requirements and constraints to ensure successful implementation."
        />
        <DetailCard
          title="Project Scoping and Definition"
          description="We define the scope of your project, outlining the key deliverables, timelines, and resources required to meet your objectives."
        />
      </div>
    </div>
  );
};

// DetailCard Component
const DetailCard = ({ title, description } : any) => {
  return (
    <div className="flex gap-6 self-stretch">
      <div className="flex flex-col gap-4 grow">
        <span className="font-bold text-xl text-black">{title}</span>
        <span className="font-normal text-lg text-black">{description}</span>
      </div>
    </div>
  );
};

export default ProjectUnderstanding;
