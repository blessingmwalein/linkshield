import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import ArrowIcon from "../arrow_icon";
import Link from "next/link";

const CyberSecurityCard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full rounded-2xl shadow-lg bg-white justify-center">
      {/* Left Side: Vertical Tabs */}
      <div className="flex flex-col p-6 md:w-1/2 rounded-tl-2xl rounded-bl-2xl">
        <h2 className="text-2xl font-bold text-gray-800">Cybersecurity</h2>
        <p className="mt-6 text-lg text-gray-600 w-3/4">
          LinkShield offers a full spectrum of cybersecurity services designed
          to protect your business from evolving threats. From penetration
          testing to real-time monitoring, we ensure your digital assets are
          secure.
        </p>
        {/* Get a quote button */}
        <Link
          href="/contact"
          className="w-full md:w-1/3 flex justify-center items-center gap-2 bg-[#284C59] px-6 py-3 rounded-lg mt-6"
        >
          <span className="font-bold text-[15px] text-white">Get a quote</span>
        </Link>
      </div>

      {/* Right Side: Panel Content with Grid Layout */}
      <div className="p-8 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-tr-2xl rounded-br-2xl">
        {/* Cybersecurity Items */}
        {[
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="46"
                viewBox="0 0 53 46"
                fill="none"
              >
                <path
                  d="M50.5 23.5C58 40.5 37.7025 46 25 46C12.2975 46 0 35.7025 0 23C0 10.2975 12.2975 0 25 0C37.7025 0 43 6.5 50.5 23.5Z"
                  fill="#32525E"
                />
                <path
                  d="M24.329 32.601C24.144 32.853 23.859 32.986 23.57 32.986C23.376 32.986 23.181 32.926 23.012 32.803C22.593 32.494 22.503 31.907 22.81 31.488L23.887 30.032C24.195 29.615 24.783 29.524 25.202 29.833C25.623 30.139 25.713 30.728 25.403 31.146L24.329 32.601ZM23.504 29.762C23.812 29.344 23.721 28.755 23.303 28.446C22.882 28.138 22.295 28.23 21.986 28.649L20.913 30.098C20.604 30.517 20.696 31.107 21.115 31.415C21.532 31.722 22.122 31.633 22.43 31.213L23.504 29.762ZM21.604 28.374C21.913 27.957 21.821 27.367 21.401 27.059C20.983 26.752 20.394 26.843 20.087 27.261L19.004 28.722C18.696 29.141 18.795 29.717 19.213 30.026C19.634 30.334 20.213 30.255 20.521 29.836L21.604 28.374ZM19.706 26.988C20.014 26.569 19.925 25.981 19.503 25.673C19.084 25.364 18.496 25.455 18.188 25.874L17.113 27.325C16.805 27.743 16.896 28.333 17.315 28.64C17.734 28.947 18.323 28.858 18.63 28.438L19.706 26.988ZM37 18.55C37 18.55 35.445 18.851 34.333 19.029C32.187 19.373 30.189 18.613 27.972 17.467C27.527 17.238 27.014 17 26.514 17C26.053 17 25.601 17.209 25.222 17.639C23.856 19.186 23.062 20.554 21.437 21.503C20.636 21.971 21.577 23.437 23.297 22.834C24.175 22.526 25.033 21.939 26.003 21.157C26.765 20.542 27.223 20.633 27.882 21.292C29.12 22.53 33.286 26.643 33.286 26.643C34.603 25.831 35.708 25.331 36.999 24.851L37 18.55ZM26.476 31.212C26.318 31.671 25.858 32.213 25.523 32.667C25.82 32.903 26.13 33.001 26.404 33.001C27.121 33.001 27.592 32.33 26.946 31.683L26.476 31.212ZM32.982 27.749C31.912 26.694 28.25 23.082 27.179 22.036C27.014 21.875 26.758 21.856 26.571 21.992C25.932 22.456 24.489 23.477 23.627 23.78C21.942 24.37 20.512 23.558 20.205 22.421C20.013 21.71 20.298 21.012 20.932 20.642C21.94 20.053 22.589 19.267 23.388 18.279C22.693 17.74 22.038 17.547 21.397 17.547C19.691 17.547 18.08 18.913 16.061 18.778C14.688 18.687 13 18.374 13 18.374V24.707C14.476 25.028 15.455 25.171 16.92 25.906L17.382 25.282C17.746 24.786 18.331 24.49 18.946 24.49C19.816 24.49 20.568 25.068 20.807 25.878C21.758 25.878 22.474 26.48 22.705 27.265C23.531 27.234 24.346 27.784 24.602 28.65C25.773 28.65 26.619 29.57 26.583 30.657L27.751 31.825C28.118 32.193 28.714 32.192 29.082 31.825C29.45 31.457 29.45 30.861 29.082 30.493L27.396 28.806C27.176 28.586 27.509 28.253 27.729 28.473L29.761 30.506C30.129 30.874 30.724 30.874 31.092 30.506C31.46 30.138 31.46 29.543 31.092 29.175L28.591 26.673C28.37 26.455 28.704 26.12 28.924 26.34L31.624 29.041C31.992 29.409 32.587 29.409 32.955 29.041C33.313 28.684 33.316 28.118 32.982 27.749Z"
                  fill="white"
                />
              </svg>
            ),
            title: "Compliance",
            description:
              "Stay aligned with industry standards and regulations with LinkShield's continuous compliance monitoring.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="49"
                viewBox="0 0 46 49"
                fill="none"
              >
                <path
                  d="M46 23C46 35.7025 32.2025 48.5 19.5 48.5C6.79745 48.5 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C29.5 0 46 10.2975 46 23Z"
                  fill="#32525E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31 36H11V14H14C15.229 14 16.18 12.916 17 12H25C25.82 12.916 26.771 14 28 14H31V23H29V16H25L23 18H19.102L17 16H13V34H29V29H31V36ZM21 32H15V31H21V32ZM21 30H15V29H21V30ZM27 25H35V27H27V30L22 26L27 22V25ZM21 28H15V27H21V28ZM21 26H15V25H21V26ZM21 24H15V23H21V24ZM21 22H15V21H21V22ZM20 15C20 15.552 20.448 16 21 16C21.552 16 22 15.552 22 15C22 14.448 21.552 14 21 14C20.448 14 20 14.448 20 15Z"
                  fill="white"
                />
              </svg>
            ),
            title: "Testing & Audits",
            description:
              "Identify vulnerabilities with thorough testing and audits.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="46"
                viewBox="0 0 48 46"
                fill="none"
              >
                <path
                  d="M48 15.5C48 28.2025 39.7025 46 27 46C14.2975 46 0.5 28.2025 0.5 15.5C0.5 2.79745 14.2975 0 27 0C39.7025 0 48 2.79745 48 15.5Z"
                  fill="#32525E"
                />
                <path
                  d="M25 10C20.994 10 17.733 13.141 17.521 17.092C14.951 17.555 13 19.798 13 22.5C13 25.537 15.463 28 18.5 28H31.5C34.537 28 37 25.537 37 22.5C37 19.798 35.049 17.555 32.479 17.092C32.267 13.141 29.006 10 25 10ZM21 34V32H24V30H26V32H29V34H21ZM30 32V34H33V32H30ZM20 32H17V34H20V32Z"
                  fill="white"
                />
              </svg>
            ),
            title: "Network Security",
            description:
              "Safeguarding you against unauthorized access and threats.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="49"
                viewBox="0 0 50 49"
                fill="none"
              >
                <path
                  d="M50 23C50 35.7025 39.7025 48.5 27 48.5C14.2975 48.5 0 40.4051 0 27.7025C0 15 14.2975 0 27 0C39.7025 0 50 10.2975 50 23Z"
                  fill="#32525E"
                />
                <g clip-path="url(#clip0_87_7132)">
                  <path
                    d="M18 19C20.761 19 23 21.239 23 24C23 26.761 20.761 29 18 29C15.238 29 13 26.761 13 24C13 21.239 15.238 19 18 19ZM33 15C33 13.343 31.656 12 30 12C28.343 12 27 13.343 27 15C27 15.312 27.061 15.606 27.148 15.888L22.939 19.045C23.412 19.516 23.816 20.054 24.14 20.644L28.337 17.496C28.814 17.813 29.385 18 30 18C31.656 18 33 16.657 33 15ZM27.148 32.112C27.061 32.394 27 32.688 27 33C27 34.657 28.343 36 30 36C31.656 36 33 34.657 33 33C33 31.343 31.656 30 30 30C29.385 30 28.814 30.187 28.338 30.504L24.141 27.356C23.817 27.946 23.412 28.484 22.94 28.955L27.148 32.112ZM34 27.062C35.656 27.062 37 25.719 37 24.062C37 22.405 35.656 21.062 34 21.062C32.719 21.062 31.633 21.869 31.203 23H24.92C24.967 23.328 25 23.66 25 24C25 24.34 24.967 24.672 24.92 25H31.164C31.559 26.195 32.672 27.062 34 27.062Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_87_7132">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(13 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ),
            title: "Endpoint Security",
            description:
              "Secure all devices in your network with next-gen endpoint protection, defending against cyber threats.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
          >
            <div className="mb-2">{item.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberSecurityCard;
