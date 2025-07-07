import React from "react";
import "../Education.css";

function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Annamacharya Institute of Technology and Sciences, Tirupati",
      year: "2022 - 2026",
    },
    {
      degree: "Intermediate MPC",
      institution: "Sri Chaitanya Junior College, Tirupati",
      year: "2020 - 2022",
    },
  ];

  return (
    <div className="education section">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
