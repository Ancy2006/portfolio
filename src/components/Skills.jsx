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
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

      {/* 🌌 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 🌈 GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500 blur-[150px] opacity-30 top-0 left-0 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-cyan-500 blur-[130px] opacity-20 bottom-0 right-0 animate-pulse"></div>

      {/* 💎 CARD */}
      <section className="relative z-10 w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-[0_0_80px_rgba(0,255,255,0.08)]">

        {/* 🔥 TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text mb-14">
          Skills
        </h2>

        {/* 🚀 SKILLS */}
        <div className="space-y-10">

          {skills.map((skill, index) => (
            <div key={index} className="group">

              {/* TOP */}
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-gray-200 group-hover:text-cyan-400 transition">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-400">
                  {progress[index]}%
                </span>
              </div>

              {/* BAR */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden relative">

                <div
                  className="h-full bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${progress[index]}%` }}
                >
                  {/* ✨ SHINE EFFECT */}
                  <div className="absolute inset-0 bg-white/30 blur-md opacity-30 animate-pulse"></div>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* 💎 FLOATING TAGS */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-2 bg-white/10 border border-white/10 rounded-full text-gray-200 
              hover:bg-gradient-to-r hover:from-pink-400 hover:to-cyan-400 hover:text-black 
              hover:scale-110 hover:shadow-[0_0_20px_cyan] transition duration-300 cursor-pointer"
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