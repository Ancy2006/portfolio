import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  const text = "Ancy k!";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#030712] text-gray-300 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      {/* 🏠 HERO SECTION */}
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden bg-[#030712]"
      >
        {/* 🌌 DYNAMIC GRADIENT BASE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b,#030712_70%)]"></div>

        {/* ☄️ ANIMATED FLOATING GLOW BLOBS */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] top-[-10%] left-[-10%] animate-[bounce_15s_infinite_alternate] mix-blend-screen pointer-events-none"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] bottom-[-20%] right-[-10%] animate-[pulse_10s_infinite_alternate] mix-blend-screen pointer-events-none"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] top-[40%] left-[50%] animate-[spin_25s_linear_infinite] mix-blend-screen pointer-events-none"></div>

        {/* 🕸️ PREMIUM MESH/GRID OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)]"></div>

        {/* 💎 MAIN CONTAINER */}
        <div className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-20 md:py-0">
          
          {/* 🧠 LEFT COLUMN: CONTENT */}
          <div className="flex flex-col justify-center space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/20 tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                Available for Opportunity
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  {displayText}
                </span>
                <span className="ml-1 text-cyan-400 animate-[pulse_0.8s_infinite]">|</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold tracking-wide bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Software Developer <span className="text-purple-500">•</span> UI Engineer
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-normal opacity-90">
              I design and develop modern, scalable web applications with a strong
              focus on clean UI, performance, and user experience. Passionate about
              building elegant solutions using React and Tailwind CSS.
            </p>

            {/* 📊 STATS */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
              <div className="text-center p-2">
                <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">10+</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div className="text-center p-2 border-x border-white/[0.08]">
                <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">1+</h3>
                <p className="text-cyan-500/70 text-xs font-bold uppercase tracking-wider mt-1">Yr Learning</p>
              </div>
              <div className="text-center p-2">
                <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">100%</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Passion</p>
              </div>
            </div>

            {/* 🚀 BUTTONS */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button className="relative group overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] tracking-wide">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                <span className="relative z-10">Hire Me</span>
              </button>

              <button className="px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/[0.05] hover:border-cyan-400/50 transition duration-300 backdrop-blur-md tracking-wide">
                Download CV
              </button>
            </div>
          </div>

          {/* 🖼 RIGHT COLUMN: PROFILE IMAGE (ഇവിടെ ഇമേജ് ഉണ്ട്) */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-40 blur-sm animate-[spin_20s_linear_infinite] group-hover:opacity-80 transition duration-700"></div>
              <div className="absolute inset-[-15px] rounded-full border-2 border-dashed border-white/10 animate-[spin_50s_linear_infinite_reverse]"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>

              <div className="w-full h-full rounded-full overflow-hidden p-2.5 bg-[#030712] border border-white/10 shadow-2xl relative z-10">
                <img
                  src="./image/ancy.jpeg"
                  alt="Ancy K"
                  className="w-full h-full rounded-full object-cover transition duration-700 ease-out transform group-hover:scale-105"
                />
              </div>
              <div className="absolute w-2.5 h-2.5 bg-cyan-400 rounded-full top-8 left-8 animate-pulse shadow-[0_0_15px_#22d3ee]"></div>
            </div>
          </div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section id="about" className="scroll-mt-24"><About /></section>
      <section id="education" className="scroll-mt-24"><Education /></section>
      <section id="skills" className="scroll-mt-24"><Skills /></section>
      <section id="contact" className="scroll-mt-24"><Contact /></section>
    </div>
  );
}

export default Home;