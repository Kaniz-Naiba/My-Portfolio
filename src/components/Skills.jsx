import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";

const Skills = () => {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-4xl" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  ];

  const renderSkills = (title, skillsArray, index) => (
    <div
      className="bg-white border-4 border-pink-300 rounded-lg p-8 min-h-[280px] shadow hover:shadow-lg transition w-full h-full"
      data-aos="fade-up"
      data-aos-delay={index * 200}
    >
      <h3 className="text-xl font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skillsArray.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {skill.icon}
            <p className="mt-2 text-base font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="px-6 py-16 bg-[rgb(252,194,215)] text-black"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {renderSkills("Frontend", frontend, 0)}
        {renderSkills("Backend", backend, 1)}
        {renderSkills("Tools", tools, 2)}
      </div>
    </section>
  );
};

export default Skills;
