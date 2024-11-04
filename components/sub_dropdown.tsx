import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface SubItem {
  title: string;
  href: string;
}

interface SubDropdownProps {
  subItems: SubItem[];
  main: any;
}

const SubDropdown: React.FC<SubDropdownProps> = ({ subItems, main }) => {
  return (
    <div className="absolute top-0 left-full ml-2 z-10 hidden group-hover:block w-[263px] origin-top-right rounded-xl bg-[#233339] shadow-lg ring-1 ring-black ring-opacity-5 outline outline-1 outline-[#38545e]">
      <div className="flex flex-col px-2.5 py-3">
        <Link
          href={main.href}
          className="block font-normal text-white px-3 py-2  rounded-lg hover:bg-[#17404b] cursor-pointer"
        >
          {main.title}
        </Link>
        {subItems.map((subItem, index) => (
          <Link
            key={`subItem-${index}`} // Unique key for each sub-item
            href={subItem.href}
            className="block text-white font-normal px-3 py-2 rounded-lg hover:bg-[#17404b] cursor-pointer"
          >
            {subItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubDropdown;
