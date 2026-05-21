import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {

  const text = "Ancy K";
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
    <div className="bg-[#0b1120] text-gray-200">
      <Navbar />

      {/* 🏠 HERO */}
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center px-6 md:px-20"
      >

        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center">

          {/* 🧠 LEFT */}
          <div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                {displayText}
              </span>
              <span className="ml-1 animate-pulse text-gray-400">|</span>
            </h1>

            <h2 className="mt-4 text-lg md:text-xl text-gray-400 tracking-wide">
              Software Developer • UI Engineer
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              I specialize in building scalable web applications with a strong
              emphasis on clean architecture, performance, and intuitive user
              interfaces. Focused on delivering reliable and maintainable
              solutions using modern technologies like React and Tailwind CSS.
            </p>

            {/* 📊 STATS */}
            <div className="mt-10 flex gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white">10+</h3>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">1+</h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">100%</h3>
                <p className="text-gray-500 text-sm">Commitment</p>
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

          {/* 🖼 RIGHT */}
          <div className="flex justify-center">
            <div className="relative">

              {/* subtle ring */}
              <div className="absolute inset-0 rounded-full border border-gray-700"></div>

              {/* image */}
              <img
                src="./image/ancy.jpeg"
                alt="profile"
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border border-gray-700 shadow-xl"
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