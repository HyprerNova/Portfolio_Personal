"use client";

import { useTheme } from "@/components/ThemeContext";
import Image from "next/image";

const Life = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="life"
      className={`life flex justify-center items-center min-h-screen py-20 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
              darkMode ? "dark:text-white" : "text-black"
            }`}
          >
            Life
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div
          className={`p-8 rounded-2xl backdrop-blur-sm shadow-xl ${
            darkMode ? "bg-gray-800/50" : "bg-white/50"
          }`}
        >
          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Outside of work, I love to run, read books and hit the gym. One of
            my favorite hobbies is playing with remote controlled helicopters
            and cars.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <h2
              className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              My YouTube channel
            </h2>

            <div className="w-full max-w-3xl mx-auto">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/BlFTuiuf430"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@HardCode_101"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Visit my YouTube channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;
