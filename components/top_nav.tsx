"use client"; // To ensure client-side rendering

import React, { useState } from "react";
import DropdownMenu, { NavLink } from "./dropdown_link";
import Logo from "./logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"; // Using Heroicons for menu icons
import Link from "next/link";
import MobileLogo from "./mobile_logo";

const TopNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample data representing the links in the navigation menu
  const navLinks: NavLink[] = [
    {
      linkName: "Services",
      items: [
        { title: "Discovery Phase", href: "/services/discovery" },
        { title: "UI/UX Design", href: "/services/ui-ux-design" },
        {
          title: "Web Development",
          href: "/services/web-dev",
          subItems: [
            { title: "Backend Development", href: "/services/backend" },
            { title: "Node.js Development", href: "/services/web-dev/node-js" },
            { title: "PHP", href: "/services/web-dev/php" },
            { title: "Java Development", href: "/services/web-dev/java" },
            { title: ".Net Development", href: "/services/web-dev/dot-net" },
            { title: "Frontend Development", href: "/services/web-dev/python" },
            { title: "Vue.js", href: "/services/web-dev/vue-js" },
            { title: "React Development", href: "/services/web-dev/react-js" },
            { title: "Angular Development", href: "/services/web-dev/angular" },
            { title: "Next.js Development", href: "/services/web-dev/next-js" },
          ],
        },
        { title: "Mobile Development", href: "/services/mobile-dev" },
        {
          title: "Artificial Intelligence",
          href: "/services/artificial-inteligence",
        },
        {
          title: "Regulatory Compliance",
          href: "#",
          subItems: [
            { title: "GDPR", href: "/services/regulatory-compliance/gdpr" },
            { title: "HIPAA", href: "/services/regulatory-compliance/hippa" },
            { title: "PCI DSS", href: "/services/regulatory-compliance/pci" },
          ],
        },
        {
          title: "Security Testing & Audits",
          href: "#",
          subItems: [
            {
              title: "Penetration Testing",
              href: "/services/security-testing-audits/penetration-testing",
            },
            {
              title: "Vulnerability Assessments",
              href: "/services/security-testing-audits/vulnerability-assement",
            },
            {
              title: "Security Audits",
              href: "/services/security-testing-audits/security-audits",
            },
          ],
        },
        {
          title: "Network Security",
          href: "#",
          subItems: [
            {
              title: "Firewall Management",
              href: "/services/network-security/firewall-management",
            },
            {
              title: "Intrusion Detection and Prevention",
              href: "/services/network-security/dection",
            },
          ],
        },
        {
          title: "Endpoint Security",
          href: "#",
          subItems: [
            {
              title: "Real-time Monitoring",
              href: "/services/endpoint-security/realtime-monitoring",
            },
            {
              title: "Threat Intelligence",
              href: "/services/endpoint-security/threat-intelligence",
            },
          ],
        },
      ],
    },
    {
      linkName: "Solutions",
      items: [
        { title: "Cloud Computing", href: "/solutions/cloud-computing" },
        {
          title: "Enterprise Networking",
          href: "/solutions/enterprise-networking",
        },
        {
          title: "Data Center Networking",
          href: "/solutions/data-center-networking",
        },
      ],
    },
    {
      linkName: "Why Choose Us?",
      href: "/why-choose-us",
    },
    {
      linkName: "Resources",
      items: [
        { title: "Blog", href: "/resources/blog" },
        { title: "White Papers", href: "/resources/white-papers" },
        { title: "FAQs", href: "/resources/faqs" },
        { title: "E Books", href: "/resources/e-books" },
      ],
    },
    {
      linkName: "About Us",
      href: "/about",
    },
  ];

  return (
    <div className="w-full bg-[#13252b]">
      {/* Navbar Container */}
      <div className="w-full flex justify-between items-center ">
        {/* Logo Section */}
        <Link href={"/"} className="flex items-center gap-2">
          {/* Show MobileLogo on mobile, Logo on larger screens */}
          <div className="block md:hidden">
            <MobileLogo />
          </div>
          <div className="hidden md:block">
            <Logo />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              // <Bars3Icon className="h-6 w-6 text-white" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="22"
                viewBox="0 0 17 22"
                fill="none"
              >
                <path
                  d="M2 2H14.75"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M2 11H14.75"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M2 20H14.75"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-end items-center gap-4 lg:gap-8">
          {navLinks.map((link, index) =>
            link.items ? (
              <DropdownMenu key={index} link={link} mobile={isMobileMenuOpen} />
            ) : (
              <Link
                key={index}
                href={link.href}
                className="h-[35px] flex items-center gap-2 px-[10px] lg:px-[15px] py-1 rounded-lg text-white hover:bg-[#17404b] cursor-pointer text-[14px] md:text-[15px] lg:text-[16px]"
              >
                <span className="font-normal">{link.linkName}</span>
              </Link>
            )
          )}

          <Link
            href={"/contact"}
            className="flex justify-center items-center gap-2 bg-white px-[20px] lg:px-[25px] py-3 rounded-lg"
          >
            <span className="font-bold text-black text-[14px] lg:text-[16px]">
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#13252b] fixed inset-0 z-40 overflow-y-auto">
          <div className="w-full h-screen p-6">
            {/* Close Menu and Mobile Logo */}
            <div className="flex justify-between items-center mb-6">
              <Link href={"/"} className="flex items-center gap-2">
                <MobileLogo />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Mobile Links Container */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) =>
                link.items ? (
                  <DropdownMenu
                    key={index}
                    link={link}
                    mobile
                    closeMenu={() => setIsMobileMenuOpen(false)} // Pass close function
                  />
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-white text-lg px-4 py-2 rounded-md hover:bg-[#17404b]"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {link.linkName}
                  </Link>
                )
              )}

              {/* Contact Us Button */}
              <Link
                href={"/contact"}
                className="flex justify-center items-center bg-white px-[25px] py-3 rounded-lg mt-6"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on button click
              >
                <span className="font-bold text-black">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
