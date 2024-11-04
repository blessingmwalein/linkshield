import React from "react";
import PageHeader from "@/components/page_header";
import pageheaderdefault from "../../images/pageheaderdefault.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import BlogPost from "./post_card";
import userplace from "../../images/userplace.png"; // Corrected path for default image
import future from "../../images/future.png"; // Corrected path for default image
import men from "../../images/men.png"; // Corrected path for default image
import BlogCards from "./blog-cards";
import costeffectiveimg from "../../images/costeffective.png";
import Blogs from "./blogs";

const Page: React.FC = () => {
  return (
    <>
      <div className="pb-10">
        <PageHeader
          title="Blog"
          description="Stay informed with the latest insights and updates on cybersecurity, data protection, and emerging tech trends. Explore our expert analysis, real-world case studies, and practical advice to keep your business ahead of the curve and protected in today’s dynamic digital landscape."
          image={pageheaderdefault}
        />
      </div>

      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <div className="w-full flex flex-col items-center gap-4 px-4">
          {/* Blog Title */}
          <span className="font-semibold text-[16px] leading-none text-center text-black">
            Blog
          </span>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Main Heading */}
            <span className="font-bold text-3xl lg:text-[48px] leading-tight text-center text-black">
              Knowledge is Power
            </span>

            {/* Subheading / Description */}
            <span className="font-normal w-1/2 text-base lg:text-[18px] leading-relaxed text-center text-black">
              Benefit from the wealth of knowledge provided by our experts. We
              update our blog regularly and also have a newsletter where you can
              sign up below.
            </span>
          </div>
        </div>

        <div className="flex gap-8 flex-wrap justify-center p-4">
          <BlogPost
            imageSrc={future}
            authorImageSrc={userplace}
            category="LLMs"
            title="The Future of LLMs in Business"
            description="Explore how Large Language Models are transforming business operations and enhancing decision-making processes."
            authorName="Jane Doe"
            date="August 29, 2024"
            readTime="5 min read"
          />
          <BlogPost
            imageSrc={men} // Change the image for the second post
            authorImageSrc={userplace} // Change the author image for the second post
            category="Development"
            title="Leveraging MERN Stack for Scalable Applications"
            description="A deep dive into how the MERN stack can be used to build robust, scalable web applications and streamline development."
            authorName="John Smith"
            date="August 28, 2024"
            readTime="5 min read"
          />
          <BlogPost
            imageSrc={men} // Change the image for the second post
            authorImageSrc={userplace} // Change the author image for the second post
            category="Development"
            title="Leveraging MERN Stack for Scalable Applications"
            description="A deep dive into how the MERN stack can be used to build robust, scalable web applications and streamline development."
            authorName="John Smith"
            date="August 28, 2024"
            readTime="5 min read"
          />
        </div>

        {/* Center the View All button */}
        <div className="flex justify-center mt-6">
          <div className="flex justify-center items-center gap-2 px-6 py-3 outline outline-1 outline-black">
            <span className="font-normal text-[16px] text-black">View all</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-4 px-4 mt-10 ">
          {/* Blog Title */}
          <span className="font-semibold text-[16px] leading-none text-center text-black">
            Blog
          </span>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Main Heading */}
            <span className="font-bold text-3xl lg:text-[48px] leading-tight text-center text-black">
              World
            </span>

            {/* Subheading / Description */}
            <span className="font-normal w-1/2 text-base lg:text-[18px] leading-relaxed text-center text-black">
              We explore current events in the industry and dissect them for
              your benefit.
            </span>
          </div>
        </div>

        <BlogCards />

        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Left Section */}
            <div className="flex flex-col gap-6 grow">
              {/* Subheading */}
              <div className="flex flex-col gap-4">
                <span className="font-semibold text-[16px] text-center text-black">
                  Business Cost Savings
                </span>
                <div className="flex flex-col gap-4">
                  <span className="font-bold text-[24px] md:text-[48px] text-black">
                    Cost-Efficient Strategies for Enterprise IT
                  </span>
                  <span className="font-normal text-[14px] md:text-[18px] text-black">
                    Learn how businesses are implementing cost-saving measures
                    in IT infrastructure to enhance their bottom line.
                  </span>
                </div>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex justify-center items-center gap-2">
                  <span className="font-normal text-[16px] text-black">
                    5 Min Read
                  </span>
                  <div className="w-6 h-6">
                    {/* Replace this with your actual SVG */}
                    <svg className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={costeffectiveimg} // Dynamic image based on selected tab
                alt="Hero Image"
                width={500}
                height={500}
                className="rounded-lg" // Add this class for curved corners
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <div className="flex flex-col items-start gap-6 self-stretch ">
          <span className="font-bold text-4xl text-black">
            Networking and Cybersecurity
          </span>
          <span className="font-normal text-lg text-black max-w-prose">
            They go hand in hand.
          </span>
        </div>
        <div className="mt-5 pb-10">
          <Blogs />
        </div>
      </div>

      <div className="mt-6">
  <div className="w-full max-w-[768px] flex flex-col justify-start items-start gap-4 mx-auto p-4">
    <div className="flex flex-col gap-6 self-stretch items-start">
      <span className="font-bold text-[48px] text-white">
        Sign up for our newsletter
      </span>
      <span className="font-normal text-[18px] text-white">
        Stay up to date on the industry and learn new things.
      </span>
    </div>
    <div className="flex flex-col gap-4 pt-4">
      <div className="flex gap-4 self-stretch">
        {/* Email Input */}
        <div className="flex items-center gap-2 grow bg-white p-3 border border-black">
          <span className="font-normal text-[16px] text-[#666666]">
            Enter your email
          </span>
        </div>
        {/* Sign Up Button */}
        <div className="flex justify-center items-center gap-2 bg-black px-6 py-3 border border-black">
          <span className="font-normal text-[16px] text-white">
            Sign Up
          </span>
        </div>
      </div>
      {/* Terms and Conditions */}
      <span className="font-normal text-[12px] text-white">
        By clicking Sign Up you're confirming that you agree with our
        Terms and Conditions.
      </span>
    </div>
  </div>
  <FooterNav />
</div>

    </>
  );
};

export default Page;
