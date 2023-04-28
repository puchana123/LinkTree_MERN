import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="absolute left-1/2 -translate-x-1/2 -bottom-12 py-1"
    >
      <Link
        href="/"
        target="_blank"
        className="flex flex-row items-center group"
      >
        <img
          src="/images/favicon.ico"
          alt="logo"
          className="transition-all duration-400 group-hover:-rotate-90"
        />
        <h5 className="text-indigo-500 pl-3 font-bold group-hover:text-indigo-300 transition-all duration-400">
          Try LinkTree
        </h5>
      </Link>
    </footer>
  );
};

export default Footer;
