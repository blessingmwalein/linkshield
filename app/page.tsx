import TopNavbar from "@/components/top_nav";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import heroPic from "./images/hero.png"; // Check if this path is correct
import contact1Pic from "../app/images/contact1.png"; // Check if this path is correct
import contact2Pic from "../app/images/contact2.png"; // Check if this path is correct
import UserCard from "@/components/user_card";
import { Carousel } from "flowbite-react";
import GreyDivider from "@/components/grey_divider";
import TeamSlider from "@/components/home/team_slider";
import HomeTab from "@/components/home/home_tab";
import OurWorkCards from "@/components/home/our_work_cards";
import CircledNumber from "@/components/home/circled_number";
import CybersecuritySolutions from "@/components/home/cyber_solutions";
import SolutionsTab from "@/components/home/tailored_solution_tab";
import ContactUsSectionForm from "@/components/contact_us_form";
import FooterNav from "@/components/footer";
import ArticlesSection from "@/components/articles_section"; // Corrected typo
import RootLayout from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <HomeTab />

      {/* Divider */}
      <GreyDivider />

      {/* Team Slider Section */}
      <div className="mt-12 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <div className="relative h-auto">
          <TeamSlider />
        </div>
      </div>

      {/* Our Work Section */}
      <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <OurWorkCards />
      </div>

      {/* Cybersecurity Solutions Section */}
      <div className="mt-16">
        <CybersecuritySolutions />
      </div>

      {/* Contact Section - Tell Us What You Need */}
      <div className="flex flex-col lg:flex-row mt-16 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        {/* Image on Left */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-4">
          <Image
            src={contact1Pic}
            alt="Contact Image 1"
            width={400}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Text on Right */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#baffd6]">
            Tell us what you need
          </h2>
          <p className="mt-6 text-lg text-[#b9d6e0] w-full lg:w-3/4">
            LinkShield offers a full spectrum of cybersecurity services designed
            to protect your business from evolving threats.
          </p>
          <Link
            href="/contact"
            className="w-40 mt-6 flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-solid border-white cursor-pointer"
          >
            <span className="font-normal text-lg text-center text-white">
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      {/* Contact Section - We'll Take It From There */}
      <div className="flex flex-col lg:flex-row mt-16 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        {/* Text on Left */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0 lg:mr-4">
          <h2 className="text-4xl font-bold text-[#baffd6]">
            We’ll take it from there
          </h2>
          <p className="mt-6 text-lg text-[#b9d6e0] w-full lg:w-3/4">
            Leave the rest to us. From planning to execution, we’ll handle
            everything to ensure you get the best solutions.
          </p>
          <Link
            href="/contact"
            className="w-40 mt-6 flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-solid border-white cursor-pointer"
          >
            <span className="font-normal text-lg text-center text-white">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Image on Right */}
        <div className="w-full lg:w-1/2">
          <Image
            src={contact2Pic}
            alt="Contact Image 2"
            width={400}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Contact Us Form Section */}
      <div className="mt-20 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <ContactUsSectionForm />
      </div>

      {/* Articles Section */}
      <div className="mt-20 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <ArticlesSection />
      </div>

      {/* Footer Navigation */}
      <div className="mt-20 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
        <FooterNav />
      </div>
    </>
  );
}
