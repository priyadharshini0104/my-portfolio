"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Achievements", link: "/achievements" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

        {/* LOGO */}
        <h1 className="text-blue-500 font-extrabold text-xl md:text-2xl tracking-wide">
          Priyadharshini
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-200 font-semibold tracking-wide text-sm uppercase">
          {menu.map((m) => (
            <Link key={m.name} href={m.link} className="relative group">
              <span className="hover:text-blue-400 transition">{m.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col items-center bg-[#020617]/95 py-6 space-y-6 text-gray-200 font-semibold uppercase">
          {menu.map((m) => (
            <Link key={m.name} href={m.link} onClick={() => setOpen(false)} className="hover:text-blue-400 transition">
              {m.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
