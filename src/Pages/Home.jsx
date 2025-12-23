import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Home = () => {
  const cards = [
    {
      title: "NCERT Solutions",
      description: "Expert solutions to all NCERT exercises",
      icon: <BookOpen className="w-10 h-10 text-cyan-400" />,
    },
    {
      title: "Smart Learning",
      description: "AI-powered personalized study plans",
      icon: <BookOpen className="w-10 h-10 text-cyan-400" />,
    },
    {
      title: "Progress Tracking",
      description: "Monitor your academic growth in detail",
      icon: <BookOpen className="w-10 h-10 text-cyan-400" />,
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Students", color: "text-cyan-400" },
    { value: "50+", label: "Subjects", color: "text-teal-400" },
    { value: "1000+", label: "Practice Questions", color: "text-emerald-400" },
    { value: "95%", label: "Success Rate", color: "text-cyan-400" },
  ];

  return (
    <div className="w-full font-sans">
      {/* HERO */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-6 lg:px-6 bg-gradient-to-br from-[#020617] via-[#042f2e] to-[#020617] text-gray-200">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400"
        >
          Master NCERT with Confidence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-xs sm:max-w-md md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-10"
        >
          A comprehensive learning platform designed for serious students.
          Structured, focused, and results-driven.
        </motion.p>
      </div>

      {/* EVERYTHING YOU NEED TO EXCEL */}
      <div className="py-20 bg-black text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Everything You Need to Excel
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 px-4 md:px-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl shadow-lg flex flex-col items-center text-center max-w-sm sm:max-w-xs md:max-w-sm cursor-pointer w-full md:w-auto"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-base">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS SECTION (faster + more free + no scrollbar) */}
      <div className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <motion.div
          className="flex gap-10 px-20 min-w-max"
          initial={{ x: "100%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {stats.concat(stats).map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center min-w-[250px] p-8 bg-gradient-to-br from-cyan-800 to-teal-800 rounded-xl shadow-lg cursor-pointer"
            >
              <h3
                className={`text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold ${stat.color}`}
              >
                {stat.value}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BUILT FOR ACADEMIC EXCELLENCE (improved) */}
      <div className="py-20 bg-gradient-to-tr from-cyan-900 via-gray-900 to-black text-white text-center px-4 sm:px-6 relative overflow-hidden">
        {/* background floating circles */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute w-64 h-64 bg-cyan-500 rounded-full opacity-20 top-10 left-10"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-48 h-48 bg-teal-400 rounded-full opacity-15 bottom-20 right-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative z-10">
          Built for Academic Excellence
        </h2>
        <p className="max-w-xs sm:max-w-md md:max-w-3xl mx-auto text-gray-300 mb-12 text-sm sm:text-base md:text-lg lg:text-lg relative z-10">
          Our platform combines the rigor of NCERT curriculum with modern
          learning methodologies. Focus on what matters most - understanding
          concepts deeply and performing consistently.
        </p>

        {/* FEATURE CARDS */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
          {["Structured Content", "Expert Guidance", "Regular Assessment"].map(
            (title, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl flex-1 text-center cursor-pointer w-full sm:w-64 md:w-72 lg:w-80"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-base">
                  {title === "Structured Content" &&
                    "Organized chapter-wise for systematic learning"}
                  {title === "Expert Guidance" &&
                    "Learn from experienced NCERT specialists and one-one"}
                  {title === "Regular Assessment" &&
                    "Continuous evaluation for steady improvement"}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
