import React from "react";
import "../Projects.css";

const projects = [
  {
    title: "SmartSort AI Produce Classifier",
    description: "AI web app to classify fruits & vegetables as fresh or rotten.",
    tech: "Python, Flask, Machine Learning",
    codeLink: "https://github.com/vamsi746/smartsort",
    liveLink: "https://smartsort-backend.onrender.com/",
    image: process.env.PUBLIC_URL + "/cert-images/smartsort.jpg"
  },
  {
    title: "Movie Magic Ticket Booking",
    description: "Cloud-native movie ticket booking system with seat selection.",
    tech: "Flask, AWS EC2, DynamoDB",
    codeLink: "https://github.com/vamsi746/movie-magic",
    liveLink: "https://movie-magic-nu.vercel.app/",
    image: process.env.PUBLIC_URL + "/cert-images/moviemagic.jpg"
  },
  {
    title: "Project Management Tool",
    description: "A full-featured Project Management Tool built using the MERN stack with Kanban, Analytics, and Gantt Chart.",
    tech: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    codeLink: "https://github.com/vamsi746/project-management-tool",
    liveLink: "https://project-management-tool-delta-rosy.vercel.app/",
    image: process.env.PUBLIC_URL + "/cert-images/projecttool.jpg"
  },
  {
    title: "Calculator",
    description: "A simple calculator built with HTML, CSS, and JavaScript.",
    tech: "HTML, CSS, JavaScript",
    codeLink: "https://github.com/vamsi746/calculator",
    liveLink: "https://calculator-teal-three.vercel.app/",
    image: process.env.PUBLIC_URL + "/cert-images/calculator.jpg"
  },
  {
    title: "Portfolio",
    description: "My personal developer portfolio showcasing my skills, projects, and certifications.",
    tech: "React.js, CSS, JavaScript",
    codeLink: "https://github.com/vamsi746/portfolio",
    liveLink: "https://portfolio-xi-olive-49.vercel.app/",
    image: process.env.PUBLIC_URL + "/cert-images/portfolio.jpg"
  }
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="tech">{project.tech}</span>
              <div className="project-buttons">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
                {project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
