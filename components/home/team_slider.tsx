import { Carousel } from "flowbite-react";
import React from "react";
import UserCard from "../user_card";

const TeamSlider = () => {
  return (
    <Carousel data-carousel-slide-to={"bottom"}>
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
  );
};

export default TeamSlider;
