/* eslint-disable @next/next/no-img-element */
import { Calendar, Star, Video } from "lucide-react";

export default function ProgramCard() {
  return (
    <div className="bg-white border-[5px] border-black p-3 rounded-2xl shadow-md max-w-[75rem] h-[27rem] mx-auto flex flex-col md:flex-row gap-6 items-center">
      <img
        src="/mentorship.jpeg"
        alt="Mentorship"
        className=" object-contain w-[30rem]  rounded-lg"
        loading="lazy"
      />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-2">Data Analytics Mentorship Program</h2>
        <p className="text-gray-600 mb-3">
          Join this 16 weeks, Job-ready Program to master Data Analytics from scratch with Top Data
          Analysts from Microsoft, KPMG, Amazon, and Rapido.
        </p>
        <div className="flex items-center gap-2 mb-2">
          <span className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill="currentColor"
              />
            ))}
          </span>
          <span className="text-gray-600 text-sm">(1,032)</span>
        </div>

        <div className="mb-4">
          <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">Data Analytics</span>
        </div>

        <div className="flex gap-6 mb-4">
          <div className=" flex gap-3 items-center">
            <Calendar className="size-8 text-green-300 bg-gray-500 bg-opacity-65 p-1 rounded-full" />
            <div className="flex  flex-col text-sm text-gray-700 gap-2 mb-1">
              <p className="text-neutral-600">Duration</p>
              <p className={"font-bold"}>16 Weeks</p>
            </div>
          </div>

          <div className="text-sm text-gray-700"></div>

          <div className=" flex gap-3 items-center">
            <Video className="size-8 text-green-300 bg-gray-500 bg-opacity-65 p-1 rounded-full" />
            <div className="flex  flex-col text-sm text-gray-700 gap-2 mb-1">
              <p className="text-neutral-600">Live Sessions</p>
              <p className={"font-bold"}>106+ hrs</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md shadow-black/20 transition-shadow duration-200 hover:shadow-lg hover:shadow-black">
            Download Curriculum
            </button>
            <button className="border border-black text-black px-4 py-2 rounded-lg shadow-md shadow-black/20 transition-shadow duration-200 hover:shadow-lg hover:shadow-black">
            Learn More
            </button>
        </div>
      </div>
    </div>
  );
}
