import { Carousel } from "flowbite-react";
import React from "react";
import UserCard from "../user_card";

const TeamSlider = () => {
  return (
    <div className="relative">
      {/* Adjusted wrapper height */}
      <Carousel
        className="h-[550px] md:h-[600px]" // Increased height for carousel
        data-carousel-slide-to={"bottom"}
      >
        {/* Carousel Slide 1 */}
        <div className="flex flex-row space-x-4 justify-between md:space-x-12 md:flex-nowrap">
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
        </div>

        {/* Carousel Slide 2 */}
        <div className="flex flex-row space-x-4 justify-between md:space-x-12 md:flex-nowrap">
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
        </div>

        {/* Carousel Slide 3 */}
        <div className="flex flex-row space-x-4 justify-between md:space-x-12 md:flex-nowrap">
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <UserCard />
          </div>
        </div>
      </Carousel>

      {/* Custom Dots Styling */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {/* Carousel dots will auto-position correctly based on Flowbite's default implementation */}
      </div>
    </div>
  );
};

export default TeamSlider;
