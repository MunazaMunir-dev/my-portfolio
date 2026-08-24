import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Projects from "./Components/Projects";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";
import Journey from "./components/journey";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects/>
      <Journey/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;