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
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500 blur-[140px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 blur-[120px] opacity-20 bottom-10 right-10"></div>

      {/* CARD */}
      <section className="relative z-10 max-w-4xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14">

        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text mb-8">
          Contact Me
        </h2>

        {/* INFO */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-gray-300">📧 ancymalu4@gmail.com</p>
          <p className="text-gray-300">📞 9061516878</p>
          <p className="text-gray-300">📍 Kerala, India</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none"
          />

          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl font-semibold hover:scale-105 transition"
          >
            Send Message 🚀
          </button>

          {/* SUCCESS */}
          {success && (
            <p className="text-green-400 text-center">
              ✅ Message sent successfully!
            </p>
          )}

        </form>

      </section>
    </div>
  );
}

export default Contact;