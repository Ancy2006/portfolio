import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#030712] px-6 relative overflow-hidden py-20 md:py-0">
      
      {/* 🌌 DYNAMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,#030712_70%)]"></div>

      {/* ☄️ ANIMATED FLOATING GLOW BLOBS (Moving Background - Home Theme Matching) */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] top-[-10%] right-[-10%] animate-[bounce_18s_infinite_alternate] mix-blend-screen pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] bottom-[-10%] left-[-10%] animate-[pulse_12s_infinite_alternate] mix-blend-screen pointer-events-none"></div>

      {/* 🕸️ PREMIUM MESH/GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      {/* 💎 MAIN CARD (HIGH GLOSS GLASSMORPHISM) */}
      <section className="relative z-10 max-w-6xl w-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* 🧠 LEFT TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-400 border border-purple-500/20 tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            My Biography
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            About Me
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-8 mx-auto md:mx-0"></div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-normal opacity-90">
            I am a <span className="text-cyan-400 font-semibold shadow-[0_0_15px_rgba(34,211,238,0.1)]">Computer Engineering student</span> passionate about
            <span className="text-purple-400 font-semibold"> web development</span>,
            programming, and building <span className="text-indigo-400 font-semibold">modern UI applications</span>. 
            I love turning complex problems into beautiful and intuitive digital experiences.
          </p>

          {/* 🎯 SKILLS BADGES */}
          <div className="flex flex-wrap gap-3 mt-10 justify-center md:justify-start">
            
            <span className="px-5 py-2.5 bg-white/[0.03] border border-white/10 text-gray-300 font-medium rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md cursor-pointer">
              Web Development
            </span>

            <span className="px-5 py-2.5 bg-white/[0.03] border border-white/10 text-gray-300 font-medium rounded-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md cursor-pointer">
              React JS
            </span>

            <span className="px-5 py-2.5 bg-white/[0.03] border border-white/10 text-gray-300 font-medium rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md cursor-pointer">
              UI Design
            </span>

          </div>

        </div>

        {/* 🖼 RIGHT IMAGE / VISUAL PLACEHOLDER */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 group">
            
            {/* Outer Purple & Cyan Neon Rotating Ring */}
            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 opacity-40 blur-sm animate-[spin_25s_linear_infinite] group-hover:opacity-80 transition duration-700"></div>
            
            {/* Inner Dashed Border */}
            <div className="absolute inset-[-15px] rounded-full border-2 border-dashed border-white/10 animate-[spin_40s_linear_infinite_reverse]"></div>

            {/* Behind Glow overlay */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-cyan-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

            {/* Main Image Wrapper */}
            <div className="w-full h-full rounded-full overflow-hidden p-2 bg-[#030712] border border-white/10 shadow-2xl relative z-10">
              <img
                src="./image/ancy.jpeg" 
                alt="Ancy K"
                className="w-full h-full rounded-full object-cover transition duration-700 ease-out transform group-hover:scale-105"
              />
            </div>

            {/* Floating Dots */}
            <div className="absolute w-2 h-2 bg-purple-400 rounded-full top-6 right-6 animate-pulse shadow-[0_0_10px_#c084fc]"></div>
            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full bottom-10 left-6 animate-ping shadow-[0_0_10px_#22d3ee]"></div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default About;