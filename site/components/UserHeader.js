import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { toast } from "react-toastify";

const UserHeader = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("LinkTreeToken");
    router.push("/login");
  };

  const { setUserData, userData } = useContext(UserContext);
  const { role, avatar, handle } = userData;

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken"))
      return (window.location.href = "/login");

    fetch("http://localhost:8080/api/dashboard", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error("Error happened");
        setUserData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
        toast.success(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row p-3">
          <Link href="/edit/links">
            <button className="inline-flex w-full md:w-auto px-5 py-3 text-purple-500 font-bold hover:text-purple-700 hover:bg-purple-200 border-2 border-purple-500 rounded-md">
              <img src="/svg/url.svg" alt="user-icon" className="w-6 mr-2" />
              <p>Edit Links</p>
            </button>
          </Link>

          <Link href="/edit/profile">
            <button className="inline-flex w-full md:w-auto px-5 py-3 text-blue-500 font-bold hover:text-blue-700 hover:bg-blue-200 border-2 border-blue-500 rounded-md md:ml-3">
              <img src="/svg/user.svg" alt="user-icon" className="w-6 mr-2" />
              <p>Edit User</p>
            </button>
          </Link>
        </div>

        <div className="flex flex-row">
          <Link href={`http://localhost:3000/${handle}`}>
            <div className="inline-flex mr-5 text-right items-center bg-gray-200 px-5 py-2 rounded-lg">
              <div className="text-xs md:text-md flex flex-col flex-wrap">
                <span className="font-bold">{handle}</span>
                <span>{role} Pack</span>
              </div>
              <div className="user-img">
                <img
                  className="w-10 ml-5 rounded-full"
                  src={avatar}
                  alt="avatar"
                />
              </div>
            </div>
          </Link>

          <img
            className="w-6 mr-5 cursor-pointer"
            src="/svg/notify.svg"
            alt="notify"
          />
          <img
            className="w-6 mr-5 cursor-pointer"
            src="/svg/logout.svg"
            alt="logout"
            onClick={handleLogout}
          />
        </div>
      </header>
    </>
  );
};

export default UserHeader;
