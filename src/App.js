import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">AG</div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        {/* Hamburger */}
        <div 
          className={menuOpen ? "hamburger active" : "hamburger"} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hi, I'm <span>Abdub Galgallo</span>
          </h1>
          <p>
            Nutritionist • Web Developer • Network Specialist • IT Expert
          </p>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>

        <div className="hero-image">
          <img 
            src={process.env.PUBLIC_URL + "/profile.jpg"} 
            alt="Abdub"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a professional Nutritionist passionate about technology.
          I specialize in web development, network configuration,
          ISP setup, PC troubleshooting, and graphic design.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="section light">
        <h2>What I Do</h2>
        <div className="grid">
          <div className="card">
            <h3>Nutrition Consulting</h3>
            <p>Diet planning, health assessments & lifestyle guidance.</p>
          </div>
          <div className="card">
            <h3>Web Development</h3>
            <p>Modern responsive websites & React applications.</p>
          </div>
          <div className="card">
            <h3>Network Management</h3>
            <p>MikroTik config & ISP technical support.</p>
          </div>
          <div className="card">
            <h3>PC Troubleshooting</h3>
            <p>Driver fixes & OS installation.</p>
          </div>
          <div className="card">
            <h3>Graphics Design</h3>
            <p>Flyers, posters & branding materials.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills">
          <Skill name="HTML & CSS" percent="95%" />
          <Skill name="JavaScript & React" percent="88%" />
          <Skill name="Network Configuration" percent="90%" />
          <Skill name="PC Troubleshooting" percent="85%" />
          <Skill name="Graphic Design" percent="80%" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Let's Work Together</h2>

        <div className="contact-info">
          <a href="mailto:abdubgalgallo46@gmail.com" className="contact-link">
            📧 abdubgalgallo46@gmail.com
          </a>

          <a href="tel:+254719644609" className="contact-link">
            📞 0719644609
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} Abdub Galgallo | All right Reserved.  
        <br />
        Powered by Horizon Solutions
      </footer>

    </div>
  );
}

function Skill({ name, percent }) {
  return (
    <div className="skill">
      <p>{name}</p>
      <div className="bar">
        <span style={{ width: percent }}></span>
      </div>
    </div>
  );
}

export default App;
