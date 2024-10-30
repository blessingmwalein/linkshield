import React, { useState } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import SubDropdown from "./sub_dropdown";

export interface SubItem {
  title: string;
  href: string;
}

export interface NavLink {
  linkName: string;
  href?: any;
  items?: Array<{
    title: string;
    href: string;
    subItems?: SubItem[];
  }>;
}

interface DropdownMenuProps {
  link: NavLink;
  mobile?: boolean;
  closeMenu?: () => void; // Add closeMenu prop
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  link,
  mobile = false,
  closeMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubItems, setOpenSubItems] = useState<Record<number, boolean>>({});

  const toggleSubItems = (index: number) => {
    setOpenSubItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className={`w-full ${mobile ? "md:hidden" : "md:w-auto"}`}>
      {/* Mobile Menu Button */}
      {mobile ? (
        <div
          className="flex justify-between items-center text-white text-lg px-4 py-2 cursor-pointer border-b border-gray-700 rounded-lg hover:bg-[#17404b]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{link.linkName}</span>
          <ChevronDownIcon
            className={`h-5 w-5 text-white transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      ) : (
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 rounded-lg text-white hover:bg-[#17404b] cursor-pointer shadow-sm">
            {link.linkName}
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-6 w-6 text-white" />
          </MenuButton>

          <MenuItems className="absolute right-0 z-10 mt-2 w-[263px] origin-top-right rounded-xl bg-[#233339] shadow-lg ring-1 ring-black ring-opacity-5 outline outline-1 outline-[#38545e]">
            <div className="flex flex-col bg-[#233339] px-2.5 py-3 rounded-xl outline outline-1 outline-[#38545e]">
              {link.items?.map((item, index) => (
                <Menu key={`item-${index}`} as="div" className="relative group">
                  {item.subItems ? (
                    <MenuButton className="inline-flex justify-between items-center w-full px-3 py-2 rounded-lg text-white font-normal text-[16px] hover:bg-[#17404b] cursor-pointer shadow-sm">
                      {item.title}
                      {item.subItems && (
                        <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-white" />
                      )}
                    </MenuButton>
                  ) : (
                    <Link
                      href={item.href}
                      className="block font-normal text-white text-[16px] px-3 py-2  rounded-lg hover:bg-[#17404b] cursor-pointer"
                      onClick={closeMenu} // Close menu on link click
                    >
                      {item.title}
                    </Link>
                  )}

                  {item.subItems && <SubDropdown subItems={item.subItems} main={item} />}
                </Menu>
              ))}
            </div>
          </MenuItems>
        </Menu>
      )}

      {mobile && isOpen && (
        <div className="bg-[#233339] px-4 py-2 rounded-lg space-y-2">
          {link.items?.map((item, index) => (
            <div key={`mobileItem-${index}`}>
              <div
                className="flex justify-between items-center text-white text-base cursor-pointer hover:bg-[#17404b] rounded-md px-2 py-1"
                onClick={() => toggleSubItems(index)}
              >
                <Link href={item.href} onClick={closeMenu} className="w-full">
                  {item.title}
                </Link>
                {item.subItems && (
                  <ChevronRightIcon
                    className={`h-5 w-5 text-white transition-transform ${
                      openSubItems[index] ? "rotate-90" : "rotate-0"
                    }`}
                  />
                )}
              </div>

              {item.subItems && (
                <div
                  className={`ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                    openSubItems[index] ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={`mobileSubItem-${subIndex}`}
                      href={subItem.href}
                      className="block text-white text-sm pl-4 pr-2 py-1 rounded-md hover:bg-[#17404b]"
                      onClick={closeMenu} // Close menu on sub-item click
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
