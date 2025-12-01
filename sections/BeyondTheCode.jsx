"use client";

import { useTheme } from "@/components/ThemeContext";

const BeyondTheCode = () => {
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
            This is where I talk about the parts of my life that don&apos;t
            always show up in repositories or resumes — my interests, hobbies,
            and what keeps me curious outside of work. You can fill this space
            with things like books you enjoy, sports you follow, creative
            projects, music, or anything else that reflects who you are beyond
            the keyboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondTheCode;
