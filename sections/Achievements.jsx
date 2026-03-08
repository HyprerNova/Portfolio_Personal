"use client";

import { useTheme } from "@/components/ThemeContext";
import { FiExternalLink } from "react-icons/fi";

const Achievements = () => {
  const { darkMode } = useTheme();

  const achievements = [
    {
      title: "Dynamic Kannada Sign Language Recognition on Resource Constrained Devices",
      subtitle: "Research paper published in Springer Nature – Scientific Reports (2026)",
      description:
        "Co-authored a paper that designs and deploys efficient deep learning models (LSTM, BiLSTM, Transformer) for Kannada Sign Language recognition on resource-constrained devices using TinyML and quantization.",
      link: "https://www.nature.com/articles/s41598-026-40181-7",
      tag: "Research • TinyML • Sign Language",
    },
    {
      title: "KCET 2022 – Rank 320",
      subtitle:
        "Karnataka Common Entrance Test (KCET) – Engineering entrance examination",
      description:
        "Secured an all-state rank of 320 in KCET 2022, enabling admission to top engineering colleges in Karnataka, reflecting consistent problem-solving, rigour, and exam discipline.",
      link: "https://www.geeksforgeeks.org/competitive-exam-experiences/my-2022-kcet-experience/",
      tag: "Academics • Competitive Exams",
    },
  ];

  return (
    <section
      id="achievements"
      className={`flex justify-center items-center min-h-screen py-20 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
              darkMode ? "dark:text-white" : "text-black"
            }`}
          >
            Achievements
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p
            className={`mt-4 text-lg ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            A snapshot of milestones that have shaped my journey so far.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`relative p-1 rounded-2xl bg-gradient-to-r from-blue-600/60 via-purple-600/60 to-pink-500/60 shadow-xl`}
            >
              <div
                className={`h-full rounded-2xl p-6 flex flex-col justify-between ${
                  darkMode ? "bg-gray-900/90" : "bg-white/95"
                }`}
              >
                <div>
                  <p
                    className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
                      darkMode ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    {item.tag}
                  </p>
                  <h2
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 ${
                      darkMode
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    View details
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

