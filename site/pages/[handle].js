import LinkTree from "@/components/LinkTree";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";
import SocialTree from "@/components/SocialTree";
import ShareButton from "@/components/ShareButton";

const Handle = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);

  const [socials, setSocials] = useState({
    facebook: " ",
    twitter: " ",
    instagram: " ",
    youtube: " ",
    linkedin: " ",
    github: " ",
  });

  useEffect(() => {
    if (router.query?.handle) {
      fetch(`http://localhost:8080/get/${router.query.handle}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") return toast.error(data.error);
          if (data.status === "success") {
            setData(data.userData);
            setSocials(data.socials);
            setUserFound(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [router.query]);

  // useEffect(() => {
  //   if (router.query?.handle) {
  //     fetch(`http://localhost:8080/get/socials/${router.query.handle}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.status === "error") return toast.error(data.error);
  //         if (data.status === "success") {

  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [router.query]);

  if (!userFound) {
    return (
      <div className="flex justify-center text-center h-screen items-center">
        <div className="not-found px-3">
          <h1 className="font-bold text-lg">User Not Found 😔</h1>
          <p>If you're looking for a page, please check the spelling.</p>
          <span>
            Create your own{" "}
            <Link
              className="font-bold hover:decoration-blue-500 hover:text-blue-500 hover:underline"
              href="/apply"
            >
              LinkTree
            </Link>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ShareButton />
      <LinkTree data={data} />
      <SocialTree social={socials} />
    </div>
  );
};

export default Handle;
