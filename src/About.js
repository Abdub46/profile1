import React, { useState } from "react";
import "./App.css";
import profile from "./profile.jpg";

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="section about-section">

      <div className="about-container">

        {/* LEFT SIDE (Fixed) */}
        <div className="about-left">
          <img src={profile} alt="Abdub" className="about-img" />
          <h3>Abdub Galgallo</h3>
          <p className="role">Junior Software Developer</p>
<p className="role">Nutritionist</p>


<div className="about-contact">

  <p><a href="https://github.com/Abdub46" target="_blank" rel="noreferrer">
              🌐 GitHub
            </a></p>


            <p><a href="tel:+254719644609">
              📞 0719644609
            </a></p>


            <p><a href="mailto:abdubgalgallo46@gmail.com">
              📧 abdubgalgallo46@gmail.com
            </a></p>
 
</div>






          
        </div>

  










        {/* RIGHT SIDE (Scrollable) */}
        <div className="about-right">

          <h2>Profile</h2>

          <p className="about-description">
            I am a passionate Nutritionist and Technology Specialist with
            strong expertise in web development, network engineering,
            and IT infrastructure systems. I combine analytical thinking
            with creativity to build scalable digital solutions and
            optimize network performance. My mission is to bridge health,
            technology, and innovation to create meaningful impact.
          </p>

          {/* Toggle Buttons */}
          <div className="about-tabs">
            <button
              className={activeTab === "experience" ? "active" : ""}
              onClick={() => setActiveTab("experience")}
            >
              Work Experience
            </button>

            <button
              className={activeTab === "projects" ? "active" : ""}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
          </div>

          {/* CONDITIONAL RENDERING */}
          <div className="about-content">

            {activeTab === "experience" && (
              <div className="about-box">
                <ul>
                  <li>Network Administrator – Tech Solutions Ltd (2024)</li>
                  <li>Frontend Developer – Creative Web Studio</li>
                  <li>IT Support Specialist – Horizon Systems</li>
                  <li>System Deployment Engineer – ISP Networks</li>
                </ul>


                <ul>
                  <li>Network Administrator – Tech Solutions Ltd (2024)</li>
                  <li>Frontend Developer – Creative Web Studio</li>
                  <li>IT Support Specialist – Horizon Systems</li>
                  <li>System Deployment Engineer – ISP Networks</li>
                </ul>

                <ul>
                  <li>Network Administrator – Tech Solutions Ltd (2024)</li>
                  <li>Frontend Developer – Creative Web Studio</li>
                  <li>IT Support Specialist – Horizon Systems</li>
                  <li>System Deployment Engineer – ISP Networks</li>
                </ul>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="about-box">
                <ul>
                  <li>ISP Billing System with M-Pesa Integration</li>
                  <li>Modern React Portfolio Website</li>
                  <li>MikroTik Network Deployment for Apartments</li>
                  <li>Nutrition Appointment Web Application</li>
                </ul>

                <ul>
                  <li>ISP Billing System with M-Pesa Integration</li>
                  <li>Modern React Portfolio Website</li>
                  <li>MikroTik Network Deployment for Apartments</li>
                  <li>Nutrition Appointment Web Application</li>
                </ul>

                <ul>
                  <li>ISP Billing System with M-Pesa Integration</li>
                  <li>Modern React Portfolio Website</li>
                  <li>MikroTik Network Deployment for Apartments</li>
                  <li>Nutrition Appointment Web Application</li>
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;

