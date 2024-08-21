"use client"; // Make sure to include this if you need Client Component behavior

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const [dropdownOpen, setDropdownOpen] = useState(0);

  return (
    <div>
      <div className="bg-[#1d1d1d]">
        {/* Default Layout */}
        <div className="hidden lg:flex justify-between my-div mx-auto mb-[-1px] overflow-auto bg-no-repeat">
          <div className="float-left font-droid-sans font-bold text-[2.8em] leading-[1em] tracking-[-0.03em] text-[#90c140] py-9 pb-3.5 mb-2">
            <Link href="/">
              <Image
                src="/joomla-cirrus-green-logo.png"
                alt="Logo"
                className="border-none"
                width={240}
                height={60}
              />
            </Link>
          </div>
          <div className="float-right mt-16">
            <p className="text-[#555555]">
              Contact Us:&nbsp;&nbsp;
              <a
                href="mailto:info@tynesoft.com"
                className="text-[#90c140] no-underline"
              >
                info@tynesoft.com
              </a>
            </p>
          </div>
        </div>
        {/* Mobile Layout */}
        <div className="flex flex-row justify-around items-center pb-3">
          <div className="lg:hidden flex flex-col items-center bg-[#1d1d1d]">
            <div className="font-droid-sans font-bold text-[2.8em] leading-[1em] tracking-[-0.03em] text-[#90c140] py-7 pb-3.5">
              <Link href="/">
                <Image
                  src="/joomla-cirrus-green-logo.png"
                  alt="Logo"
                  className="border-none"
                  width={240}
                  height={60}
                />
              </Link>
            </div>
            <div className="mb-2">
              <p className="text-[#555555]">
                Contact Us:&nbsp;&nbsp;
                <a
                  href="mailto:info@tynesoft.com"
                  className="text-[#90c140] no-underline"
                >
                  info@tynesoft.com
                </a>
              </p>
            </div>
          </div>
          <div className="lg:hidden">
            <Image
              src="/icons8-menu.svg"
              alt="menu"
              className="border-none"
              width={25}
              height={25}
              onMouseUp={() => setDropdownOpen(3)}
              onMouseOut={() => setDropdownOpen(0)}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block overflow-auto bg-[#151515]">
        <div className="my-div mx-auto pl-0 font-droid-sans font-normal text-lg text-gray-400">
          <ul className="flex p-0 m-0 list-none">
            <li className="border-l border-gray-600 w-[80px]">
              <Link
                href="/"
                className={`block py-2 px-6 uppercase no-underline ${
                  isActive("/")
                    ? "bg-[#90c140] text-[#fafafa]"
                    : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                }`}
              >
                Home
              </Link>
            </li>
            <li
              className="border-x border-gray-600 relative group w-[120px]"
              onMouseEnter={() => setDropdownOpen(1)}
              onMouseLeave={() => setDropdownOpen(0)}
            >
              <Link
                href="/products"
                className={`block py-2 px-6 uppercase no-underline ${
                  isActive("/products")
                    ? "bg-[#90c140] text-[#fafafa]"
                    : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                }`}
              >
                Products
              </Link>
            </li>
            <li
              className="border-r border-gray-600"
              onMouseEnter={() => setDropdownOpen(2)}
              onMouseLeave={() => setDropdownOpen(0)}
            >
              <Link
                href="/services"
                className={`block py-2 px-6 uppercase no-underline ${
                  isActive("/service")
                    ? "bg-[#90c140] text-[#fafafa]"
                    : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                }`}
              >
                Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Dropdown Menu */}
      {dropdownOpen === 1 && (
        <div className="my-div">
          <div className="absolute ml-[80px] w-[230px] bg-[#1d1d1d] text-gray-400 z-10">
            <ul className="list-none p-0 m-0">
              <li>
                <Link
                  href="/products/digital-archive-platform"
                  onMouseEnter={() => setDropdownOpen(1)}
                  onMouseLeave={() => setDropdownOpen(0)}
                  className={`block py-2 px-6 uppercase no-underline ${
                    isActive("/products/digital-archive-platform")
                      ? "bg-[#90c140] text-[#fafafa]"
                      : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                  }`}
                >
                  DIGITAL ARCHIVE PLATFORM
                </Link>
              </li>
              <li>
                <Link
                  href="/products/appfu"
                  onMouseEnter={() => setDropdownOpen(1)}
                  onMouseLeave={() => setDropdownOpen(0)}
                  className={`block py-2 px-6 uppercase no-underline ${
                    isActive("/products/appfu")
                      ? "bg-[#90c140] text-[#fafafa]"
                      : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                  }`}
                >
                  APPFU
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {dropdownOpen === 2 && (
        <div className="my-div">
          <div className="absolute ml-[200px] w-[270px] bg-[#1d1d1d] text-gray-400 z-10">
            <ul className="list-none p-0 m-0">
              <li>
                <Link
                  href="/services/8-articles/6-alternatives-to-the-app-stores"
                  onMouseEnter={() => setDropdownOpen(2)}
                  onMouseLeave={() => setDropdownOpen(0)}
                  className={`block py-2 px-6 uppercase no-underline ${
                    isActive(
                      "/services/8-articles/6-alternatives-to-the-app-stores"
                    )
                      ? "bg-[#90c140] text-[#fafafa]"
                      : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                  }`}
                >
                  ALTERNATIVES TO THE APP STORES
                </Link>
              </li>
              <li>
                <Link
                  href="/services/8-articles/7-how-do-you-develop-a-mobile-application"
                  onMouseEnter={() => setDropdownOpen(2)}
                  onMouseLeave={() => setDropdownOpen(0)}
                  className={`block py-2 px-6 uppercase no-underline ${
                    isActive(
                      "/services/8-articles/7-how-do-you-develop-a-mobile-application"
                    )
                      ? "bg-[#90c140] text-[#fafafa]"
                      : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                  }`}
                >
                  HOW DO YOU DEVELOP A MOBILE APPLICATION
                </Link>
              </li>
              <li>
                <Link
                  href="/services/8-articles/8-why-take-your-product-mobile"
                  onMouseEnter={() => setDropdownOpen(2)}
                  onMouseLeave={() => setDropdownOpen(0)}
                  className={`block py-2 px-6 uppercase no-underline ${
                    isActive(
                      "/services/8-articles/8-why-take-your-product-mobile"
                    )
                      ? "bg-[#90c140] text-[#fafafa]"
                      : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                  }`}
                >
                  WHY TAKE YOUR PRODUCT MOBLIE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {dropdownOpen === 3 && (
        <ul className="w-[100%] absolute flex flex-col justify-around items-center">
          <li className="w-[250px] bg-[#151515]">
            <Link
              href="/"
              className={`block py-2 px-6 uppercase no-underline ${
                isActive("/")
                  ? "bg-[#90c140] text-[#fafafa]"
                  : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
              }`}
            >
              Home
            </Link>
          </li>
          <li
            className="w-[250px] bg-[#151515]"
          >
            <Link
              href="/products"
              className={`block py-2 px-6 uppercase no-underline ${
                isActive("/products")
                  ? "bg-[#90c140] text-[#fafafa]"
                  : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
              }`}
            >
              Products
            </Link>
          </li>
          <li className="pl-4 w-[250px] bg-[#151515]">
            <Link
              href="/products/digital-archive-platform"
              className={`block py-2 px-6 uppercase no-underline ${
                isActive("/products/digital-archive-platform")
                  ? "bg-[#90c140] text-[#fafafa]"
                  : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
              }`}
            >
              • DIGITAL ARCHIVE PLATFORM
            </Link>
          </li>
          <li className="pl-4 w-[250px] bg-[#151515]">
            <Link
              href="/products/appfu"
              className={`block py-2 px-6 uppercase no-underline ${
                isActive("/products/appfu")
                  ? "bg-[#90c140] text-[#fafafa]"
                  : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
              }`}
            >
              • APPFU
            </Link>
          </li>
          <li
            className="w-[250px] bg-[#151515]"
          >
            <Link
              href="/services"
              className={`block py-2 px-6 uppercase no-underline ${
                isActive("/service")
                  ? "bg-[#90c140] text-[#fafafa]"
                  : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
              }`}
            >
              Service
            </Link>
            <li className="pl-4 w-[250px] bg-[#151515]">
              <Link
                href="/services/8-articles/6-alternatives-to-the-app-stores"
                className={`block py-2 px-6 uppercase no-underline ${
                  isActive(
                    "/services/8-articles/6-alternatives-to-the-app-stores"
                  )
                    ? "bg-[#90c140] text-[#fafafa]"
                    : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                }`}
              >
                • ALTERNATIVES TO THE APP STORES
              </Link>
            </li>
            <li className="pl-4 w-[250px] bg-[#151515]">
              <Link
                href="/services/8-articles/7-how-do-you-develop-a-mobile-application"
                className={`block py-2 px-6 uppercase no-underline ${
                  isActive(
                    "/services/8-articles/7-how-do-you-develop-a-mobile-application"
                  )
                    ? "bg-[#90c140] text-[#fafafa]"
                    : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                }`}
              >
                • HOW DO YOU DEVELOP A MOBILE APPLICATION
              </Link>
            </li>
            <li className="pl-4 w-[250px] bg-[#151515]">
              <Link
                href="/services/8-articles/8-why-take-your-product-mobile"
                className={`block py-2 px-6 uppercase no-underline ${
                  isActive(
                    "/services/8-articles/8-why-take-your-product-mobile"
                  )
                    ? "bg-[#90c140] text-[#fafafa]"
                    : "text-gray-400 hover:bg-[#90c140] hover:text-[#fafafa]"
                }`}
              >
                • WHY TAKE YOUR PRODUCT MOBLIE
              </Link>
            </li>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
