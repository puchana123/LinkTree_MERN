import Link from "next/link";
import React from "react";

const LinkTreeCard = ({ title, url, image }) => {
  return (
    <>
      <span className="w-full">
        <Link
          href={`http://${url}`}
          target="_blank"
          className="flex flex-row items-center p-2 rounded-xl text-white bg-indigo-400 hover:bg-indigo-200 mb-3 mx-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-500"
        >
          <img
            src={image}
            alt={title}
            className="bg-white rounded-md p-1 w-11 mr-5"
          />
          <h4 className="capitalize">{title}</h4>
        </Link>
      </span>
    </>
  );
};

export default LinkTreeCard;
