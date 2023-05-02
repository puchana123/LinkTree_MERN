import React, { useContext, useEffect, useState } from "react";
import LinkBox from "@/components/LinkBox";
import UserHeader from "@/components/UserHeader";
import { toast } from "react-toastify";
import UserContext from "@/context/userContext";
import MyHead from "@/components/MyHead";

const dashboard = () => {
  const [data, setData] = useState({});
  const { setUserData, setIsLogin } = useContext(UserContext);

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
        setData(data.userData);
        setUserData(data.userData);
        setIsLogin(true);
        localStorage.setItem("userHandle", data.userData.handle);
        toast.success(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <MyHead title="Dashboard" />
      <div>
        <span className="header"></span>
        <UserHeader />
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4">
            <LinkBox
              lbTitle="Links"
              lbNumber={data.links}
              lbSvg="url"
              lbTheme="red"
            />
            <LinkBox
              lbTitle="Growth"
              lbNumber="30%"
              lbSvg="growth"
              lbTheme="blue"
            />
            <LinkBox
              lbTitle="Growth"
              lbNumber="30%"
              lbSvg="email"
              lbTheme="blue"
            />
            <LinkBox
              lbTitle="Growth"
              lbNumber="30%"
              lbSvg="email"
              lbTheme="blue"
            />
          </section>

          <section></section>
        </main>
      </div>
    </>
  );
};

export default dashboard;
