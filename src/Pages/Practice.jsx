import React from "react";
import { FaTrophy, FaChartLine, FaArrowUp, FaClock } from "react-icons/fa";

const Practice = () => {
  const progress = [
    {
      icon: <FaTrophy className="w-8 h-8 text-yellow-400" />,
      value: 45,
      label: "Tests Completed",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-cyan-400" />,
      value: "87%",
      label: "Avg Score",
    },
    {
      icon: <FaArrowUp className="w-8 h-8 text-green-400" />,
      value: "+15%",
      label: "Improvement",
    },
    {
      icon: <FaClock className="w-8 h-8 text-pink-400" />,
      value: "42h",
      label: "Total Time",
    },
  ];

  const testCards = [
    {
      title: "Chapter Test",
      desc: "Test your knowledge chapter-wise",
      duration: "15 min",
    },
    {
      title: "Quick Quiz",
      desc: "Short quizzes to revise topics",
      duration: "5-10 min",
    },
    {
      title: "Mock Test",
      desc: "Full syllabus mock test",
      duration: "30-45 min",
    },
  ];

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#042f2e] to-[#020617] text-white font-sans px-4 sm:px-6 lg:px-20 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
          Practice & Tests
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Sharpen your skills with unlimited practice questions and mock tests
        </p>
      </div>

      {/* Your Progress */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {progress.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition cursor-pointer"
          >
            <div className="mb-4">{item.icon}</div>
            <p className="text-3xl font-bold mb-1">{item.value}</p>
            <p className="text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Test Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {testCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col justify-between text-center hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-gray-300 mb-4">{card.desc}</p>
            <p className="text-gray-300 font-semibold">{card.duration}</p>
            <button className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition">
              Start Test
            </button>
          </div>
        ))}
      </div>

      {/* Practice by Subjects */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Practice by Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-center justify-center text-center hover:scale-105 transition cursor-pointer"
            >
              <p className="text-lg font-semibold">{subject}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
