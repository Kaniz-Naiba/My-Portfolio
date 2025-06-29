import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="px-6 py-16 bg-[rgb(252,194,215)] text-black"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        About Me
      </h2>

      <div
        className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-12 text-black text-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Hi, I’m <strong>Kaniz Naiba</strong>, a passionate full stack developer. I started my programming
          journey with curiosity and a love for building beautiful things on the web. I enjoy crafting
          clean UIs and solving real-world problems through code. Outside of programming, I love writing,
          reading, and exploring new tech tools.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
