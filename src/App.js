import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";
import Articles from "./Articles";

function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>Horizon</span></h1>
          <p className="intro">
            Empowering health through nutrition,
            building powerful web applications,
            and delivering reliable IT systems.
            Welcome to my digital space, where creativity meets purpose and ideas turn into meaningful experiences.
            I’m passionate about building clean, modern, and impactful solutions that solve real-world problems.
            Here, you’ll find a glimpse of my journey, the projects I’ve crafted, and the skills I continue to grow every day.
            Take your time to explore, get inspired, and feel free to connect — I’m truly glad you’re here!
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

      {/* SERVICES */}
      <section className="section">
        <h2 className="section-title">Services</h2>
        <div className="grid">
          <div className="card">Nutrition Consulting</div>
          <div className="card">Web Development</div>
          <div className="card">Network Configuration</div>
          <div className="card">IT Support</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="grid">
          <div className="card">
            <h3>Professional Expertise</h3>
            <p>Years of practical experience in nutrition, networking, and web technologies.</p>
          </div>
          <div className="card">
            <h3>Modern Solutions</h3>
            <p>We use up-to-date tools and technologies to deliver efficient and scalable systems.</p>
          </div>
          <div className="card">
            <h3>Client-Centered Approach</h3>
            <p>Every project is tailored to meet specific needs with precision and care.</p>
          </div>
          <div className="card">
            <h3>Reliable Support</h3>
            <p>Ongoing assistance and support to ensure long-term success.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq">
          {[
            {
              question: "What services do you offer?",
              answer:
                "We offer nutrition consulting, web development, network configuration, and complete IT support solutions."
            },
            {
              question: "How can I start a project with you?",
              answer:
                "Simply reach out through the contact section or subscribe to receive updates and consultation information."
            },
            {
              question: "Do you offer ongoing support?",
              answer:
                "Yes, we provide continuous support and maintenance for systems and applications we develop."
            }
          ].map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </div>
              {openFAQ === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      alert("Enter a valid email.");
      return;
    }
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <Router>
      <div className="app">

        {/* NAVBAR */}
        <header className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">Horizon</Link>

            <nav className={menuOpen ? "nav-links active" : "nav-links"}>
              <div className="mobile-menu-header">Horizon</div>
              <div className="mobile-menu-links">
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/articles" onClick={() => setMenuOpen(false)}>Articles</Link>
              </div>
            </nav>

            <div
              className={menuOpen ? "hamburger active" : "hamburger"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </main>

        {/* NEWSLETTER */}
        <section className="newsletter">
          <h3>Subscribe to my newsletter to get updates, new tips, tutorials, and more.</h3>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </section>

        {/* NEW FOOTER */}
        <footer className="custom-footer">
          <div className="footer-links">
            <Link to="/about">About Horizon</Link>
            <Link to="/articles">Articles</Link>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
