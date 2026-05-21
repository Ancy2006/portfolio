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
    <div className="bg-[#090d16] text-gray-300 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />

      {/* 🏠 HERO SECTION */}
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#090d16] to-[#020617]"
      >
        {/* 🕸️ CLASSY GRID OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* ✨ AMBIENT GLOW CORES */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] -top-20 -left-20 pointer-events-none"></div>
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] bottom-20 -right-10 pointer-events-none"></div>

        {/* 💎 MAIN CONTAINER */}
        <div className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-20 md:py-0">
          
          {/* 🧠 LEFT COLUMN: CONTENT */}
          <div className="flex flex-col justify-center space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 tracking-wider uppercase backdrop-blur-sm animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Available for Opportunity
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="ml-1 text-cyan-400 animate-[pulse_1s_infinite]">|</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-medium tracking-wide text-gray-400">
                Software Developer <span className="text-cyan-500/60">•</span> UI Engineer
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-light">
              I design and develop modern, scalable web applications with a strong
              focus on clean UI, performance, and user experience. Passionate about
              building elegant solutions using React and Tailwind CSS.
            </p>

            {/* 📊 STATS (GLASSMORPHISM) */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-2xl">
              <div className="text-center p-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">10+</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div className="text-center p-2 border-x border-white/[0.05]">
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-tight">1+</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Yr Learning</p>
              </div>
              <div className="text-center p-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">100%</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">Passion</p>
              </div>
            </div>

            {/* 🚀 BUTTONS */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button className="relative group overflow-hidden px-8 py-3.5 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:bg-cyan-400 hover:text-black shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] tracking-wide">
                Hire Me
              </button>

              <button className="px-8 py-3.5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/[0.04] hover:border-cyan-400/50 transition duration-300 backdrop-blur-sm tracking-wide">
                Download CV
              </button>
            </div>
          </div>

          {/* 🖼 RIGHT COLUMN: PREMIUM PROFILE IMAGE */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              
              {/* Outer Elegant Ring */}
              <div className="absolute inset-[-10px] rounded-full border border-dashed border-cyan-500/30 animate-[spin_40s_linear_infinite] group-hover:border-cyan-400/50 transition duration-700"></div>
              
              {/* Inner Solid Tech Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/5 group-hover:border-cyan-400/30 transition duration-500"></div>

              {/* Back Light Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-3xl opacity-10 group-hover:opacity-30 transition duration-700"></div>

              {/* Main Image Wrapper */}
              <div className="w-full h-full rounded-full overflow-hidden p-3 bg-[#090d16] border border-white/10 shadow-2xl relative z-10">
                <img
                  src="./image/ancy.jpeg"
                  alt="Ancy K"
                  className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition duration-700 ease-out transform group-hover:scale-105"
                />
              </div>

              {/* Minimalist Floating Elements */}
              <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-6 left-6 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
              <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full bottom-12 right-6 animate-ping"></div>
            </div>
          </div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="education" className="scroll-mt-24 font-sans">
        <Education />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
}

export default Home;