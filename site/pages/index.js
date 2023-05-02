import Link from "next/link";
import MyHead from "../components/MyHead";
import styles from "../styles/apply.module.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserContext from "@/context/userContext";

export default function Home() {
  const { userData, isLogin } = useContext(UserContext);
  const { handle } = userData;

  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.push(`http://localhost:3000/${handle}`);
    }
  }, []);

  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to LinkTree, where we help you to share your links"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <main
        className={`w-full min-h-screen flex flex-col justify-center items-center ${styles.background}`}
      >
        <h1 className="text-center text-2xl text-white">
          {" "}
          Welcome to <br />
          <span className="text-indigo-600 font-semibold">
            NextJS Featured Template
          </span>{" "}
          <span className="font-bold text-green-500">LinkTree</span>
        </h1>
        <Link
          className="bg-indigo-600 rounded-md inline-block my-3 p-1 px-3 text-white hover:scale-110"
          href="/apply"
        >
          Apply Now
        </Link>
      </main>
    </>
  );
}
