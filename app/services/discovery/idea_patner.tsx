import React from "react";
import bg from "../../images/jorneyback.png";
import Link from "next/link";

const IdeaPartner: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-20 w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg.src})`, // Path relative to the public folder
      }}
    >
      {/* Overlay for darkening the background if needed */}
      <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] bg-black bg-opacity-50">
        {/* Content section */}
        <div className="flex flex-col gap-6 w-full  lg:px-0 h-full justify-center items-start pt-20 pb-20">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <span className="font-semibold text-sm md:text-base text-white">
                Tagline
              </span>
              <span className="font-bold text-lg md:text-4xl text-white">
                Why LinkShield is Your Ideal Partner for the Discovery Phase
              </span>
            </div>

            {/* Right Column */}
            <div className="flex flex-col w-full md:w-fu">
              <span className="font-normal text-base md:text-base text-white">
                The project discovery phase is critical to understanding the
                full scope of your project and addressing potential challenges.
                LinkShield’s structured approach includes detailed analysis,
                stakeholder engagement, and risk mitigation to ensure your
                project starts on a solid foundation and progresses smoothly.
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 w-full mt-6">
            {/* Column 1: Project Scope */}
            <div className="flex flex-col gap-4 flex-grow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M15.0046 14.1289L20.2773 8.10943L25.55 14.1289L20.2773 20.1484L15.0046 14.1289Z"
                  fill="white"
                />
                <path
                  d="M7.87565 20.9414L13.1484 14.9219L18.4211 20.9414L13.1484 26.9609L7.87565 20.9414Z"
                  fill="white"
                />
                <path
                  d="M7.87565 6.97656L13.1484 0.957083L18.4211 6.97656L13.1484 12.996L7.87565 6.97656Z"
                  fill="white"
                />
                <path
                  d="M0.746739 13.793L6.01948 7.77349L11.2922 13.793L6.01948 19.8124L0.746739 13.793Z"
                  fill="white"
                />
              </svg>
              <span className="font-bold text-lg md:text-2xl text-white">
                Project Scope
              </span>
              <span className="font-normal text-sm md:text-base text-white">
                A vague project scope can lead to scope creep and project
                failure. LinkShield’s project scoping services provide a clear
                and detailed outline, keeping the project focused and on track.
              </span>
            </div>

            {/* Column 2: Aligning Stakeholder Goals */}
            <div className="flex flex-col gap-4 flex-grow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M15.0046 14.1289L20.2773 8.10943L25.55 14.1289L20.2773 20.1484L15.0046 14.1289Z"
                  fill="white"
                />
                <path
                  d="M7.87565 20.9414L13.1484 14.9219L18.4211 20.9414L13.1484 26.9609L7.87565 20.9414Z"
                  fill="white"
                />
                <path
                  d="M7.87565 6.97656L13.1484 0.957083L18.4211 6.97656L13.1484 12.996L7.87565 6.97656Z"
                  fill="white"
                />
                <path
                  d="M0.746739 13.793L6.01948 7.77349L11.2922 13.793L6.01948 19.8124L0.746739 13.793Z"
                  fill="white"
                />
              </svg>
              <span className="font-bold text-lg md:text-2xl text-white">
                Aligning Stakeholder Goals
              </span>
              <span className="font-normal text-sm md:text-base text-white">
                Different stakeholders may have varying priorities and goals.
                LinkShield’s engagement sessions ensure that all parties align
                on project objectives, reducing conflict and fostering
                collaboration.
              </span>
            </div>

            {/* Column 3: Unidentified Risks */}
            <div className="flex flex-col gap-4 flex-grow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M15.0046 14.1289L20.2773 8.10943L25.55 14.1289L20.2773 20.1484L15.0046 14.1289Z"
                  fill="white"
                />
                <path
                  d="M7.87565 20.9414L13.1484 14.9219L18.4211 20.9414L13.1484 26.9609L7.87565 20.9414Z"
                  fill="white"
                />
                <path
                  d="M7.87565 6.97656L13.1484 0.957083L18.4211 6.97656L13.1484 12.996L7.87565 6.97656Z"
                  fill="white"
                />
                <path
                  d="M0.746739 13.793L6.01948 7.77349L11.2922 13.793L6.01948 19.8124L0.746739 13.793Z"
                  fill="white"
                />
              </svg>
              <span className="font-bold text-lg md:text-2xl text-white">
                Unidentified Risks
              </span>
              <span className="font-normal text-sm md:text-base text-white">
                LinkShield’s comprehensive risk analysis identifies potential
                challenges and develops mitigation strategies, ensuring a
                smoother project execution.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaPartner;
