import React from "react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full min-h-[50vh] bg-[#030712] text-gray-300 relative overflow-hidden flex items-center border-t border-white/[0.05]">

      {/* 🌌 DYNAMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#1e1b4b,#030712_80%)]"></div>

      {/* ☄️ FLOATING GLOW BLOBS (Theme Matching) */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px] bottom-[-10%] left-[5%] pointer-events-none"></div>
      <div className="absolute w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] bottom-[-10%] right-[5%] pointer-events-none"></div>

      {/* 🕸️ PREMIUM MESH/GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_100%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 w-full">

        {/* 💎 MAIN CONTENT */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left">

            {/* 🏢 BRAND */}
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                Ancy Portfolio
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 opacity-80">
                Building modern, responsive, and user-friendly web experiences 
                with clean design and efficient code.
              </p>
            </div>

            {/* 🔗 QUICK LINKS */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 border-b border-white/5 pb-2 max-w-[150px] mx-auto md:mx-0">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                {["Home", "About", "Skills", "Contact"].map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <span className="w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-4 transition-all duration-300 rounded-full"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 📞 CONTACT INFO */}
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 border-b border-white/5 pb-2 max-w-[150px] mx-auto md:mx-0">
                Get In Touch
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer inline-block md:block mx-2 md:mx-0">
                  <span className="mr-2">📧</span>ancymalu4@gmail.com
                </li>
                <li className="hover:text-purple-400 transition-colors duration-300 font-medium cursor-pointer inline-block md:block mx-2 md:mx-0">
                  <span className="mr-2">📞</span>+91 9061516878
                </li>
                <li className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer inline-block md:block mx-2 md:mx-0">
                  <span className="mr-2">📍</span>Kerala, India
                </li>
              </ul>
            </div>

          </div>

          {/* 🔻 BOTTOM BAR */}
          <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            
            <p className="text-xs font-mono text-gray-500 tracking-wide text-center sm:text-left">
              © {new Date().getFullYear()} Ancy K. Crafted with passion.
            </p>

            {/* 🚀 BACK TO TOP BUTTON */}
            <button
              onClick={scrollTop}
              className="relative group overflow-hidden px-5 py-2.5 bg-white/[0.02] border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-300 rounded-xl transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] backdrop-blur-md"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
              <span className="relative z-10 flex items-center gap-1.5 group-hover:scale-105 transition-transform duration-300">
                Back to Top <span className="animate-bounce">↑</span>
              </span>
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;