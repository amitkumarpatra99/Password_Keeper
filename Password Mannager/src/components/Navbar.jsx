"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // ✅ Added for navigation in React Router

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🧠 Auto-hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // hide when scrolling down
      } else {
        setHidden(false); // show when scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/10 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } bg-gradient-to-r from-[#0F2027]/80 via-[#203A43]/80 to-[#2C5364]/80`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 text-white">
        {/* 🔹 Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img
            width={35}
            className="inline mx-1 drop-shadow-lg"
            src="/icons/security.png"
            alt="logo"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 transition-all duration-300">
            Password <span className="text-white">Keeper</span>
          </h1>
        </Link>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-semibold">
          {/* 🏠 Home Button */}
          <Link
            to="/"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500/20 hover:shadow-[0_0_10px_#00ffff] transition-all duration-300"
          >
            🏠 Home
          </Link>

          <a
            href="https://github.com/amitkumarpatra99"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500/20 hover:shadow-[0_0_10px_#00ffff] transition-all duration-300"
          >
            <img
              src="/icons/Github logo.svg"
              alt="GitHub"
              className="w-7 h-7 bg-white/30 p-1 rounded-full"
            />
            <span>GitHub</span>
          </a>

          <a
            href="https://mrpatra.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500/20 hover:shadow-[0_0_10px_#00ffff] transition-all duration-300"
          >
            <img
              src="/icons/DP.jpg"
              alt="Owner"
              className="w-8 h-8 rounded-full object-cover border border-cyan-400"
            />
            <span>Owner</span>
          </a>
        </div>

        {/* 🔹 Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0A2647]/95 backdrop-blur-xl border-t border-white/10 py-3 px-6 flex flex-col gap-4 animate-slideDown">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-all duration-200"
          >
            🏠 Home
          </Link>

          <a
            href="https://github.com/amitkumarpatra99"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-all duration-200"
          >
            <img
              src="/icons/Github logo.svg"
              alt="GitHub"
              className="w-7 h-7 bg-white/30 p-1 rounded-full"
            />
            GitHub
          </a>

          <a
            href="https://mrpatra.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-all duration-200"
          >
            <img
              src="/icons/DP.jpg"
              alt="Owner"
              className="w-8 h-8 rounded-full object-cover border border-cyan-400"
            />
            Devloper
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
