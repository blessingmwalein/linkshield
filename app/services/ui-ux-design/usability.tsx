import React from 'react';
import Image from 'next/image';
import usability from '../../images/usability.png';

const UsabilityTesting = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start gap-8 self-stretch">
      {/* Left Content - Takes half the width */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 justify-start items-start">
        {/* Tagline and Description */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-6">
              <span className="font-bold text-4xl text-black">
              Enhancing Usability Through Testing
              </span>
              <span className="font-normal text-lg text-black">
              Design doesn’t end at deployment. LinkShield continuously tests and refines interfaces to improve usability and user satisfaction.
              </span>
            </div>
          </div>

          {/* Risk Analysis and User Experience Sections */}
          <div className="flex flex-col md:flex-row gap-6 py-2">
            <Card
              title="A/B Testing"
              description="To optimize performance, LinkShield implements A/B testing to compare different design variations and determine the best-performing options."
            />
            <Card
              title="Accessibility Design"
              description="Inclusive design is a priority for LinkShield. We ensure our designs are accessible to users of all abilities, complying with accessibility standards."
            />
          </div>
        </div>

        {/* Get Started Button */}
       
      </div>

      {/* Image Section - Takes half the width */}
      <div className="flex justify-center w-full md:w-1/2">
        <Image 
          src={usability}
          alt="Project Analysis" 
          className="w-full object-cover" // Responsive width and maintain aspect ratio
          layout="responsive" // Makes the image responsive
        />
      </div>
    </div>
  );
};

// Card Component for Risk Analysis and User Experience
const Card = ({ title, description }: any) => {
  return (
    <div className="flex flex-col gap-4 grow">
      <span className="font-bold text-xl text-black">{title}</span>
      <span className="font-normal text-lg text-black">{description}</span>
    </div>
  );
};

export default UsabilityTesting;
