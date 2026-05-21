import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#020617] px-6 relative overflow-hidden">

      {/* 🌌 NAVY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a192f] to-[#020617]"></div>

      {/* ✨ SOFT GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-[120px] top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px] bottom-10 right-10 animate-pulse"></div>

      {/* 💎 MAIN CARD */}
      <section className="relative z-10 max-w-6xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_50px_rgba(0,255,255,0.08)]">

        {/* 🧠 LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 text-transparent bg-clip-text mb-6">
            About Me
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6 mx-auto md:mx-0"></div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            I am a{" "}
            <span className="text-cyan-300 font-semibold">
              Computer Engineering student
            </span>{" "}
            passionate about{" "}
            <span className="text-blue-300 font-semibold">
              web development
            </span>
            , programming and building{" "}
            <span className="text-cyan-400 font-semibold">
              modern UI applications
            </span>.
          </p>

          {/* 🎯 SKILLS */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">

            <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-cyan-400 hover:text-black transition transform hover:-translate-y-1">
              Web Development
            </span>

            <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-blue-400 hover:text-black transition transform hover:-translate-y-1">
              React JS
            </span>

            <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-cyan-300 hover:text-black transition transform hover:-translate-y-1">
              UI Design
            </span>

          </div>

        </div>

        {/* 🖼 RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">

            {/* 🔵 ROTATING RING (FIXED) */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-[spin_14s_linear_infinite]"></div>

            {/* ✨ GLOW */}
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

            {/* 🌟 PARTICLES */}
            <div className="absolute w-3 h-3 bg-cyan-300 rounded-full top-2 left-10 animate-bounce"></div>
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-10 right-4 animate-ping"></div>

            {/* 🧑 IMAGE */}
            <img
              src="./image/ancy.jpeg"
              alt="about"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border border-gray-700 shadow-2xl transform group-hover:scale-105 transition duration-500"
            />

          </div>
        </div>

      </section>
    </div>
  );
}

export default About;