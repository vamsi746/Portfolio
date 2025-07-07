import React, { useState } from "react";
import "../Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776; {/* This is the ☰ icon */}
      </button>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
