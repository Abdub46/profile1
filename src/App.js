import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";
import Articles from "./Articles";

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
  <Link to="/" className="logo">
    Horizon
  </Link>




  <nav className={menuOpen ? "nav-links active" : "nav-links"}>
           
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>


           


<Link to="/articles" onClick={() => setMenuOpen(false)}>Articles</Link>
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










  




        {/* ROUTES */}
        <Routes>

          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              <section className="hero">
                <div className="hero-text">
                  <h1>
                    Welcome to <span>Horizon</span>
                  </h1>

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

                  

                  <div className="card">Nutrition Consulting</div>
                  <div className="card">Web Development</div>
                  <div className="card">Network Configuration</div>
                  <div className="card">IT Support</div>


                  <div className="card">Nutrition Consulting</div>
                  <div className="card">Web Development</div>
                  <div className="card">Network Configuration</div>
                  <div className="card">IT Support</div>
                </div>
              </section>
              
            </>
          } />

          {/* ABOUT PAGE */}
          <Route path="/about" element={<About />} />

          <Route path="/articles" element={<Articles />} />

        </Routes>

        

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


              {/* FOOTER */}
        <footer>
          © {new Date().getFullYear()} Horizon. All rights reserved.
          <h4>Powered by Horizon Solutions</h4>
        </footer>


        


      </div>
    </Router>
  );
}

export default App;


