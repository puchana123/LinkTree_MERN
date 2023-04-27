import Link from "next/link";
import React from "react";

const SocialTree = ({ social }) => {
  const { facebook, twitter, instagram, youtube, linkedin, github } = social;

  return (
    <>
      <div className="social flex flex-row justify-center py-2">
        <Link
          target="_blank"
          href={`https://facebook.com/${facebook}`}
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-300 mx-1 select-none"
        >
          <img src="/svg/facebook.svg" alt="fb-icon" className="w-6" />
        </Link>
        <Link
          target="_blank"
          href={`https://twitter.com/${twitter}`}
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-300 mx-1 select-none"
        >
          <img src="/svg/twitter.svg" alt="tw-icon" className="w-6" />
        </Link>
        <Link
          target="_blank"
          href={`https://instagram.com/${instagram}`}
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-300 mx-1 select-none"
        >
          <img src="/svg/instagram2.svg" alt="ig-icon" className="w-6" />
        </Link>
        <Link
          target="_blank"
          href={`https://youtube.com/${youtube}`}
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-300 mx-1 select-none"
        >
          <img src="/svg/youtube.svg" alt="yt-icon" className="w-6" />
        </Link>
        <Link
          target="_blank"
          href={`https://linkedin.com/${linkedin}`}
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-300 mx-1 select-none"
        >
          <img src="/svg/linkedin.svg" alt="li-icon" className="w-6" />
        </Link>
        <Link
          target="_blank"
          href={`https://github.com/${github}`}
          className="bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-300 mx-1 select-none"
        >
          <img src="/svg/github.svg" alt="gt-icon" className="w-6" />
        </Link>
      </div>
    </>
  );
};

export default SocialTree;
