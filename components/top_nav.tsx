"use client"; // To ensure client-side rendering

import React, { useState } from "react";
import DropdownMenu, { NavLink } from "./dropdown_link";
import Logo from "./logo";
import { Bars3Icon, ChevronLeftIcon, XMarkIcon } from "@heroicons/react/20/solid"; // Using Heroicons for menu icons
import Link from "next/link";
import MobileLogo from "./mobile_logo";

const TopNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuStack, setMenuStack] = useState<NavLink[]>([]); //
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
            { title: "Python", href: "/services/web-dev/python" },
            { title: "Nest.js Development", href: "/services/web-dev/nest-js" },
            {
              title: "Frontend Development",
              href: "/services/web-dev/frontend",
            },
            { title: "Vue.js", href: "/services/web-dev/vue-js" },
            { title: "React Development", href: "/services/web-dev/react-js" },
            { title: "Angular Development", href: "/services/web-dev/angular" },
            { title: "Next.js Development", href: "/services/web-dev/next-js" },
            {
              title: "Javascript Development",
              href: "/services/web-dev/javascript",
            },
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
              href: "/services/network-security/detection",
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

  const currentMenu = menuStack.length > 0 ? menuStack[menuStack.length - 1] : { linkName: "Menu", items: navLinks };

  const navigateToSubMenu = (menu: NavLink) => {
    if (menu.items) {
      setMenuStack([...menuStack, menu]);
    }
  };

  const navigateBack = () => {
    setMenuStack(menuStack.slice(0, -1));
  };

  return (
    <div className="w-full bg-[#13252b] sticky top-0 z-50">
      <div className="w-full flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="block md:hidden">
            <MobileLogo />
          </div>
          <div className="hidden md:block">
            <Logo />
          </div>
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-white" />
            )}
          </button>
        </div>

        <div className="hidden md:flex justify-end items-center gap-6">
          {navLinks.map((link, index) =>
            link.items ? (
              <DropdownMenu key={index} link={link} mobile={isMobileMenuOpen} />
            ) : (
              <Link
                key={index}
                href={link.href}
                className="h-[35px] flex items-center px-4 py-1 rounded-lg text-white bg-transparent hover:bg-[#344147] transition-all duration-300"
              >
                {link.linkName}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="flex justify-center items-center bg-white text-black font-bold px-6 py-2 rounded-lg transition-all duration-300 hover:bg-[#344147] hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-4 top-5 pt-5 overflow-y-auto bg-[#243339]">
          <div className="w-full h-screen">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                {menuStack.length > 0 ? (
                  <button
                    onClick={navigateBack}
                    className="flex items-center text-[#FFC01A] text-xl font-semibold gap-2"
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                    <span className="text-xl">Back</span>
                  </button>
                ) : (
                  <h2 className="text-[#FFC01A] text-xl font-semibold">Menu</h2>
                )}
              </div>

              <h2 className="text-white text-xl px-4 font-semibold ml-auto text-[#FFC01A]">
                {menuStack.length > 0 ? currentMenu.linkName : ""}
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {currentMenu.items?.map((item, index) => (
                <div
                  onClick={() => navigateToSubMenu(item)}
                  key={index}
                  className="flex items-center justify-between rounded-lg py-2 bg-[#344147] hover:bg-[#344147]"
                >
                  <Link
                    href={item.href || "#"}
                    className="block text-white text-xl px-4 py-2  transition-all duration-300"
                    onClick={() => {
                      if (!item.items) setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.title || item.linkName}
                  </Link>
                  {item.items && (
                    <button
                      onClick={() => navigateToSubMenu(item)}
                      className="text-white"
                    >
                      <ChevronLeftIcon className="h-6 w-6 rotate-180" />
                    </button>
                  )}
                </div>
              ))}

              {menuStack.length === 0 && (
                <Link
                  href="/contact"
                  className="w-full flex justify-center items-center bg-white text-black font-bold px-6 py-3 rounded-lg mt-6 hover:bg-[#344147] transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;