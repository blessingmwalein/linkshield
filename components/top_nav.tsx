"use client"; // To ensure client-side rendering

import React, { useState } from "react";
import DropdownMenu, { NavLink } from "./dropdown_link";
import Logo from "./logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"; // Using Heroicons for menu icons
import Link from "next/link";

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
            { title: "Web Design", href: "/services/web-dev" },
            { title: "Graphic Design", href: "/services/web-dev" },
          ],
        },
        { title: "Mobile Development", href: "/services/mobile-dev" },
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
      <div className="w-full flex justify-between items-center p-4 md:px-8 lg:px-16">
        {/* Logo Section */}
        <Link href={"/"} className="flex items-center gap-2">
          <Logo />
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
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-end items-center gap-8">
          {navLinks.map((link, index) =>
            link.items ? (
              <DropdownMenu key={index} link={link} />
            ) : (
              <Link
                key={index}
                href={link.href}
                className="h-[35px] flex items-center gap-2 px-[15px] py-1 rounded-lg text-white hover:bg-[#17404b] cursor-pointer"
              >
                <span className="font-normal text-[14px] md:text-[16px]">
                  {link.linkName}
                </span>
              </Link>
            )
          )}
          <Link href={"/"} className="flex items-center gap-2">
            <Logo />
          </Link>

          <Link
            href={"/contact"}
            className="flex justify-center items-center gap-2 bg-white px-[25px] py-3 rounded-lg"
          >
            <span className="font-bold text-[15px] text-black">Contact Us</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#13252b] fixed inset-0 z-40 overflow-y-auto">
          <div className="w-full h-screen p-6">
            {/* Close Menu and Log In */}
            <div className="flex justify-between items-center mb-6">
              <Link href={"/"} className="flex items-center gap-2">
                <Logo />
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
                  <DropdownMenu key={index} link={link} mobile />
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-white text-lg px-4 py-2 rounded-md hover:bg-[#17404b]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.linkName}
                  </Link>
                )
              )}

              {/* Contact Us Button */}
              <Link
                href={"/contact"}
                className="flex justify-center items-center bg-white px-[25px] py-3 rounded-lg mt-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-bold text-[15px] text-black">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
