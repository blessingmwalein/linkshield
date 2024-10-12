import React from "react";
import ebook1 from "../../images/ebook1.png";
import ebook2 from "../../images/ebook2.png";
import ebook3 from "../../images/ebook3.png";
import Image from "next/image";

const EbookCards: React.FC = () => {
  const ebooks = [
    {
      img: ebook1,
      title: "Advanced Data Privacy Strategies",
      description:
        "Advanced data privacy strategies tailored for corporates and banks. Learn how to implement robust encryption, access controls, and compliance measures to safeguard sensitive information effectively.",
    },
    {
      img: ebook2,
      title: "Meeting Industry Standards in 2025",
      description:
        "Access our eBook on achieving regulatory compliance in data privacy. Understand how to align your practices with GDPR, HIPAA, and other standards to minimize risks and bad data-security posture.",
    },
    {
      img: ebook3,
      title: "Continuous Security Surveillance",
      description:
        "Download our eBook on real-time threat monitoring solutions. Discover how continuous surveillance and immediate threat detection can protect your data environments.",
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
                  <span className="font-semibold text-sm text-black">5 min read</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-xl text-black">{ebook.title}</span>
                  <span className="font-normal text-base text-black">{ebook.description}</span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="font-normal text-base text-black">Download</span>
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

export default EbookCards;
