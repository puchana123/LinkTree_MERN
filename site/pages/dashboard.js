import React, { useEffect, useState } from "react";
import LinkBox from "@/components/LinkBox";
import UserHeader from "@/components/UserHeader";
import { toast } from "react-toastify";

const dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("LinkTree"))
      return (window.location.href = "/login");

    fetch("http://localhost:8080/api/dashboard", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTree"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error("Error happened");
        setUserData(data.userData);
        localStorage.setItem("userData", data.userData.handle);
        toast.success(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <span className="header"></span>
        <UserHeader data={userData} />
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4">
            <LinkBox
              lbTitle="Links"
              lbNumber={userData.links}
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
