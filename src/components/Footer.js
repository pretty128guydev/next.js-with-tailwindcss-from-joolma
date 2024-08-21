"use client";
import Link from "next/link";

 // Make sure to include this if you need Client Component behavior

const Footer = () => {
  return (
    <footer className="clear-both mt-5 pt-4 pb-4 border-t border-black text-sm text-center text-gray-600 bg-gray-900 mb-[-1px]">
      <p>
        ©2024 Tynesoft |{" "}
        <Link
          href="https://www.hurricanemedia.net"
          className="text-gray-600 hover:text-gray-800 no-underline"
        >
          Designed by Hurricane{" "}
        </Link>
        <Link
          href="https://www.erhvervindex.dk"
          className="text-gray-600 hover:text-gray-800 no-underline"
        >
          Media
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
