"use client";

import Navbar from "../Components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [skillWidths, setSkillWidths] = useState({
    frontend: "0%",
    backend: "0%",
    java: "0%",
    python: "0%",
    c: "0%",
    cpp: "0%",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSkillWidths({
        frontend: "80%",
        backend: "60%",
        java: "83%",
        python: "66%",
        c: "50%",
        cpp: "50%",
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-900 text-white pt-32 px-6 md:px-10 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          {/* About Me Header */}
          <h1 className="text-5xl text-blue-400 mb-8 text-center">About Me</h1>

          {/* Intro Paragraph */}
          <p className="text-gray-300 mb-12 text-center text-lg">
            I'm an enthusiastic IT undergraduate with a passion for{" "}
            <span className="font-semibold">Full Stack Web Development</span>,{" "}
            <span className="font-semibold">Smart Automation</span>, and{" "}
            <span className="font-semibold">AI projects</span>. I have maintained
            a CGPA of <span className="font-bold text-blue-400">9.0</span>, actively
            participated in conferences, hackathons, symposiums, and various
            contests, learning from both successes and failures. I strive to be an
            active learner, exploring new technologies and challenging myself to
            grow every day. My ultimate goal is to become a skilled{" "}
            <span className="font-semibold">Full Stack Web Developer</span>.
          </p>

          {/* Youth Talk 2025 Highlight */}
          <p className="mb-20 text-center text-lg">
            And also, I was selected as a{" "}
            <span
              className="underline decoration-blue-400 decoration-4 font-bold animate-pulse cursor-pointer"
              onClick={() =>
                window.open("https://youtu.be/BaEHnSdtQ6k", "_blank")
              }
            >
              Pre-Finalist at Youth Talk 2025
            </span>{" "}
            for my talk on <span className="italic">"When I Grow Up"</span>. This
            experience reinforced my belief in dreaming big and working hard.
          </p>

        {/* Internships & Events Cards */}
<div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-24">
  {/* Conferences Card */}
  <div className="bg-slate-800 rounded-2xl p-8 flex flex-col items-center text-center transform -translate-x-0 opacity-0 animate-slide-left hover:scale-105 transition-transform duration-700 max-w-sm">
    <Image
      src="/conference.jpeg"
      alt="Conference"
      width={200}
      height={200}
      className="rounded-xl mb-6"
    />
    <h2 className="text-blue-400 text-3xl font-bold mb-4">Conferences</h2>
    <p className="text-gray-300">
      Presented my paper <span className="italic">"Genetic Engineering for Climatic Resilient Crops"</span> at <span className="font-semibold">Knowledge Institute of Technology</span>. Conducted extensive research, referenced multiple studies, and gained deep insights in sustainable agriculture and climate-resilient innovations.
    </p>
  </div>

  {/* Hackathons Card */}
  <div className="bg-slate-800 rounded-2xl p-8 flex flex-col items-center text-center transform translate-x-0 opacity-0 animate-slide-right hover:scale-105 transition-transform duration-700 max-w-sm">
    <Image
      src="/Hackathon.jpeg"
      alt="Hackathon"
      width={200}
      height={200}
      className="rounded-xl mb-6"
    />
    <h2 className="text-blue-400 text-3xl font-bold mb-4">Hackathons</h2>
    <p className="text-gray-300">
      Attended an intense 24-36 hours hackathon, collaborating with teammates to design real-world solutions. Strengthened coding, problem-solving, time management, and teamwork skills, gaining invaluable hands-on experience.
    </p>
  </div>
</div>

          {/* Skills Section */}
          <h2 className="text-3xl text-blue-400 mb-10 text-center">Skills</h2>
          <div className="space-y-6 w-full">
            {/* Frontend */}
            <div>
              <p className="text-gray-300 mb-2 text-center">
                Frontend (HTML, CSS, JS, React, Next.js)
              </p>
              <div className="w-full bg-gray-700 rounded-full h-5">
                <div
                  className="bg-blue-400/70 h-5 rounded-full transition-all duration-1000"
                  style={{ width: skillWidths.frontend }}
                ></div>
              </div>
            </div>
            {/* Backend */}
            <div>
              <p className="text-gray-300 mb-2 text-center">
                Backend (Node.js, MongoDB, SQL)
              </p>
              <div className="w-full bg-gray-700 rounded-full h-5">
                <div
                  className="bg-blue-400/70 h-5 rounded-full transition-all duration-1000"
                  style={{ width: skillWidths.backend }}
                ></div>
              </div>
            </div>
            {/* Languages */}
            <div>
              <p className="text-gray-300 mb-2 text-center">Languages</p>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Java</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-blue-400/70 h-4 rounded-full transition-all duration-1000"
                    style={{ width: skillWidths.java }}
                  ></div>
                </div>

                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Python</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-blue-400/70 h-4 rounded-full transition-all duration-1000"
                    style={{ width: skillWidths.python }}
                  ></div>
                </div>

                <div className="flex justify-between text-gray-300 text-sm">
                  <span>C</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-blue-400/70 h-4 rounded-full transition-all duration-1000"
                    style={{ width: skillWidths.c }}
                  ></div>
                </div>

                <div className="flex justify-between text-gray-300 text-sm">
                  <span>C++</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-blue-400/70 h-4 rounded-full transition-all duration-1000"
                    style={{ width: skillWidths.cpp }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Gap */}
          <div className="h-40"></div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-right {
          0% {
            transform: translateX(20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-left {
          animation: slide-left 1s forwards;
        }
        .animate-slide-right {
          animation: slide-right 1s forwards;
        }
      `}</style>
    </>
  );
}
