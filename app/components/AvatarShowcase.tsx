"use client";

import React from "react";
import Image from "next/image";

const avatars = [
  {
    label: "Python",
    top: "top-0 left-12",
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-1.webp",
  },
  {
    label: "Full Stack Development",
    top: "top-12 right-0",
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-4.webp",
  },
  {
    label: "Performance Marketing",
    top: "top-32 left-0",
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-2.webp",
  },
  {
    label: "Data Analytics",
    top: "bottom-4 right-10",
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-3.webp",
  },
];

const AvatarShowcase = () => {
  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {avatars.map((avatar, idx) => (
        <div
          key={idx}
          className={`absolute ${avatar.top} bg-white text-sm text-blue-600 px-4 py-2 rounded-full shadow-md font-medium`}>
          {avatar.label}

          {/* Placeholder circle image in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={avatar.src}
              alt="Main Avatar"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarShowcase;
