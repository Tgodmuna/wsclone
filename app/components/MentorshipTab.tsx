"use client";

import { useState } from "react";

const categories = [
  "Data Analytics",
  "Digital Marketing",
  "Web Development",
  "Cyber Security",
  "App Development",
];

export default function MentorshipTabs({ onSelect }: { onSelect: (category: string) => void }) {
  const [active, setActive] = useState("Data Analytics");

  return (
    <div className="flex gap-4 flex-wrap justify-center mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActive(cat);
            onSelect(cat);
          }}
          className={`px-5 py-2 rounded-full border font-medium transition-shadow duration-200
            ${active === cat
              ? "bg-blue-600 text-white shadow-lg"
              : "border-black text-black hover:bg-blue-600 hover:text-white hover:shadow-lg"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
