"use client";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-blue-500/30 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex justify-center items-center">

        <p className="text-gray-400 text-sm text-center leading-relaxed">
          © {new Date().getFullYear()} All Rights Reserved. <br />
          Designed & Developed with by <span className="text-blue-400 font-semibold">Priya</span>
        </p>

      </div>
    </footer>
  );
}
