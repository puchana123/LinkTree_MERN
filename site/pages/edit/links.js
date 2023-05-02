import MyHead from "@/components/MyHead";
import UserHeader from "@/components/UserHeader";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const links = () => {
  const [links, setLinks] = useState([
    {
      url: "",
      title: "",
      icon: "",
    },
  ]);

  const handleLinkChanage = (index, field, value) => {
    const updatedLinks = [...links];
    const linkToUpdate = { ...updatedLinks[index], [field]: value };
    updatedLinks[index] = linkToUpdate;
    setLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { url: "", title: "", icon: "" }]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const saveLink = (e) => {
    e.preventDefault();
    const linksArray = Object.values(links);
    const linksData = linksArray.map((link) => ({
      link,
    }));

    fetch("http://localhost:8080/save/links", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
        links: linksData,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        toast.success("Links saved successfully");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) return router.push("/login");
    fetch("http://localhost:8080/load/links", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        setLinks(data.links);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <MyHead title="Edit Links" />
      <div>
        <UserHeader />
        <main>
          <section className="px-6">
            <h1 className="text-center font-bold text-xl my-3">
              Add or Customize your Links
            </h1>
            <div>
              <form onSubmit={saveLink}>
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row py-3 justify-center"
                  >
                    <div className="flex flex-col lg:flex-row md:ml-2 gap-3 w-full">
                      <label className="w-full">
                        URL:
                        <input
                          className="outline-none border-2 border-gray-200 shadow-sm rounded-lg md:ml-2 px-2 py-1 w-full"
                          type="text"
                          value={link.url}
                          onChange={(e) =>
                            handleLinkChanage(index, "url", e.target.value)
                          }
                        />
                      </label>
                      <label className="w-full">
                        Title:
                        <input
                          className="outline-none border-2 border-gray-200 shadow-sm rounded-lg md:ml-2 px-2 py-1 w-full"
                          type="text"
                          value={link.title}
                          onChange={(e) =>
                            handleLinkChanage(index, "title", e.target.value)
                          }
                        />
                      </label>
                      <label className="w-full">
                        Icon:
                        <input
                          className="outline-none border-2 border-gray-200 shadow-sm rounded-lg md:ml-2 px-2 py-1 w-full"
                          type="text"
                          value={link.icon}
                          onChange={(e) =>
                            handleLinkChanage(index, "icon", e.target.value)
                          }
                        />
                      </label>
                    </div>

                    <button
                      className="bg-red-500 text-white px-4 py-1 mt-6 md:mt-5 rounded-md shadow-sm hover:scale-90 md:ml-4 text-sm"
                      type="button"
                      onClick={() => handleRemoveLink(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="buttons flex flex-col sm:flex-row gap-5 my-1 md:px-40 lg:px-auto justify-center">
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm w-full hover:bg-indigo-300 hover:text-indigo-500"
                    type="button"
                    onClick={handleAddLink}
                  >
                    Add Link
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm w-full"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default links;
