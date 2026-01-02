"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* LOGO */}
        <h1 className="text-blue-500 font-extrabold text-2xl tracking-wide">
          Priyadharshini Dhanasekaran
        </h1>

        {/* MENU */}
        <div className="flex gap-8 text-gray-200 font-semibold tracking-wide text-sm uppercase">
          
          <Link href="/" className="relative group">
            <span className="hover:text-blue-400 transition">Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/about" className="relative group">
            <span className="hover:text-blue-400 transition">About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/projects" className="relative group">
            <span className="hover:text-blue-400 transition">Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/achievements" className="relative group">
            <span className="hover:text-blue-400 transition">Achievements</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link href="/contact" className="relative group">
            <span className="hover:text-blue-400 transition">Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>

        </div>
      </div>
    </nav>
  );
}
