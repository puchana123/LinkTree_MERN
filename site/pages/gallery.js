import LazyImage from "@/components/LazyImage";
import MyHead from "@/components/MyHead";
import React from "react";

const photos = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2023/04/28/12/18/dogs-7956516_960_720.jpg",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2023/04/04/11/59/lake-biwa-7899206_960_720.jpg",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2023/04/08/23/32/beach-7910336_960_720.jpg",
  },
  {
    id: 4,
    url: "https://cdn.pixabay.com/photo/2023/03/27/08/53/woman-7880177_960_720.jpg",
  },
  {
    id: 5,
    url: "https://cdn.pixabay.com/photo/2023/04/24/10/16/architecture-7947727_960_720.jpg",
  },
  {
    id: 6,
    url: "https://cdn.pixabay.com/photo/2023/04/22/02/20/insect-7942861_960_720.jpg",
  },
  {
    id: 7,
    url: "https://cdn.pixabay.com/photo/2023/03/24/03/18/boy-7873231_960_720.jpg",
  },
  {
    id: 8,
    url: "https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_960_720.jpg",
  },
  {
    id: 9,
    url: "https://cdn.pixabay.com/photo/2023/03/18/16/26/ha-giang-7860907_960_720.jpg",
  },
];

const gallery = () => {
  return (
    <>
      <MyHead title="Gallery" />
      <div className="flex justify-center">
        <h1 className="text-[90px] font-bold py-3">Gallery</h1>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {photos.map((data) => (
          <div key={data.id} className="group relative cursor-pointer">
            <span className="opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-1/2">
              <img
                src="/svg/pixabay.svg"
                alt="pixabay"
                className="w-12 bg-white rounded-lg px-2"
              />
            </span>
            <LazyImage
              className="my-3 w-[480px] h-[720px] object-cover group-hover:brightness-75"
              src={data.url}
              alt={data.id}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default gallery;
