import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black px-6 relative overflow-hidden">

      {/* 🌌 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 🌈 GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[140px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10"></div>

      {/* 💎 MAIN CARD */}
      <section className="relative z-10 max-w-6xl w-full bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_60px_rgba(0,255,255,0.1)]">

        {/* 🧠 LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text mb-6">
            About Me
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full mb-6 mx-auto md:mx-0"></div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I am a <span className="text-cyan-400 font-semibold">Computer Engineering student</span> passionate about
            <span className="text-pink-400 font-semibold"> web development</span>,
            programming and building <span className="text-cyan-400 font-semibold">modern UI applications</span>.
          </p>

          {/* 🎯 SKILLS BADGES */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">

            <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-cyan-400 hover:text-black transition transform hover:-translate-y-1">
              Web Development
            </span>

            <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-pink-400 hover:text-black transition transform hover:-translate-y-1">
              React JS
            </span>

            <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-purple-400 hover:text-black transition transform hover:-translate-y-1">
              UI Design
            </span>

          </div>

        </div>

        {/* 🖼 RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">

            {/* 🔵 ROTATING RING */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin-slow"></div>

            {/* ✨ GLOW */}
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

            
            {/* 🧑 IMAGE */}

          </div>
        </div>

      </section>
    </div>
  );
}

export default About;