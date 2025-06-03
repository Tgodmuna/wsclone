"use client";

import React from "react";
import Image from "next/image";

const avatars = [
  {
    label: "Python",
    base: "top-2 left-10",
    sm: "top-4 left-14",
    md: "top-4 left-20",
    lg: "top-6 left-24",
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-1.webp",
  },
  {
    label: "Full Stack Development",
    base: "top-16 right-0",
    sm: "top-20 right-2",
    md: "top-24 right-4",
    lg: "top-28 right-6",
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-4.webp",
  },
  {
    label: "Performance Marketing",
    base: "bottom-16 left-2",
    sm: "bottom-20 left-6",
    md: "bottom-24 left-10",
    lg: "bottom-28 left-14",
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-2.webp",
  },
  {
    label: "Data Analytics",
    base: "bottom-2 right-8",
    sm: "bottom-4 right-12",
    md: "bottom-6 right-16",
    lg: "bottom-10 right-20",
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-3.webp",
  },
  {
    label: "Main Avatar",
    center: true,
    src: "https://deen3evddmddt.cloudfront.net/images/home-images/banner-images/banner-img-1.webp",
  },
];

const AvatarShowcase = () => {
  const centerAvatar = avatars.find((a) => a.center);
  const floatingAvatars = avatars.filter((a) => !a.center);

  return (
    <div className="relative w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] mx-auto">
      {/* Center Avatar */}
      {centerAvatar && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={centerAvatar.src}
            alt={centerAvatar.label || "Center Avatar"}
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-lg"
            unoptimized
          />
        </div>
      )}

      {/* Floating Avatars */}
      {floatingAvatars.map((avatar, idx) => (
        <div
          key={idx}
          className={`
            absolute ${avatar.base}
            sm:${avatar.sm}
            md:${avatar.md}
            lg:${avatar.lg}
            flex flex-col items-center space-y-1 z-0
          `}>
          <Image
            src={avatar.src}
            alt={avatar.label}
            width={50}
            height={50}
            className="rounded-full border-2 border-white shadow-md"
            unoptimized
          />
          <span className="bg-white text-[10px] sm:text-xs text-blue-600 px-2 sm:px-3 py-1 rounded-full shadow font-medium whitespace-nowrap">
            {avatar.label} 
          </span>
        </div>
      ))}
    </div>
  );
};

export default AvatarShowcase;
