import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-16 bg-[rgb(252,194,215)] text-black">
        <h2 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">Contact Me</h2>
      <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-12 text-black">
       
        <p className="mb-8 text-lg text-center">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-12 text-lg font-medium">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-pink-400" />
            <a href="mailto:kanizshuva7@gmail.com.com" className="hover:underline">
              kanizshuva7@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-pink-400" />
            <a href="tel:+8801878353400" className="hover:underline">
              +880 1878 353400
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-pink-400" />
            <a href="https://wa.me/8801878353400" target="_blank" rel="noreferrer" className="hover:underline">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded h-32"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 hover:bg-pink-400 px-6 py-3 rounded text-black font-semibold transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
