import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Fill all fields!");
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#030712] flex items-center justify-center px-6 relative overflow-hidden py-20">

      {/* 🌌 DYNAMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,#030712_70%)]"></div>

      {/* ☄️ ANIMATED FLOATING GLOW BLOBS (Theme Matching) */}
      <div className="absolute w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] top-[-10%] right-[-10%] animate-[bounce_16s_infinite_alternate] mix-blend-screen pointer-events-none"></div>
      <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] bottom-[-10%] left-[-10%] animate-[pulse_14s_infinite_alternate] mix-blend-screen pointer-events-none"></div>

      {/* 🕸️ PREMIUM MESH/GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      {/* 💎 CARD (HIGH GLOSS GLASSMORPHISM) */}
      <section className="relative z-10 max-w-4xl w-full bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl rounded-3xl p-8 md:p-14 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">

        {/* 🔥 TITLE */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-400 border border-purple-500/20 tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
            Contact Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4 mx-auto"></div>
        </div>

        {/* 📊 INFO BADGES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-10">
          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 backdrop-blur-md hover:border-cyan-500/30 transition duration-300">
            <span className="text-xl block mb-1">📧</span>
            <p className="text-gray-400 text-sm font-medium">ancymalu4@gmail.com</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition duration-300">
            <span className="text-xl block mb-1">📞</span>
            <p className="text-gray-400 text-sm font-medium">+91 9061516878</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 backdrop-blur-md hover:border-indigo-500/30 transition duration-300">
            <span className="text-xl block mb-1">📍</span>
            <p className="text-gray-400 text-sm font-medium">Kerala, India</p>
          </div>
        </div>

        {/* 🚀 FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition duration-300 backdrop-blur-md"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition duration-300 backdrop-blur-md"
            />
          </div>

          <div>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition duration-300 backdrop-blur-md resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="relative w-full overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_30px_rgba(6,182,212,0.25)] tracking-wide group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Message 🚀
            </span>
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm font-medium animate-fade-in">
              ✅ Message sent successfully! Thank you.
            </div>
          )}
        </form>

      </section>
    </div>
  );
}

export default Contact;