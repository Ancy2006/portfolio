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
        className="w-full min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#020617] to-black text-white flex items-center justify-center px-6 md:px-16 relative overflow-hidden"
      >

        {/* 🌌 Soft Elegant Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,116,139,0.12),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(30,41,59,0.25),transparent_50%)]"></div>

        {/* 💎 MAIN CONTAINER */}
        <div className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center">

          {/* 🧠 LEFT SIDE */}
          <div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="ml-1 animate-pulse text-gray-400">|</span>
            </h1>

            <h2 className="mt-4 text-xl text-gray-400">
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
                <h3 className="text-2xl font-semibold">10+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">1+</h3>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">100%</h3>
                <p className="text-gray-400 text-sm">Passion</p>
              </div>
            </div>

            {/* 🚀 BUTTONS */}
            <div className="mt-10 flex gap-5">

              <button className="px-7 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
                Hire Me
              </button>

              <button className="px-7 py-3 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 transition">
                Download CV
              </button>

            </div>
          </div>

          {/* 🖼 RIGHT SIDE */}
          <div className="flex justify-center">
            <div className="relative">

              {/* 🔵 Elegant Ring */}
              <div className="absolute inset-0 rounded-full border border-gray-500 animate-[spin_20s_linear_infinite]"></div>

              {/* 🧑 IMAGE */}
              <img
                src="./image/ancy.jpeg"
                alt="profile"
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border border-gray-600 shadow-xl"
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