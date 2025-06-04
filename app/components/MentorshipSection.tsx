"use client";

import { useState } from "react";
import MentorshipTabs from "./MentorshipTab";
import ProgramCard from "./ProgramCard";

export default function MentorshipSection() {
  const [selectedCategory, setSelectedCategory] = useState("Data Analytics");

  return (
    <section className="min-h-screen   bg-[#f7f9fe] py-10">
      <div className={"max-w-7xl mx-auto px-4 flex flex-col items-start"}>
        <div className="text-left mb-10">
          <h1 className="text-4xl font-bold mb-2">Mentorship Programs</h1>
          <p className="text-gray-600">
            Choose your program, get certified, and grab new career opportunities.
          </p>
        </div>
        <MentorshipTabs onSelect={setSelectedCategory} />
      </div>

      <ProgramCard key={selectedCategory} />
    </section>
  );
}
