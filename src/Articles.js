import React from "react";

function Articles() {
  return (
    <div className="page">
      <h1>Articles</h1>

      <div className="article-card">
        <h2>Understanding Nutrition in Modern Healthcare</h2>
        <p>
          Nutrition plays a critical role in disease prevention and recovery.
          From community health to clinical practice, balanced diet strategies
          help improve patient outcomes and long-term wellbeing.
        </p>
      </div>

      <div className="article-card">
        <h2>Why Developers Should Learn Networking</h2>
        <p>
          Understanding networking fundamentals such as DNS, TCP/IP, and
          server deployment gives developers a powerful advantage when
          building scalable applications.
        </p>
      </div>

      <div className="article-card">
        <h2>Technology in Public Health</h2>
        <p>
          Digital tools are transforming public health systems by improving
          surveillance, monitoring, and data-driven decision making across
          institutions.
        </p>
      </div>
    </div>
  );
}

export default Articles;
