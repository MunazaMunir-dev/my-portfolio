import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Journey from "./components/journey";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}

export default App;