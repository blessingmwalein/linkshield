import React from "react";
import PageHeader from "@/components/page_header";
import contactImage from "../images/contact_image.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";

const Page: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-1/2 md:w-2/3 sm:w-full flex flex-col items-start lg:ml-16 p-16">
          <h2 className="mb-8 text-4xl tracking-tight font-bold text-center text-white dark:text-white">
            Contact Us
          </h2>

          {/* Form Section */}
          <form action="#" className="space-y-8 w-full">
            {/* Name Input */}
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-normal text-white dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-[#5D7B87] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 placeholder-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Input */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-normal text-white dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-[#5D7B87] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 placeholder-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="blessing@linkshield.tech"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="w-full sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-normal text-white dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-3 w-full text-sm bg-[#5D7B87] text-white shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 placeholder-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-40 py-3 px-4 text-sm font-medium text-center text-white rounded-xl border border-solid border-white"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center mt-4 md:mt-0 md:w-1/2">
          <Image
            src={contactImage} // Dynamic image based on selected tab
            alt="Contact Image"
            className="rounded-lg h-auto max-w-full" // Ensure the image scales well
            style={{ width: "80%", height: "auto" }} // Responsive size
          />
        </div>
      </div>

      <div className="mt-6">
        <FooterNav />
      </div>
    </>
  );
};

export default Page;
