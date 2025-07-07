import React from "react";
import "../Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-dots">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <h2>LAKSHMI NARAYANA SANGARAJU</h2>
      <p>Full Stack Developer | AI Enthusiast</p>
    </section>
  );
}

export default Banner;
