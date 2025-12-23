import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import small from "../../assets/img1.png";
import middle from "../../assets/img2.jpg";
import large from "../../assets/img3.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(2);

  const cards = [
    { id: 1, src: middle, size: "small" },
    { id: 2, src: small, size: "large" },
    { id: 3, src: large, size: "small" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#042f2e] to-[#020617] text-gray-200 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="text-center w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-5xl">
        {/* Heading */}
        <motion.h1
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.7 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-10 sm:mb-14 md:mb-16 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent leading-tight"
        >
          {"Learn Smarter, Perform Better".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.05 } },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Cards Container */}
        <div className="flex justify-center items-center mb-16 flex-wrap">
          {cards.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                animate={{
                  scale: isActive ? 1.15 : 1,
                  zIndex: isActive ? 30 : 10,
                  opacity: !isActive ? 0.75 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="cursor-pointer relative p-[2px] rounded-3xl bg-gradient-to-br from-cyan-400 to-emerald-400"
              >
                <img
                  src={card.src}
                  alt="card"
                  className={`object-cover rounded-3xl bg-[#020617] ${
                    card.size === "large" ? "w-64 h-80" : "w-48 h-64"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-[#020617] font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-emerald-500/40 transition-all duration-300"
          onClick={() => navigate("/home")}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
