import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="container nav-content">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Munaza<span>.</span>
        </a>


        {/* DESKTOP NAVIGATION */}

        <nav className="nav-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>

        </nav>


        <a
          href="#contact"
          className="hire-btn"
        >
          Hire Me
        </a>


        {/* MOBILE MENU BUTTON */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE NAVIGATION */}

      <nav
        className={`mobile-nav ${
          menuOpen ? "mobile-nav-open" : ""
        }`}
      >

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#journey" onClick={closeMenu}>
          Journey
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

    </header>
  );
}

export default Navbar;