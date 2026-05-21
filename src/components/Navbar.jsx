import React, { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["home", "about", "education", "skills", "contact"];

  // 🔥 Scroll detection + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚀 SMOOTH SCROLL WITH OFFSET (LIKE PAGE TRANSITION)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const yOffset = -80; // navbar height adjust
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-center px-6 py-4 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/40 shadow-lg" : ""
      }`}
    >
      {/* MAIN NAV */}
      <div className="w-full max-w-6xl flex items-center justify-between border border-white/10 bg-white/5 rounded-2xl px-6 py-3">

        {/* LOGO */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text cursor-pointer"
        >
          Ancy k!
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative cursor-pointer capitalize group"
            >
              <span
                className={`transition duration-300 ${
                  active === item ? "text-white" : "group-hover:text-white"
                }`}
              >
                {item}
              </span>

              {/* 🔥 underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-pink-400 to-cyan-400 transition-all duration-300 ${
                  active === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}

        </ul>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] max-w-sm bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:hidden">

          <ul className="flex flex-col gap-6 text-center text-gray-300">

            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="cursor-pointer capitalize hover:text-white transition"
              >
                {item}
              </li>
            ))}

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;