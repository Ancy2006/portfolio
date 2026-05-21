import React from "react";

function Education() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#030712] px-6 relative overflow-hidden py-20">
      
      {/* 🌌 DYNAMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e1b4b,#030712_70%)]"></div>

      {/* ☄️ ANIMATED FLOATING GLOW BLOBS (Home & About Theme Matching) */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] top-[-10%] left-[-10%] animate-[pulse_15s_infinite_alternate] mix-blend-screen pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] bottom-[-10%] right-[-10%] animate-[bounce_12s_infinite_alternate] mix-blend-screen pointer-events-none"></div>

      {/* 🕸️ PREMIUM MESH/GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="relative max-w-5xl w-full z-10">

        {/* 🔥 TITLE */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/20 tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
            Education
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4 mx-auto"></div>
        </div>

        {/* 🧭 TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* Central Timeline Line (Responsive) */}
          <div className="absolute left-4 md:left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent transform md:translate-x-[-50%]"></div>

          {/* 📚 ITEMS */}
          <div className="space-y-12 md:space-y-16">

            {/* ITEM 1: Diploma */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative pl-10 md:pl-0">

              {/* LEFT EMPTY (For wide screens) */}
              <div className="hidden md:block w-1/2"></div>

              {/* CENTER DOT */}
              <div className="absolute left-2 md:left-1/2 top-2 md:top-auto z-10 transform -translate-x-1/2">
                <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_20px_#22d3ee] border-4 border-[#030712]"></div>
              </div>

              {/* RIGHT CARD */}
              <div className="w-full md:w-1/2 md:pl-12">
                <div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:scale-[1.02] hover:border-cyan-500/40 transition duration-300 group">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition duration-300">
                    Diploma in Computer Engineering
                  </h3>
                  <p className="text-gray-400 mt-2 font-medium">
                    Women's Polytechnic College
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full tracking-wide">
                      2024 - 2027
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ITEM 2: Plus Two */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative pl-10 md:pl-0">

              {/* LEFT CARD */}
              <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1">
                <div className="bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:scale-[1.02] hover:border-purple-500/40 transition duration-300 group md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition duration-300">
                    Higher Secondary (Plus Two)
                  </h3>
                  <p className="text-gray-400 mt-2 font-medium">
                    New HSS Nellimoodu
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full tracking-wide">
                      2022 - 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* CENTER DOT */}
              <div className="absolute left-2 md:left-1/2 top-2 md:top-auto z-10 transform -translate-x-1/2 order-1 md:order-2">
                <div className="w-5 h-5 bg-purple-400 rounded-full animate-pulse shadow-[0_0_20px_#c084fc] border-4 border-[#030712]"></div>
              </div>

              {/* RIGHT EMPTY (For wide screens) */}
              <div className="hidden md:block w-1/2 order-3"></div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;