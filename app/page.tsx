"use client";

import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] text-white">
      <div className="grid md:grid-cols-2 h-screen">

        {/* LEFT IMAGE */}
        <div className="flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-blue-500 blur-3xl opacity-40 group-hover:opacity-70 transition"></div>

            <img
              src="/Priya.jpeg"
              alt="Priyadharshini"
              className="relative w-[380px] h-[470px] object-cover rounded-3xl border-4 border-blue-500 shadow-2xl transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center px-0">
          <h3 className="text-blue-400 text-lg mb-2">Hi, I am</h3>

          <h1 className="text-5xl font-bold mb-4">Priyadharshini</h1>

          <h2 className="text-3xl mb-5 fullstack-animate">
            Full Stack Web Developer
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
            Passionate IT student building smart Web, AI & IoT applications.
            <br />
            Love to design responsive, user-friendly and secure websites.
            <br />
            Dreaming to become a high-package software engineer.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            <a href="https://www.linkedin.com/in/priyadharshini-dhanasekaran-778017283" target="_blank" className="p-4 bg-blue-600 rounded-full hover:scale-110 transition">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/priyadharshini0104" target="_blank" className="p-4 bg-gray-700 rounded-full hover:scale-110 transition">
              <FaGithub size={22} />
            </a>
            <a href="PRIYADHARSHINI.D-CV.pdf" download className="p-4 bg-green-600 rounded-full hover:scale-110 transition">
              <FaDownload size={22} />
            </a>
          </div>

          {/* Hire Me Bottom */}
          <div className="mt-10">
            <button
              onClick={() => window.location.href = "/contact"}
              className="hire-btn"
            >
              Hire Me 
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fullstack-animate {
          font-weight: 700;
          background: linear-gradient(90deg,#38bdf8,#6366f1,#a78bfa,#38bdf8);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientRun 4s linear infinite, glow 2s ease-in-out infinite;
        }

        @keyframes gradientRun {
          0% { background-position: 0%; }
          100% { background-position: 300%; }
        }

        @keyframes glow {
          0%,100% { text-shadow:0 0 12px #38bdf8; }
          50% { text-shadow:0 0 30px #a78bfa; }
        }

        .hire-btn {
          padding: 14px 48px;
          border-radius: 999px;
          background: linear-gradient(90deg,#38bdf8,#6366f1,#a78bfa);
          box-shadow: 0 0 35px rgba(99,102,241,.7);
          font-size: 18px;
          font-weight: 600;
          transition: .4s;
        }

        .hire-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 0 55px rgba(167,139,250,.9);
        }
      `}</style>
    </main>
  );
}
