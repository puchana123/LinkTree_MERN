import React, { useEffect, useRef, useState } from "react";

const LazyImage = (prop) => {
  const [view, setView] = useState(false);

  const ref = useRef();

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return view ? (
    <img {...prop} />
  ) : (
    <img
      ref={ref}
      className="w-[1000px] h-[1000px] object-contain m-2 bg-purple-500"
    />
  );
};

export default LazyImage;
