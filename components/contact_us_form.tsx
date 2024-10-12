import React from "react";

const ContactUsSectionForm: React.FC = () => {
  return (
    <div className="w-full py-8 lg:py-16 px-4 mx-auto max-w-screen-xl border border-gray-600 rounded-lg flex justify-center">
      {/* Center Container for the Form */}
      <div className="lg:w-1/2 md:w-2/3 sm:w-full flex flex-col items-start lg:ml-16">
        <h2 className="mb-8 text-4xl tracking-tight font-bold text-center text-white dark:text-white">
          Let’s bring your vision to life
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
              className="shadow-sm bg-[#5D7B87] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
              className="shadow-sm bg-[#5D7B87] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
              How can we help you?
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm bg-[#5D7B87] text-white shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 placeholder-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-50 py-3 px-4 text-sm font-medium text-center text-white rounded-xl border border-solid border-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSectionForm;
