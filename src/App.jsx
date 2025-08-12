import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once on scroll
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
