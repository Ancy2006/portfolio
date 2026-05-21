import React, { useEffect, useState } from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "C++", level: 75 },
    { name: "C Programming", level: 70 },
  ];

  const [progress, setProgress] = useState(
    skills.map(() => 0)
  );

  // 🚀 Animate on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skills.map((s) => s.level));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#030712] flex items-center justify-center px-6 relative overflow-hidden py-20">

      {/* 🌌 DYNAMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,#030712_70%)]"></div>

      {/* ☄️ ANIMATED FLOATING GLOW BLOBS (Theme Matching) */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] top-[-10%] left-[-10%] animate-[bounce_15s_infinite_alternate] mix-blend-screen pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] bottom-[-10%] right-[-10%] animate-[pulse_12s_infinite_alternate] mix-blend-screen pointer-events-none"></div>

      {/* 🕸️ PREMIUM MESH/GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      {/* 💎 CARD (HIGH GLOSS GLASSMORPHISM) */}
      <section className="relative z-10 w-full max-w-5xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-3xl p-8 md:p-16 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* 🔥 TITLE */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-400 border border-purple-500/20 tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
            Skills & Abilities
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4 mx-auto"></div>
        </div>

        {/* 🚀 SKILLS LIST */}
        <div className="space-y-8">

          {skills.map((skill, index) => (
            <div key={index} className="group">

              {/* TOP: Name & Percentage */}
              <div className="flex justify-between mb-2.5 items-end">
                <span className="text-base md:text-lg font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-xs md:text-sm font-mono text-cyan-400/80 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
                  {progress[index]}%
                </span>
              </div>

              {/* BAR BACKGROUND */}
              <div className="w-full h-2.5 bg-white/[0.03] border border-white/5 rounded-full overflow-hidden relative p-[1px]">

                {/* ANIMATED PROGRESS FILL */}
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  style={{ width: `${progress[index]}%` }}
                >
                  {/* ✨ INNER SHINE EFFECT */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] animate-[shimmer_2s_infinite]"></div>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* 💎 BOTTOM FLOATING TAGS */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 border-t border-white/5 pt-10">

          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-white/[0.02] border border-white/10 rounded-xl text-sm font-medium text-gray-400 
              hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:border-transparent
              hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 cursor-pointer"
            >
              {skill.name}
            </span>
          ))}

        </div>

       </section>
    </div>
  );
}

export default Skills;