import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {

  // ⌨️ Typing Effect
  const text = "Ancy k !";
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
    <div>
      <Navbar />

      {/* 🏠 HOME */}
      <section
        id="home"
        className="w-full min-h-screen bg-black text-white flex items-center justify-center px-4 md:px-10 relative overflow-hidden"
      >

        {/* 🌌 GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* 🌈 Glow */}
        <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[140px] opacity-30 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10 animate-pulse"></div>

        {/* 💎 HERO CARD */}
        <div className="relative z-10 w-full max-w-7xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl px-8 py-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center gap-12 shadow-[0_0_60px_rgba(0,255,255,0.1)]">

          {/* 🧠 LEFT */}
          <div className="flex-1 text-center md:text-left">

            {/* 🔥 BIG NAME */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              {displayText}
              <span className="text-white animate-pulse">|</span>
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl text-cyan-300">
              Aspiring Software Developer
            </h2>

            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
              I create <span className="text-cyan-400 font-semibold">modern UI</span> and 
              <span className="text-pink-400 font-semibold"> interactive web apps</span> using 
              React & Tailwind CSS.
            </p>

            {/* 🚀 BUTTONS */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                Hire Me
              </button>

              <button className="px-6 py-3 border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300">
                Download CV
              </button>
            </div>

          </div>

          {/* 🖼 RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">

              {/* 🔵 ROTATING RING (FIXED) */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-[spin_12s_linear_infinite]"></div>

              {/* ✨ GLOW */}
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

              {/* 🌟 PARTICLES */}
              <div className="absolute w-3 h-3 bg-cyan-300 rounded-full top-2 left-10 animate-bounce"></div>
              <div className="absolute w-2 h-2 bg-pink-400 rounded-full bottom-10 right-4 animate-ping"></div>

              {/* 🧑 IMAGE */}
              <img
                src="./image/ancy.jpeg"
                alt="profile"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition duration-500"
              />

            </div>
          </div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="education" className="scroll-mt-24">
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