import React, { useState } from "react";

const projectsData = [
  {
    title: "Event Explorer",
    description:
      "An event discovery platform where users can browse, view details, and book upcoming events with secure authentication.",
    image: "/projects/event explorer.png",
    techStack: "React, Firebase, Swiper.js, AOS",
    liveLink: "https://stellar-meerkat-3a6f63.netlify.app/",
    githubclientLink: "https://github.com/Kaniz-Naiba/event-explorer.git",
    challenges:
      "Creating responsive layouts, integrating Firebase Auth, and handling real-time event updates.",
    futurePlans: "Add user dashboard, ticket downloading, and review system.",
  },
  {
    title: "Freelancia",
    description:
      "A freelance service marketplace allowing clients to post tasks and developers to bid and work collaboratively.",
    image: "/projects/freelancia.png",
    techStack: "React, Node.js, Express, MongoDB, Firebase",
    liveLink: "https://startling-treacle-331744.netlify.app/",
    githubclientLink: "https://github.com/Kaniz-Naiba/Freelancia.git",
    githubserverLink: "https://github.com/Kaniz-Naiba/freelancia-server-side.git",
    challenges:
      "Booking logic, user authentication, role-based dashboard, and secure form validation.",
    futurePlans: "Integrate Stripe payment and notifications for task updates.",
  },
  {
    title: "ArtiTracker",
    description:
      "A MERN-based artifact tracking system for managing, updating, and viewing historical artifacts in museums or private collections.",
    image: "/projects/artitracker.png",
    techStack: "MongoDB, Express, React, Node.js, Tailwind CSS",
    liveLink: "https://lucky-florentine-ddaf3a.netlify.app/",
    githubclientLink: "https://github.com/Kaniz-Naiba/ArtiTracker.git",
    githubserverLink: "https://github.com/Kaniz-Naiba/ArtiTracker-server.git",
    challenges:
      "Implementing secure artifact updates, user authentication, and clean filtering of items by category or age.",
    futurePlans:
      "Add image upload functionality, QR code-based search, and role-based admin panel.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="px-6 py-16 bg-[rgb(252,194,215)] text-black"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl py-3 font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition flex flex-col"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 150} // stagger effect
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 rounded h-40 object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
            <button
              onClick={() => setSelectedProject(project)}
              className="mt-auto bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 text-white py-2 rounded hover:bg-pink-500 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full p-8 relative shadow-lg overflow-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full mb-6 rounded object-cover max-h-64"
              loading="lazy"
            />
            <p className="mb-4">{selectedProject.description}</p>

            <div className="mt-2 text-left">
              <strong className="block mb-1">Technology Stack:</strong>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4">
              <strong>Challenges:</strong> {selectedProject.challenges}
            </p>
            <p className="mt-2">
              <strong>Future Plans:</strong> {selectedProject.futurePlans}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded transition"
              >
                Live Project
              </a>
              <a
                href={selectedProject.githubclientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded transition"
              >
                GitHub Client
              </a>
              {selectedProject.githubserverLink && (
                <a
                  href={selectedProject.githubserverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded transition"
                >
                  GitHub Server
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
