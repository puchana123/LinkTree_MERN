import React, { useContext, useEffect, useState } from "react";
import UserContext from "@/context/userContext";
import UserHeader from "@/components/UserHeader";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const profile = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [socials, setSocials] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: "",
  });

  const handleSocial = (e) => {
    setSocials({
      ...socials,
      [e.target.id]: e.target.value,
    });
  };

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(
    "https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160_960_720.png"
  );

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setAvatar(userData.avatar);
      setBio(userData.bio);
    }
  }, [userData]);

  const saveProfile = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/save/profile`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
        name: name,
        bio: bio,
        avatar: avatar,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        toast.success("Socials saved successfully");
      })
      .catch((err) => console.log(err));
  };

  const saveSocial = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/save/socials`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
        socials: socials,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") return toast.error(data.error);
        toast.success("Socials saved successfully");
      })
      .catch((err) => console.log(err));
  };

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) return router.push("/login");
    fetch("http://localhost:8080/load/socials", {
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
        setSocials(data.socials);
      });
  }, []);

  return (
    <>
      <div>
        <UserHeader />
        <main className="h-full">
          <section>
            <div>
              <h4 className="font-bold text-center mb-5">Edit Profile</h4>
              <div>
                <form
                  onSubmit={saveProfile}
                  className="flex flex-col justify-center items-center"
                >
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img src="/svg/user.svg" alt="user" className="w-8 mr-3" />
                    <input
                      className="w-full focus:outline-none"
                      placeholder="Set a Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </span>
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img src="/svg/text.svg" alt="text" className="w-8 mr-3" />
                    <input
                      className="w-full focus:outline-none"
                      placeholder="Enter a bio"
                      type="text"
                      required
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </span>
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img
                      src="/svg/avatar.svg"
                      alt="avatar"
                      className="w-8 mr-3"
                    />
                    <input
                      className="w-full focus:outline-none"
                      placeholder="Enter image link"
                      type="text"
                      required
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <img
                      className="w-10 rounded-full shadow-md border-white"
                      src={avatar}
                      alt="new_avatar"
                    />
                  </span>
                  <input
                    className="bg-green-500 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer text-white w-32"
                    type="submit"
                    value="Save profile"
                  />
                </form>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-bold text-center mb-5">Edit Profile</h4>
              <div>
                <form
                  onSubmit={saveSocial}
                  className="flex flex-col justify-center items-center mb-5"
                >
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img
                      src="/svg/facebook.svg"
                      alt="facebook"
                      className="w-8 mr-3"
                    />
                    <input
                      id="facebook"
                      className="w-full focus:outline-none"
                      placeholder="Enter Facebook ID"
                      type="text"
                      value={socials.facebook}
                      onChange={handleSocial}
                      required
                    />
                  </span>
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img
                      src="/svg/instagram2.svg"
                      alt="instagram"
                      className="w-8 mr-3"
                    />
                    <input
                      id="instagram"
                      className="w-full focus:outline-none"
                      placeholder="Enter Instagram ID"
                      type="text"
                      required
                      value={socials.instagram}
                      onChange={handleSocial}
                    />
                  </span>
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img
                      src="/svg/twitter.svg"
                      alt="twitter"
                      className="w-8 mr-3"
                    />
                    <input
                      id="twitter"
                      className="w-full focus:outline-none"
                      placeholder="Enter Twitter ID"
                      type="text"
                      required
                      value={socials.twitter}
                      onChange={handleSocial}
                    />
                  </span>
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img
                      src="/svg/youtube.svg"
                      alt="youtube"
                      className="w-8 mr-3"
                    />
                    <input
                      id="youtube"
                      className="w-full focus:outline-none"
                      placeholder="Enter Youtube ID"
                      type="text"
                      value={socials.youtube}
                      onChange={handleSocial}
                      required
                    />
                  </span>
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img
                      src="/svg/linkedin.svg"
                      alt="linkedin"
                      className="w-8 mr-3"
                    />
                    <input
                      id="linkedin"
                      className="w-full focus:outline-none"
                      placeholder="Enter Linkedin ID"
                      type="text"
                      value={socials.linkedin}
                      onChange={handleSocial}
                      required
                    />
                  </span>
                  <span className="flex flex-row shadow-md border-2 px-3 py-4 rounded-md focus:outline-none w-11/12 mx-auto mb-3">
                    <img
                      src="/svg/github.svg"
                      alt="github"
                      className="w-8 mr-3"
                    />
                    <input
                      id="github"
                      className="w-full focus:outline-none"
                      placeholder="Enter Github ID"
                      type="text"
                      required
                      value={socials.github}
                      onChange={handleSocial}
                    />
                  </span>
                  <input
                    className="bg-green-500 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer text-white w-32"
                    type="submit"
                    value="Save Socials"
                  />
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default profile;
