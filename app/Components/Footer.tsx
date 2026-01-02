"use client";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-blue-500/30 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 flex flex-col items-center text-center">

        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          © {new Date().getFullYear()} All Rights Reserved. <br />
          Designed & Developed by{" "}
          <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
            Priya
          </span>
        </p>

        {/* Optional Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-400 text-sm md:text-base">
          <a href="#" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" target="_blank" className="hover:text-blue-400 transition-colors">Twitter</a>
        </div>

      </div>
    </footer>
  );
}
