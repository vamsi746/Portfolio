import React from "react";
import "../About.css";

function About() {
  return (
    <div className="about section" id="about">
      <div className="about-content">
        <img 
          src={process.env.PUBLIC_URL + "/cert-images/profile.jpg"} 
          alt="Vamsi"
          className="about-image"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am Lakshmi Narayana, an aspiring Full-Stack Developer passionate about creating modern, responsive web applications. I enjoy solving problems and bringing ideas to life with code.
          </p>
          <p>
            Skilled in HTML, CSS, JavaScript, React, Node.js, and Python, I am eager to grow and contribute to exciting projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
