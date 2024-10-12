"use client";
import React from "react";

// Importing local images
import article1 from "../app/images/article1.png";
import article2 from "../app/images/article2.png";
import article3 from "../app/images/article3.png";
import article4 from "../app/images/article4.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import ArrowIcon from "./arrow_icon";
import ArrowTextButton from "./arrow_text_button";

// Define the Article interface
interface Article {
  id: number;
  image: StaticImageData; // Change type to StaticImageData for better type safety
  author: string;
  position: string;
  description: string;
}

// ArticleCard component
interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <div className="rounded-lg">
    <Image
      className="w-full h-48 object-cover rounded-t-lg" // Adjust image size using responsive classes
      src={article.image}
      alt={article.author} // Use author name as alt text
      layout="intrinsic" // Ensure intrinsic layout
      width={80} // Set width to 80 (adjustable)
      height={80} // Set height to 80 (adjustable)
    />
    <div className="mt-4">
      <span className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
        {article.author}
      </span>
      <span className="bg-green-200 text-white-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
        {article.position}
      </span>

      <div className="flex flex-row justify-items-center items-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="23"
          viewBox="0 0 37 23"
          fill="none"
        >
          <circle cx="10.6211" cy="11.5254" r="10.6211" fill="#D9D9D9" />
          <circle cx="26.0703" cy="11.5254" r="10.6211" fill="#616161" />
        </svg>
        <p className="text-white ml-3">{article.author}</p>
      </div>
      <p className="mt-2 text-white">{article.description}</p>

      <ArrowTextButton
        text="5 min Read"
        onClick={() => console.log("Learn More clicked")}
        icon={<ArrowIcon />}
      />
    </div>
  </div>
);

// ArticlesSection component
const ArticlesSection: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      image: article1,
      author: "John Doe",
      position: "Web Designer",
      description:
        "Learn how to create modern web designs in this comprehensive tutorial.",
    },
    {
      id: 2,
      image: article2,
      author: "Jane Smith",
      position: "Email Marketer",
      description:
        "Best practices for crafting effective email marketing campaigns.",
    },
    {
      id: 3,
      image: article3,
      author: "Alice Brown",
      position: "Graphic Designer",
      description: "How to master Adobe Illustrator in easy steps.",
    },
    {
      id: 4,
      image: article4,
      author: "Michael Lee",
      position: "SEO Expert",
      description: "Advanced techniques for SEO to boost website rankings.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center mb-8 lg:mb-0 lg:mr-4">
      <h2 className="text-2xl font-bold text-[#baffd6]">Helpful articles</h2>
      <p className="mt-6 text-lg text-[#b9d6e0] w-full lg:w-3/4">
        Get even better at web design and email marketing with articles, guides,
        showcases, and tutorials.
      </p>
      {/* Button Section */}
      <div className="mt-6 flex justify-between items-center">
        {/* Next and Previous buttons */}
       
        {/* Browse Articles button */}
        <div className="w-60 flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-solid border-white cursor-pointer">
          <span className="font-normal text-base text-center text-white">
            Browse articles
          </span>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
            Prev
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300">
            Next
          </button>
        </div>

      </div>

      {/* Articles in a row */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="w-full">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
