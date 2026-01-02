"use client";

import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Page() {
  return (
    <section className="min-h-screen bg-slate-900 text-white pt-28 px-4 md:px-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-blue-500 blur-3xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

            <img
              src="/Priya.jpeg"
              alt="Priyadharshini"
              className="relative w-full max-w-md mx-auto h-[420px] object-cover rounded-3xl border-4 border-blue-500 shadow-2xl transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          {/* Greeting */}
          <h3 className="text-blue-400 text-lg mb-2">Hi, I am</h3>

          {/* Name */}
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            Priyadharshini
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl mb-6 gradient-glow font-bold">
            Full Stack Web Developer
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
            Passionate IT student building smart Web, AI & IoT applications.
            <br />
            Love to design responsive, user-friendly and secure websites.
            <br />
            Dreaming to become a high-package software engineer.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/priyadharshini-dhanasekaran-778017283"
              target="_blank"
              className="p-4 bg-blue-600 rounded-full hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://github.com/priyadharshini0104"
              target="_blank"
              className="p-4 bg-gray-700 rounded-full hover:scale-110 transition duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="PRIYADHARSHINI.D-CV.pdf"
              download
              className="p-4 bg-green-600 rounded-full hover:scale-110 transition duration-300"
            >
              <FaDownload size={22} />
            </a>
          </div>

          {/* HIRE ME BUTTON */}
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-12 py-3 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-400 shadow-[0_0_35px_rgba(99,102,241,.7)] hover:scale-110 transition transform duration-300 font-semibold text-lg"
          >
            Hire Me
          </button>

        </div>
      </div>
    </section>
  );
}
