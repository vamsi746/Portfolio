import React from "react";
import "../Experience.css";

const experiences = [
  {
    role: "Android Development Intern",
    company: "Cognifyz Technologies",
    date: "June–July 2025",
    link: "https://drive.google.com/file/d/1Ryb5jvTAoIiWug8EuZ85rAu6lf5iziVv/view?usp=sharing",
    logo: process.env.PUBLIC_URL + "/cert-images/cognifyz.png"
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Codec Technologies",
    date: "June–July 2025",
    link: "https://drive.google.com/file/d/1EtM0-NkxBGl9NAoXtlitBlPLCUJch9Yp/view?usp=sharing",
    logo: process.env.PUBLIC_URL + "/cert-images/codec.png"
  },
  {
    role: "AI & Prompt Engineering Intern",
    company: "Vault of Codes",
    date: "Nov–Dec 2024",
    link: "https://drive.google.com/file/d/1q3k4kc7iHQbq58p2PnUJ8uc0iSt_zEOQ/view?usp=sharing",
    logo: process.env.PUBLIC_URL + "/cert-images/voc.png"
  },
  {
    role: "Web Development Intern",
    company: "Vault of Codes",
    date: "July–August 2025",
    link: "https://drive.google.com/file/d/1yiiWb0XjxjDZoNADZ4sQlyO2DTrKOeZo/view?usp=sharing",
    logo: process.env.PUBLIC_URL + "/cert-images/voc.png"
  },
  {
    role: "AI & ML Intern",
    company: "Smart Bridge",
    date: "May–July",
    link: "#",
    logo: process.env.PUBLIC_URL + "/cert-images/smartbridge.png"
  }
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="exp-logo">
              <img src={exp.logo} alt={exp.company} />
            </div>
            <div className="exp-info">
              <h3>{exp.role}</h3>
              <p>{exp.company}</p>
              <span>{exp.date}</span>
            </div>
            <div className="exp-action">
              {exp.link !== "#" ? (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-btn"
                >
                  View Offer Letter
                </a>
              ) : (
                <span className="pending">Offer Letter Pending</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
