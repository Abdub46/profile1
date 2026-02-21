import React, { useState } from "react";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Subscribed successfully!");
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <div className="App">

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 60 },
            color: { value: "#38bdf8" },
            links: {
              enable: true,
              color: "#38bdf8",
              distance: 150,
              opacity: 0.3
            },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
            opacity: { value: 0.5 }
          }
        }}
      />

      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Horizon</div>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#articles" onClick={() => setMenuOpen(false)}>Articles</a>
        </nav>

        <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>Horizon</span></h1>

          <p className="intro">
            Empowering health through nutrition,
            building digital solutions through code,
            and delivering reliable IT & network systems.
            Where innovation meets impact.
          </p>

          <h2 className="typewriter">
            <Typewriter
              words={[
                "Nutrition Consulting",
                "Web Development",
                "Network Engineering",
                "IT Solutions"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
        </div>
      </section>

      {/* About */}
      <About />

      {/* Services */}
      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid">
          <Card title="Nutrition Consulting" text="Diet planning & health assessments." />
          <Card title="Web Development" text="Modern React websites & web systems." />
          <Card title="Network Management" text="MikroTik configuration & ISP support." />
          <Card title="PC Troubleshooting" text="OS installation & system fixes." />
          <Card title="Graphic Design" text="Flyers, posters & branding materials." />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <Skill name="HTML & CSS" percent="95%" />
        <Skill name="JavaScript & React" percent="88%" />
        <Skill name="Network Configuration" percent="90%" />
        <Skill name="PC Troubleshooting" percent="85%" />
        <Skill name="Graphic Design" percent="80%" />
      </section>

      {/* Articles */}
      <section id="articles" className="section">
        <h2>Articles</h2>
        <div className="grid">
          <Card title="The Role of Nutrition in Modern Health"
                text="Exploring how diet impacts immunity and chronic diseases." />
          <Card title="Why Every Business Needs a Website"
                text="How digital presence increases visibility and growth." />
          <Card title="Understanding ISP Infrastructure"
                text="A simple breakdown of how internet systems work." />
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h3>
          Subscribe to my newsletter to get updates, new tips, tutorials and more.
        </h3>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Horizon | All Rights Reserved.
      </footer>

    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
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
