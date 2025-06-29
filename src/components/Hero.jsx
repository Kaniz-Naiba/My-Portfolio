import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[rgb(252,194,215)] to-pink-300"
    >
      <div
        className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row items-center gap-16 min-h-[600px]"
        data-aos="fade-up"
      >
        {/* Left Side */}
        <div
          className="flex flex-col items-start max-w-lg text-black"
          data-aos="fade-right"
        >
          
          <h1 className="text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
            Tanbina Kaniz Naiba
          </h1>
          <p className="text-3xl font-semibold mb-4 text-pink-600">Web Developer</p>

          <p className="text-lg mb-6 max-w-md">
            Hi, I’m passionate about building clean and efficient web applications.
          </p>

          {/* Typewriter effect */}
          <p className="text-lg mb-8 font-mono text-gray-700">
            <Typewriter
              words={["MERN Stack Developer", "Frontend Enthusiast", "React Lover"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-8 mb-8 text-black text-3xl">
            <a
              href="https://github.com/Kaniz-Naiba"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-pink-600 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/tanbina-Kaniz-naiba-8358a5282/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-pink-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-pink-600 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/Kaniz-Naiba-Resume.pdf"
            download
            className="px-8 py-3 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition duration-300 font-semibold shadow-lg"
          >
            Download Resume
          </a>
        </div>

        {/* Right Side - Profile Picture */}
        <div
          className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-pink-300"
          data-aos="fade-left"
        >
          <img
            src="/projects/naiba.png"
            alt="Kaniz Naiba"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
