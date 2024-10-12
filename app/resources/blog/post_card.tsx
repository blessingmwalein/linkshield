import React from "react";
import Image from "next/image"; // Use this if you're in a Next.js project

interface BlogPostProps {
  imageSrc: any; // URL of the main blog post image
  authorImageSrc: any; // URL of the author's image
  category: string;
  title: string;
  description: string;
  authorName: string;
  date: string;
  readTime: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  imageSrc,
  authorImageSrc,
  category,
  title,
  description,
  authorName,
  date,
  readTime,
}) => {
  return (
    <div className="flex flex-col gap-4 grow w-full max-w-xs border border-gray-200 rounded-lg overflow-hidden shadow-md">
      {/* Main Image */}
      <Image
        src={imageSrc}
        alt={title}
        className="h-auto w-full object-cover" // Responsive image
        width={500} // You can keep this for aspect ratio; it will scale with the container
        height={300} // Similarly, this maintains aspect ratio
      />
      <div className="flex flex-col gap-2 p-4">
        <span className="font-semibold text-sm text-black">
          {category}
        </span>
        <span className="font-bold text-lg text-black">
          {title}
        </span>
        <span className="font-normal text-base text-black">
          {description}
        </span>
      </div>
      <div className="flex items-center gap-4 p-4">
        <Image
          src={authorImageSrc}
          alt={authorName}
          className="w-12 h-12 object-cover rounded-full"
          width={48}
          height={48}
        />
        <div className="flex flex-col grow">
          <span className="font-semibold text-sm text-black">
            {authorName}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-normal text-sm text-black">
              {date}
            </span>
            <span className="font-normal text-lg text-black">•</span>
            <span className="font-normal text-sm text-black">
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
