import Link from "next/link";
import React from "react";

const FooterNav = () => {
  return (
    <footer className="bg-[#13252b] text-white py-16 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-16">
        {/* Left Section */}
        <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row lg:w-2/3">
          {/* About Us Section */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-lg font-semibold">

              <Link href={"/about"}>About Us</Link>
            </h2>
            <ul className="space-y-2">
              <li className="text-sm hover:underline">Services</li>
              <li className="text-sm hover:underline">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
              <li className="text-sm hover:underline">
                <Link href={"/resources/faqs"}>FAQs</Link>
              </li>
              <li className="text-sm hover:underline">
                <Link href={"/resources/blog"}>Blog</Link>
              </li>
              <li className="text-sm hover:underline">Testimonials</li>
            </ul>
          </div>

          {/* Partners Section */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-lg font-semibold">Partners</h2>
            <ul className="space-y-2">
              <li className="text-sm hover:underline">Support</li>
              <li className="text-sm hover:underline">Privacy Policy</li>
              <li className="text-sm hover:underline">Terms of Service</li>
              <li className="text-sm hover:underline">Cookies Settings</li>
              <li className="text-sm hover:underline">Subscribe</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-lg font-semibold">Newsletter</h2>
            <ul className="space-y-2">
              <li className="text-sm hover:underline">Updates</li>
              <li className="text-sm hover:underline">Email</li>
              <li className="text-sm hover:underline">Social Media</li>
              <li className="text-sm hover:underline">Community</li>
              <li className="text-sm hover:underline">Events</li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="lg:w-1/3">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Subscribe</h2>
            <p className="text-sm">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3  bg-[#e6e6e6] text-black outline-none w-full"
              />
              <button className="px-4 py-3  text-white ouline-white border border-white">
                Subscribe
              </button>
            </div>
            <p className="text-xs">
              By subscribing, you agree to our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-12 flex flex-col lg:flex-row justify-between items-center border-t border-gray-600 pt-6">
        <div className="flex items-center gap-6">
          <span className="text-sm">
            © 2024 LinkShield. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className="text-sm underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm underline">
              Cookies Settings
            </a>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex gap-3 mt-4 lg:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 12.3033C22 6.7467 17.5229 2.24219 12 2.24219C6.47715 2.24219 2 6.7467 2 12.3033C2 17.325 5.65684 21.4874 10.4375 22.2422V15.2116H7.89844V12.3033H10.4375V10.0867C10.4375 7.56515 11.9305 6.17231 14.2146 6.17231C15.3088 6.17231 16.4531 6.36882 16.4531 6.36882V8.8448H15.1922C13.95 8.8448 13.5625 9.62041 13.5625 10.4161V12.3033H16.3359L15.8926 15.2116H13.5625V22.2422C18.3432 21.4874 22 17.3252 22 12.3033Z"
              fill="white"
            />
          </svg>
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
              d="M16 3.24219H8C5.23858 3.24219 3 5.48077 3 8.24219V16.2422C3 19.0036 5.23858 21.2422 8 21.2422H16C18.7614 21.2422 21 19.0036 21 16.2422V8.24219C21 5.48077 18.7614 3.24219 16 3.24219ZM19.25 16.2422C19.2445 18.0348 17.7926 19.4867 16 19.4922H8C6.20735 19.4867 4.75549 18.0348 4.75 16.2422V8.24219C4.75549 6.44954 6.20735 4.99768 8 4.99219H16C17.7926 4.99768 19.2445 6.44954 19.25 8.24219V16.2422ZM16.75 8.49219C17.3023 8.49219 17.75 8.04447 17.75 7.49219C17.75 6.93991 17.3023 6.49219 16.75 6.49219C16.1977 6.49219 15.75 6.93991 15.75 7.49219C15.75 8.04447 16.1977 8.49219 16.75 8.49219ZM12 7.74219C9.51472 7.74219 7.5 9.75691 7.5 12.2422C7.5 14.7275 9.51472 16.7422 12 16.7422C14.4853 16.7422 16.5 14.7275 16.5 12.2422C16.5027 11.0479 16.0294 9.90176 15.1849 9.05727C14.3404 8.21278 13.1943 7.73953 12 7.74219ZM9.25 12.2422C9.25 13.761 10.4812 14.9922 12 14.9922C13.5188 14.9922 14.75 13.761 14.75 12.2422C14.75 10.7234 13.5188 9.49219 12 9.49219C10.4812 9.49219 9.25 10.7234 9.25 12.2422Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.5914 7.20301C21.4775 6.78041 21.2549 6.39501 20.9457 6.08518C20.6366 5.77534 20.2517 5.55187 19.8294 5.43701C18.2634 5.00701 11.9984 5.00001 11.9984 5.00001C11.9984 5.00001 5.73438 4.99301 4.16738 5.40401C3.7453 5.52415 3.3612 5.75078 3.05194 6.06214C2.74269 6.3735 2.51866 6.75913 2.40138 7.18201C1.98838 8.74801 1.98438 11.996 1.98438 11.996C1.98438 11.996 1.98038 15.26 2.39038 16.81C2.62038 17.667 3.29538 18.344 4.15338 18.575C5.73538 19.005 11.9834 19.012 11.9834 19.012C11.9834 19.012 18.2484 19.019 19.8144 18.609C20.2369 18.4943 20.6221 18.2714 20.932 17.9622C21.2419 17.653 21.4658 17.2682 21.5814 16.846C21.9954 15.281 21.9984 12.034 21.9984 12.034C21.9984 12.034 22.0184 8.76901 21.5914 7.20301ZM9.99438 15.005L9.99938 9.00501L15.2064 12.01L9.99438 15.005Z"
              fill="white"
            />
          </svg>
          <svg className="w-5 h-5 text-white hover:text-blue-500" />
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
