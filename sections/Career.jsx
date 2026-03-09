"use client";

import { useTheme } from "@/components/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();
  const name = "<Navneeth/>";

  const experiences = [
    {
      period: "Now",
      title: "DevOps Intern",
      company: "Netradyne",
      description:
        "Building and maintaining cloud-native systems, CI/CD pipelines, and observability tooling while collaborating with engineers across teams.",
    },
    // {
    //   period: "Recently",
    //   title: "Cloud, DevOps & Security Explorer",
    //   company: "",
    //   description:
    //     "Diving deep into Kubernetes, Docker, cloud platforms, automation, and cybersecurity fundamentals through projects, labs, and real-world problem solving.",
    // },
    // {
    //   period: "Earlier",
    //   title: "Foundations in Software Engineering",
    //   company: "",
    //   description:
    //     "Strengthening core skills in data structures, algorithms, and system design while experimenting with web apps, scripts, and side projects.",
    // },
  ];

  return (
    <div
      id="career"
      className={`career flex justify-center items-center min-h-screen py-20 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="about_container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
              darkMode ? "dark:text-white" : "text-black"
            }`}
          >
            {name}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div
          className={`about_container_content p-8 rounded-2xl backdrop-blur-sm ${
            darkMode ? "bg-gray-800/50" : "bg-white/50"
          } shadow-xl`}
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-2 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <h2
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Passionate Software Engineer | Cloud, DevOps, & Cybersecurity
                </h2>
              </div>

              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Loving the limitless learning opportunities as a DevOps Intern
                at Netradyne.
              </p>
            </div>

            <div className="flex-1 mt-4 lg:mt-0">
              <h3
                className={`text-lg font-semibold tracking-wide uppercase ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Journey so far
              </h3>
              <div className="relative mt-6">
                <div
                  className={`absolute left-4 top-0 bottom-0 w-px ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></div>
                <div className="space-y-8">
                  {experiences.map((item, index) => (
                    <div key={index} className="relative pl-12 group">
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 ${
                          darkMode ? "border-gray-900" : "border-white"
                        } shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                      </div>
                      <p
                        className={`text-xs font-semibold tracking-widest uppercase ${
                          darkMode ? "text-blue-300" : "text-blue-600"
                        }`}
                      >
                        {item.period}
                      </p>
                      <h4
                        className={`mt-1 text-lg font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h4>
                      {item.company && (
                        <p
                          className={`text-sm mb-1 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item.company}
                        </p>
                      )}
                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about_container {
            padding: 1rem;
          }

          h1 {
            font-size: 2.5rem;
          }

          .about_container_content {
            padding: 1.5rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
