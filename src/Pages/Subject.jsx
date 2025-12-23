import React from "react";
import {
  FaCalculator,
  FaFlask,
  FaBook,
  FaGlobe,
  FaPen,
  FaAtom,
} from "react-icons/fa";

const Subject = () => {
  const data = [
    {
      icon: <FaCalculator className="w-8 h-8 text-white" />,
      classes: "Classes 6-12",
      topic: "45 Topics",
      color: "bg-cyan-500",
    },
    {
      icon: <FaFlask className="w-8 h-8 text-white" />,
      classes: "Classes 6-10",
      topic: "30 Topics",
      color: "bg-teal-500",
    },
    {
      icon: <FaBook className="w-8 h-8 text-white" />,
      classes: "Classes 7-12",
      topic: "50 Topics",
      color: "bg-emerald-500",
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-white" />,
      classes: "Classes 6-8",
      topic: "20 Topics",
      color: "bg-cyan-600",
    },
    {
      icon: <FaPen className="w-8 h-8 text-white" />,
      classes: "Classes 9-12",
      topic: "35 Topics",
      color: "bg-teal-600",
    },
    {
      icon: <FaAtom className="w-8 h-8 text-white" />,
      classes: "Classes 6-10",
      topic: "25 Topics",
      color: "bg-emerald-600",
    },
  ];

  const trending = [
    "Algebra",
    "Chemical Reaction",
    "World History",
    "Grammar",
    "Physics",
    "Coding Basics",
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-16 font-sans bg-gradient-to-br from-[#020617] via-[#042f2e] to-[#020617] text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
          Explore Subjects
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Dive into NCERT subjects with interactive lessons and comprehensive
          study materials
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 mt-20">
        {data.slice(0, 6).map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition cursor-pointer"
          >
            {/* Icon Box */}
            <div
              className={`w-16 h-16 mb-4 flex items-center justify-center ${item.color} rounded-2xl`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-1">{item.classes}</h3>
            <p className="text-gray-200 mb-4">{item.topic}</p>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2 rounded-lg transition">
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Trending Topics */}
      <div className="mb-12 mt-20">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
          Trending Topics
        </h2>
        <div className="flex flex-wrap gap-6 p-4 border-2 border-green-800 rounded-3xl bg-white/4 mt-10">
          {trending.map((topic, idx) => (
            <span
              key={idx}
              className="bg-white/10 hover:bg-white/20 text-white text-lg sm:text-xl md:text-2xl px-6 py-4 rounded-2xl cursor-pointer transition"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subject;
