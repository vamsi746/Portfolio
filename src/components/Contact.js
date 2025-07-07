import React from "react";
import "../Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form
        action="https://formspree.io/f/xgvyjwgz"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://github.com/vamsi746" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/cert-images/github.png"} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/lakshmi-narayana-sangaraju-a814472b6" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/cert-images/linkedin.png"} alt="LinkedIn" />
        </a>
        <a href="mailto:sangarajuvamsi6@gmail.com">
          <img src={process.env.PUBLIC_URL + "/cert-images/email.png"} alt="Email" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
