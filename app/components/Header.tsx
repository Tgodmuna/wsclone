/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function StickyHeader() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const offset = headerRef.current.offsetTop;
        if (window.scrollY > offset) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#fff4e6] text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
        <span>
          Digital Marketing with <strong>AI – Cohort-7</strong> | Learn from Top Data Analysts |{" "}
          <strong>Starts 21st June</strong>
        </span>
        <button className="ml-4 bg-orange-400 hover:bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
          Apply Now
        </button>
      </div>

      {/* Main Header */}
    <div
      ref={headerRef}
      className={`w-full transition-shadow duration-300 z-50 ${
        isSticky ? "fixed top-0 shadow-md bg-[#fdf9f9]" : "bg-[#0633ec]"
      } py-3 px-6`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center ${isSticky ? "text-[#0633ec]" : "text-white"}`}>
        {/* Logo */}
        <div className={`flex items-center gap-2 text-lg font-semibold ${isSticky ? "text-[#0633ec]" : "text-white"}`}>
        <img
          src="/logo.png"
          alt="WsCube Tech"
          className="h-8 w-auto"
        />
        <span className={`text-sm font-light ${isSticky ? "text-[#0633ec]" : "text-white"}`}>Upskilling Bharat</span>
        </div>

        {/* Menu Items */}
        <div className="flex items-center gap-6">
        <button className={`border px-4 py-1.5 rounded-lg flex items-center gap-1 ${
          isSticky ? "text-[#0633ec] border-[#0633ec]" : "text-white border-white"
        }`}>
          Explore Courses <ChevronDown size={16} />
        </button>
        <button className={`flex items-center gap-1 ${
          isSticky ? "text-[#0633ec]" : "text-white"
        }`}>
          On Campus Programs <ChevronDown size={16} />
        </button>
        <span className={isSticky ? "text-[#0633ec]" : "text-white"}>Masterclass</span>
        </div>

        {/* Login Button */}
        <button className={`border px-4 py-1.5 rounded-lg hover:bg-white transition ${
        isSticky
          ? "text-[#0633ec] border-[#0633ec] hover:text-white hover:bg-[#0633ec]"
          : "text-white border-white hover:text-[#0633ec] hover:bg-white"
        }`}>
        Login
        </button>
      </div>
    </div>
    </>
  );
}
