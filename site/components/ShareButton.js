import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ShareButton = () => {
  const router = useRouter();
  const copyLink = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/${router.query.handle}`
    );
    toast("Copied to clipboard");
  };

  return (
    <>
      <div
        className="absolute cursor-pointer top-24 right-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2 border-indigo-400"
        onClick={copyLink}
      >
        <img src="/svg/share.svg" alt="share-icon" className="w-6" />
      </div>
    </>
  );
};

export default ShareButton;
