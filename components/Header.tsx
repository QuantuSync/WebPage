"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-wider text-white">
          SASCOI
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a
            href="#about"
            className="text-gray-300 hover:text-white hover:scale-105 transition"
          >
            About
          </a>
          <a
            href="#technology"
            className="text-gray-300 hover:text-white hover:scale-105 transition"
          >
            Technology
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-white hover:scale-105 transition"
          >
            How it Works
          </a>
          <a
            href="#use-cases"
            className="text-gray-300 hover:text-white hover:scale-105 transition"
          >
            Use Cases
          </a>
          <a
            href="#team"
            className="text-gray-300 hover:text-white hover:scale-105 transition"
          >
            Team
          </a>
          <a
            href="#timeline"
            className="text-gray-300 hover:text-white hover:scale-105 transition"
          >
            Roadmap
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white hover:scale-105 transition"
          >
            Contact
          </a>
        </nav>
        <a
          href="https://www.indiegogo.com/projects/sascoi-quantum-ai-for-transforming-brain-health/x/38305674#/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 text-sm font-medium"
        >
          Get Involved
        </a>
      </div>
    </header>
  );
}
