import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-16 bg-[rgb(252,194,215)] text-black"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Experiences
      </h2>

      <div
        className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-12 text-black text-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <p className="text-lg">
          I am currently focused on improving my skills by building full-stack web projects using
          technologies like React, Node.js, MongoDB, and Firebase.
        </p>
        <p className="text-lg mt-4">
          I’m actively learning, contributing to personal projects, and preparing for internship
          or entry-level opportunities in the software development field.
        </p>
      </div>
    </section>
  );
};

export default Experience;
