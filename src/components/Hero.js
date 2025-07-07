import React from "react";
import "../Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-nav">
        <h1>My Portfolio</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#certifications">Certifications</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="hero-content">
        <h2>Hi, I'm Lakshmi Narayana Sangaraju</h2>
        <p>Full Stack Developer | MERN Stack Developer | AI Enthusiast</p>
      </div>
    </div>
  );
}

export default Hero;
