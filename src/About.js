import React from "react";
import profile from "./profile.jpg";

function About() {
  return (
    <section id="about" className="section about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={profile} alt="Profile" />
          <div className="about-contact">
            <p>📧 abdubgalgallo46@gmail.com</p>
            <p>📞 0719644609</p>
          </div>
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a professional Nutritionist passionate about technology.
            I specialize in web development, network configuration,
            ISP setup, PC troubleshooting, and graphic design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
