"use client";

import React from "react";
import AvatarShowcase from "./AvatarShowcase";

const Hero = () => {
  return (
    <div className="bg-[rgb(8,52,217)] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center z-10 relative">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Don’t Just Upskill, Get Career-ready, Get Hired
          </h1>
          <p className="text-lg mb-6">
            Top Mentorship Programs in Tech, Marketing, & Data— Designed and Delivered by industry
            maestros.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
              Explore Programs
            </button>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition">
              Book Mentor Session
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-sm md:text-base">
            <div>
              <span className="font-bold text-xl">1.5 Lakh +</span>
              <br />
              Aspirants Mentored
            </div>
            <div>
              <span className="font-bold text-xl">1700+</span>
              <br />
              Cohorts Delivered
            </div>
            <div>
              <span className="font-bold text-xl">40+</span>
              <br />
              Industry Mentors
            </div>
          </div>
        </div>

        {/* Floating Avatars (Placeholder) */}
        <div className="relative">
          <AvatarShowcase />
        </div>
      </div>
    </div>
  );
};

export default Hero;
