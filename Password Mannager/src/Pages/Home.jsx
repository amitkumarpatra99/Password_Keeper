"use client";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-40 w-72 h-72 bg-cyan-500/30 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-20 right-40 w-72 h-72 bg-blue-600/30 rounded-full blur-[150px]"></div>

      {/* Glass Card */}
      <div className="relative z-10 max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-[0_0_30px_#00ffff30] text-center flex flex-col items-center gap-6">
        <img
          src="/icons/security.png"
          alt="logo"
          className="w-16 mb-2 animate-pulse"
        />
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Password Keeper
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-md">
          Simplify your online life. Store and protect all your passwords in one
          secure, beautifully designed vault 🔐
        </p>

        {/* Call to Action */}
        <Link
          to="/mannager"
          className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-cyan-400 text-white font-semibold rounded-full px-8 py-3 shadow-[0_0_25px_#00ffff60] hover:shadow-[0_0_40px_#00ffffa0] transition-all duration-300"
        >
          🚀 Go to Password Vault
        </Link>
      </div>

      {/* Sub Text */}
      <p className="absolute bottom-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} Password Keeper by{" "}
        <span className="text-cyan-400 font-semibold hover:text-blue-300 transition">
          MR&nbsp;PATRA
        </span>
      </p>
    </div>
  );
};

export default Home;
