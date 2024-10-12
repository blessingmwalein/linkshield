import React from "react";
import ebook1 from "../../images/ebook4.png";
import ebook2 from "../../images/ebook5.png";
import ebook3 from "../../images/ebook6.png";
import Image from "next/image";

const EbookCards2: React.FC = () => {
  const ebooks = [
    {
      img: ebook1,
      title: "Integrating Development and Operations (Dev Ops)",
      description:
        "DevOps Best Practices. Understand how to integrate development and operations for faster delivery, improved quality, and streamlined workflows in your software development lifecycle.",
    },
    {
      img: ebook2,
      title: "Agile Software Development for Corporates",
      description:
        "Learn how to adopt agile methodologies to enhance project efficiency, improve team collaboration, and deliver high-quality software solutions.",
    },
    {
      img: ebook3,
      title: "Building Scalable and Resilient Systems",
      description:
        "Explore best practices for designing scalable, resilient systems that can adapt to evolving business needs and technological advancements.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16 self-stretch px-4">
      <div className="flex flex-wrap justify-center gap-8">
        {ebooks.map((ebook, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg border border-black w-full max-w-xs" // Set max-width for cards
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
                  <span className="font-semibold text-sm text-black">5 min read</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-xl text-black">{ebook.title}</span>
                  <span className="font-normal text-base text-black">{ebook.description}</span>
                </div>
              </div>
              <div className="flex justify-start items-start gap-2">
                <span className="font-normal text-base text-black">Download</span>
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.71087 16.9492L15.4179 11.2422L9.71087 5.53516L8.29688 6.94916L12.5899 11.2422L8.29688 15.5352L9.71087 16.9492Z"
                      fill="black"
                    />
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

export default EbookCards2;
