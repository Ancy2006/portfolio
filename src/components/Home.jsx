import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {

  // ✨ Typing Effect
  const text = "Ancy K";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    let typingInterval;

    const startTyping = () => {
      i = 0;
      setDisplayText("");

      typingInterval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1));
        i++;

        if (i === text.length) {
          clearInterval(typingInterval);
          setTimeout(startTyping, 120000);
        }
      }, 100);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <Navbar />

      {/* 🏠 HOME */}
      <section
        id="home"
        className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-16 relative overflow-hidden"
      >

        {/* 🌌 GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* 🌈 NEON GLOW BLOBS */}
        <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[140px] opacity-20 top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10 animate-pulse"></div>

        {/* 💎 MAIN CONTAINER */}
        <div className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(0,255,255,0.08)]">

          {/* 🧠 LEFT SIDE */}
          <div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="ml-1 animate-pulse text-cyan-300">|</span>
            </h1>

            <h2 className="mt-4 text-xl text-cyan-300">
              Software Developer • UI Designer
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              I design and develop modern, scalable web applications with a strong
              focus on clean UI, performance, and user experience. Passionate about
              building elegant solutions using React and Tailwind CSS.
            </p>

            {/* 📊 STATS */}
            <div className="mt-10 flex gap-10 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400">10+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-pink-400">1+</h3>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-400">100%</h3>
                <p className="text-gray-400 text-sm">Passion</p>
              </div>
            </div>

            {/* 🚀 BUTTONS */}
            <div className="mt-10 flex gap-5">

              <button className="px-7 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl text-white font-medium shadow-lg hover:scale-105 transition">
                Hire Me
              </button>

              <button className="px-7 py-3 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-400 hover:text-black transition">
                Download CV
              </button>

            </div>
          </div>

          {/* 🖼 RIGHT SIDE */}
          <div className="flex justify-center">
            <div className="relative group">

              {/* 🔵 ROTATING NEON RING */}
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
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-2 border-white shadow-2xl transform group-hover:scale-105 transition duration-500"
              />

            </div>
          </div>

        </div>
      </section>

      {/* 📄 OTHER SECTIONS */}
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