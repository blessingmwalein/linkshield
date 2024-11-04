import React from "react";
import Image from "next/image";
import defaultImage from "../images/defaultuser.png";
const TeamCard = ({ image, name, title, description }: any) => {
  return (
    <div className="flex flex-col items-center gap-6  bg-white shadow-md rounded-xl">
      {/* <img src={image} alt={name} className="h-[395px] object-cover rounded-t-lg" /> */}
      <Image
        src={image || defaultImage}
        alt={name}
        className="h-70 object-cover rounded-t-lg"
      />
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-[20px] text-center text-black">
            {name}
          </span>
          <span className="font-normal text-[18px] text-center text-black">
            {title}
          </span>
        </div>
        <span className="font-normal text-[16px] text-center text-black">
          {description}
        </span>
      </div>
      <div className="flex gap-3.5">
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 3.24219C3.67157 3.24219 3 3.91376 3 4.74219V19.7422C3 20.5706 3.67157 21.2422 4.5 21.2422H19.5C20.3284 21.2422 21 20.5706 21 19.7422V4.74219C21 3.91376 20.3284 3.24219 19.5 3.24219H4.5ZM8.52076 7.24491C8.52639 8.20116 7.81061 8.79038 6.96123 8.78616C6.16107 8.78194 5.46357 8.14491 5.46779 7.24632C5.47201 6.40116 6.13998 5.72194 7.00764 5.74163C7.88795 5.76132 8.52639 6.40679 8.52076 7.24491ZM12.2797 10.0039H9.75971H9.7583V18.5638H12.4217V18.3641C12.4217 17.9842 12.4214 17.6042 12.4211 17.2241C12.4203 16.2103 12.4194 15.1954 12.4246 14.1819C12.426 13.9358 12.4372 13.6799 12.5005 13.445C12.7381 12.5675 13.5271 12.0008 14.4074 12.1401C14.9727 12.2286 15.3467 12.5563 15.5042 13.0893C15.6013 13.4225 15.6449 13.7811 15.6491 14.1285C15.6605 15.1761 15.6589 16.2237 15.6573 17.2714C15.6567 17.6412 15.6561 18.0112 15.6561 18.381V18.5624H18.328V18.3571C18.328 17.9051 18.3278 17.4532 18.3275 17.0013C18.327 15.8718 18.3264 14.7423 18.3294 13.6124C18.3308 13.1019 18.276 12.5985 18.1508 12.1049C17.9638 11.3708 17.5771 10.7633 16.9485 10.3246C16.5027 10.0124 16.0133 9.81129 15.4663 9.78879C15.404 9.7862 15.3412 9.78281 15.2781 9.7794C14.9984 9.76428 14.7141 9.74892 14.4467 9.80285C13.6817 9.95613 13.0096 10.3063 12.5019 10.9236C12.4429 10.9944 12.3852 11.0663 12.2991 11.1736L12.2797 11.1979V10.0039ZM5.68164 18.5666H8.33242V10.0095H5.68164V18.5666Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
          >
            <path
              d="M14.1761 0.242188H16.9362L10.9061 7.01959L18 16.2422H12.4456L8.0951 10.6488L3.11723 16.2422H0.35544L6.80517 8.99299L0 0.242188H5.69545L9.6279 5.35481L14.1761 0.242188ZM13.2073 14.6176H14.7368L4.86441 1.78147H3.2232L13.2073 14.6176Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 0C4.03145 0 0 4.03145 0 9C0 13.9686 4.03145 18 9 18C13.9588 18 18 13.9686 18 9C18 4.03145 13.9588 0 9 0ZM14.9447 4.14859C16.0184 5.45662 16.6627 7.1258 16.6822 8.9317C16.4284 8.8829 13.8904 8.3655 11.333 8.6876C11.2744 8.5607 11.2256 8.4241 11.167 8.2874C11.0108 7.9165 10.8352 7.5358 10.6594 7.1746C13.4902 6.0228 14.7787 4.36334 14.9447 4.14859ZM9 1.32755C10.9523 1.32755 12.7386 2.05966 14.0955 3.26031C13.9588 3.45553 12.7972 5.00759 10.064 6.03253C8.8048 3.71909 7.4089 1.82538 7.1942 1.53254C7.77 1.39588 8.3753 1.32755 9 1.32755ZM5.72996 2.04989C5.93494 2.32321 7.3015 4.22668 8.5803 6.49131C4.98807 7.448 1.81562 7.4284 1.47397 7.4284C1.9718 5.04664 3.58243 3.06507 5.72996 2.04989ZM1.30803 9.0098C1.30803 8.9317 1.30803 8.8536 1.30803 8.7755C1.63991 8.7852 5.36876 8.8341 9.205 7.6822C9.4295 8.1117 9.6345 8.551 9.8297 8.9902C9.7321 9.0195 9.6247 9.0488 9.5271 9.0781C5.56399 10.3568 3.45553 13.8514 3.27983 14.1442C2.05965 12.7874 1.30803 10.9816 1.30803 9.0098ZM9 16.692C7.2234 16.692 5.58352 16.0868 4.28525 15.0716C4.42191 14.7885 5.98371 11.782 10.3178 10.269C10.3373 10.2592 10.3471 10.2592 10.3666 10.2495C11.4501 13.051 11.8894 15.4034 12.0065 16.077C11.0792 16.4772 10.064 16.692 9 16.692ZM13.2852 15.3742C13.2072 14.9056 12.7972 12.6605 11.7917 9.898C14.2028 9.5173 16.3113 10.1421 16.5749 10.23C16.243 12.3677 15.013 14.2126 13.2852 15.3742Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const TeamGrid = () => {
  const teamMembers = [
    {
      image: defaultImage,
      name: "Simbarashe",
      title: "CEO",
      description:
        "John Doe is the visionary leader driving LinkShield's mission to protect businesses from cyber threats.",
    },
    {
      image: defaultImage,
      name: "Blessing",
      title: "Developer",
      description:
        "Jane Smith oversees the development of cutting-edge technologies that keep our clients secure.",
    },
    {
      image: defaultImage,
      name: "Panashe",
      title: "Developer",
      description:
        "Michael Johnson ensures the financial stability and growth of LinkShield's operations.",
    },
    {
      image: defaultImage,
      name: "Full Name",
      title: "Job Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: defaultImage,
      name: "Full Name",
      title: "Job Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: defaultImage,
      name: "Full Name",
      title: "Job Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          image={member.image}
          name={member.name}
          title={member.title}
          description={member.description}
        />
      ))}
    </div>
  );
};

export default TeamGrid;
