import React from "react";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import Image from "next/image";

const BlogCards: React.FC = () => {
  const ebooks = [
    {
      img: blog1,
      title:
        "T-Mobile Data Breach: Lessons Learned and LinkShield’s Protection",
      description:
        "T-Mobile experienced a significant data breach exposing millions of customer records.",
    },
    {
      img: blog2,
      title: "MOVEit Transfer Exploit: How LinkShield Prevents Similar Attacks",
      description:
        "Recent vulnerabilities in MOVEit Transfer led to a massive data breach affecting numerous organizations.",
    },
    {
      img: blog3,
      title:
        "CrowdStrike Outage: How LinkShield’s Solutions Offer Robust Alternatives",
      description:
        "In August 2024, CrowdStrike experienced a major outage impacting their cybersecurity services for numerous clients. ",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16 self-stretch px-4">
      <div className="flex flex-wrap justify-center gap-8">
        {ebooks.map((ebook, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border justify-between border-black w-full max-w-xs" // Set max-width for cards
          >
            <Image
              className="rounded-t-lg"
              src={ebook.img}
              alt={`Cover of ${ebook.title}`}
              width={600} // Set the desired width
              height={300} // Set the desired height
              layout="responsive" // Use responsive layout
            />
            <div className="flex flex-col gap-6 p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 px-2 py-1 rounded">
                    <span className="font-semibold text-sm text-black">
                      Cybersecurity
                    </span>
                  </div>
                  <span className="font-semibold text-sm text-black">
                    5 min read
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-xl text-black">
                    {ebook.title}
                  </span>
                  <span className="font-normal text-base text-black">
                    {ebook.description}
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="font-normal text-base text-black">
                  Download
                </span>
                <div className="w-6 h-6">
                  <svg
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 0L8.59 1.41 14.17 7H2v2h12.17l-5.58 5.59L10 20l10-10L10 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2 px-6 py-3 border border-black">
        <span className="font-normal text-base text-black">View all</span>
      </div>
    </div>
  );
};

export default BlogCards;
