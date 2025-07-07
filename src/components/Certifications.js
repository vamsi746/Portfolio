import React from "react";
import "../Certifications.css";

function Certifications() {
  const certifications = [
  {
    title: "AWS - AI & ML",
    issuer: "AWS Training and Certification",
    date: "5 June 2025",
    link: "https://drive.google.com/file/d/1v_JWgqbTmBVkcrwk-SZ00-kR03fO10pH/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/aws.png"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training and Certification",
    date: "14 March 2025",
    link: "https://drive.google.com/file/d/1q0ZsxUG3R8CjBJ8WguBUHN6_JUiEiqZl/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/aws_cloud.png"
  },
  {
    title: "Java Programming",
    issuer: "edX",
    date: "11 April 2024",
    link: "https://drive.google.com/file/d/1qNxatQEXzEQORPFqvYbAp4SeQPh7I_MC/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/java.png"
  },
  {
    title: "Python (Cisco Networking Academy)",
    issuer: "Cisco",
    date: "2 June 2025",
    link: "https://drive.google.com/file/d/1twvAZwPaGGmsa-0aeKs9iHQN_v-ORjuO/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/python.png"
    },
  {
    title: "Deloitte Data Analytics",
    issuer: "Forage",
    date: "12 June 2025",
    link: "https://drive.google.com/file/d/1vkV0kp2--3MTp52ZS98NAec4B3xHikog/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/dataanalytics.png"
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "11 June 2025",
    link: "https://drive.google.com/file/d/1cESxzPLX6eP_EJVR9qSpSp-Gt6gCc1wr/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/solutionsarchitecture.png"
    },
  {
    title: "Generative AI",
    issuer: "Infosys",
    date: "2 June 2025",
    link: "https://drive.google.com/file/d/1to105Ten8UiQUjCHfMsPvTBZtxPM8Kcu/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/generativeai.png"
  },
  {
    title: "Java Programming - Object Oriented",
    issuer: "edX",
    date: "13 April 2024",
    link: "https://drive.google.com/file/d/1qFD7Y-nwAHCG1P1QyiiwaZMdeRUJmWgW/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/java.png"
  },
  {
    title: "Python (NPTEL)",
    issuer: "NPTEL",
    date: "2024",
    link: "https://drive.google.com/file/d/1q0CaxFtTYm9JXLy6iVFXO_WfM_GTpHjN/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/python.png"
  },
  {
    title: "Python (HackerRank)",
    issuer: "HackerRank",
    date: "20 December 2024",
    link: "https://drive.google.com/file/d/1pfkdPuC3l6dU8wtt7Jgpzop5_3luhGRX/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/python.png"
  },
  {
    title: "Walmart Global Tech Advanced Software Engineering",
    issuer: "Forage",
    date: "11 June 2025",
    link: "https://drive.google.com/file/d/1TJaKsQP1gdC5d_UhvkVVqudHpnEQiqBU/view?usp=sharing",
    image: process.env.PUBLIC_URL + "/cert-images/softwareeng.png"
  },
];

  return (
  <div className="certifications section" id="certifications">
    <h2>Certifications</h2>
    <div className="cert-grid">
      {certifications.map((cert, index) => (
        <div className="cert-card" key={index}>
            <div className="cert-left">
                <h3>{cert.title}</h3>
                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                >
                    View Certificate
                </a>
            </div>
            <div className="cert-middle">
                <p>{cert.issuer}</p>
                <span>{cert.date}</span>
            </div>
            <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
            </div>
        </div>

      ))}
    </div>
  </div>
);

}

export default Certifications;
