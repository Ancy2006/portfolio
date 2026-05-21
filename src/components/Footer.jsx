import React from "react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full min-h-[60vh] bg-black text-gray-300 relative overflow-hidden flex items-center">

      {/* 🌌 BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* 🌈 GLOW EFFECTS */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500 blur-[140px] opacity-20 top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 blur-[120px] opacity-20 bottom-10 right-10"></div>

      <div className="relative z-10 w-full">

        {/* 💎 MAIN CONTENT */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">

          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

            {/* 🏢 BRAND */}
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-wide 
                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                text-transparent bg-clip-text">
                Ancy Portfolio
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                Building modern, responsive, and user-friendly web experiences 
                with clean design and efficient code.
              </p>
            </div>

            {/* 🔗 LINKS */}
            <div>
              <h3 className="font-semibold mb-4 
                bg-gradient-to-r from-cyan-400 to-pink-400 
                text-transparent bg-clip-text">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm">
                {["Home", "About", "Skills", "Contact"].map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group inline-flex items-center gap-2 transition"
                    >
                      <span className="w-0 h-[2px] bg-gradient-to-r from-pink-400 to-cyan-400 group-hover:w-6 transition-all duration-300"></span>

                      <span className="group-hover:text-cyan-400 transition">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 📞 CONTACT */}
            <div>
              <h3 className="font-semibold mb-4 
                bg-gradient-to-r from-purple-400 to-cyan-400 
                text-transparent bg-clip-text">
                Contact
              </h3>

              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-pink-400 transition">
                  ancymalu4@gmail.com
                </li>

                <li className="hover:text-cyan-400 transition font-medium">
                  +91 9061516878
                </li>

                <li className="hover:text-purple-400 transition">
                  Kerala, India
                </li>
              </ul>
            </div>

          </div>

          {/* 🔻 BOTTOM */}
          <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Ancy. All rights reserved.
            </p>

            <button
              onClick={scrollTop}
              className="px-6 py-2 rounded-lg 
              bg-gradient-to-r from-pink-500 to-cyan-500 
              text-white font-medium 
              hover:scale-105 transition duration-300 shadow-lg"
            >
              Back to Top ↑
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;