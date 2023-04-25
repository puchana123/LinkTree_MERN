import React, { useState } from "react";
import styles from "../styles/apply.module.css";
import { toast } from "react-toastify";
import Link from "next/link";

const Apply = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    toast("You are Logged in");
    setEmail('')
    setPassword('')
  };

  return (
    <>
      <section
        className={`${styles.background} min-h-screen flex justify-center items-center`}
      >
        <div className="main">
          <div className="content border-2 p-6 rounded-2xl shadow-lg bg-white">
            <h1 className="text-2xl font-bold text-center">
              You're now among top creators
            </h1>
            <p className="text-center">Access your Dashboard</p>
            <p className="text-center font-bold py-4 text-gray-500">
              Start build your Hub
            </p>

            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 text-lg mt-5"
            >
              <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none">
                <img src="/svg/email.svg" alt="email" className="w-8 mr-3" />
                <input
                  className="rounded-md focus:outline-none"
                  placeholder="Enter your email"
                  type="email"
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </span>
              <input
                className="shadow-md border-2 px-3 py-4 rounded-md focus:outline-none"
                placeholder="Set a password"
                type="password"
                value={password} onChange={(e)=>setPassword(e.target.value)}
                required
              />

              <button
                className="text-white bg-indigo-500 py-2 rounded-lg"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <h4 className="text-center text-white pt-3">
            New Here?{" "}
            <Link href="/apply" className="font-bold text-red-400">
              Apply
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
};

export default Apply;
