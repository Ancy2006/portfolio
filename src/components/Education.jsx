import React from "react";

function Education() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black px-6 relative overflow-hidden">

      {/* 🌌 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 🌈 Glow */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500 blur-[140px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 blur-[120px] opacity-20 bottom-10 right-10"></div>

      <div className="relative max-w-5xl w-full">

        {/* 🔥 TITLE */}
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text mb-20">
          Education
        </h2>

        {/* 🧭 TIMELINE LINE */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/20 transform -translate-x-1/2"></div>

        {/* 📚 ITEMS */}
        <div className="space-y-16">

          {/* ITEM 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* LEFT EMPTY */}
            <div className="hidden md:block w-1/2"></div>

            {/* CENTER DOT */}
            <div className="relative z-10">
              <div className="w-5 h-5 bg-pink-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(255,0,150,0.8)]"></div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition duration-300">

                <h3 className="text-xl font-bold text-cyan-400">
                  Diploma in Computer Engineering
                </h3>

                <p className="text-gray-300 mt-2">
                  Women's Polytechnic College
                </p>

                <span className="inline-block mt-3 px-4 py-1 text-sm bg-pink-400/20 text-pink-300 rounded-full">
                  2024 - 2027
                </span>

              </div>
            </div>

          </div>

          {/* ITEM 2 */}
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* LEFT CARD */}
            <div className="w-full md:w-1/2 md:pr-10 mt-6 md:mt-0 order-2 md:order-1">
              <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-pink-500/20 transition duration-300">

                <h3 className="text-xl font-bold text-pink-400">
                  Higher Secondary (Plus Two)
                </h3>

                <p className="text-gray-300 mt-2">
                  New HSS Nellimoodu
                </p>

                <span className="inline-block mt-3 px-4 py-1 text-sm bg-cyan-400/20 text-cyan-300 rounded-full">
                  2022 - 2024
                </span>

              </div>
            </div>

            {/* CENTER DOT */}
            <div className="relative z-10 order-1 md:order-2">
              <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(0,255,255,0.8)]"></div>
            </div>

            {/* RIGHT EMPTY */}
            <div className="hidden md:block w-1/2 order-3"></div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Education;