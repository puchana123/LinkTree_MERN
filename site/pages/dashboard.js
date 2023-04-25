import React, { useEffect } from "react";

const dashboard = () => {
  useEffect(() => {
    if (!localStorage.getItem("LinkTree"))
      return (window.location.href = "/login");
  }, []);

  return (
    <>
      <section className="main flex justify-center">
        <h1 className="bg-gray-700 text-white">Dashboard</h1>
      </section>
    </>
  );
};

export default dashboard;
