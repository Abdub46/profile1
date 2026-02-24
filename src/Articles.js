import React, { useState } from "react";
import "./App.css";

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Understanding Modern Web Development",
      preview:
        "A deep dive into how modern frameworks like React are shaping the future of frontend architecture.",
      content:
        "Modern web development focuses on building scalable, responsive, and high-performance applications. Frameworks like React, Next.js, and Vue enable developers to create dynamic user interfaces efficiently. Clean architecture, reusable components, and performance optimization are key pillars of today's development ecosystem."
        
    },
    {
      id: 2,
      title: "Why Clean UI Matters",
      preview:
        "Design is more than beauty — it defines user experience and engagement.",
      content:
        "A clean user interface improves usability, accessibility, and overall engagement. Minimalism, spacing, color contrast, and intuitive layout play a vital role in ensuring users interact effortlessly with your product."
    },
    {
      id: 3,
      title: "The Future of Technology",
      preview:
        "Artificial Intelligence, automation, and cloud systems are transforming industries worldwide.",
      content:
        "Emerging technologies like AI, machine learning, blockchain, and cloud computing are redefining business models. Continuous learning and adaptability are essential to remain relevant in this fast-evolving digital era."
    }
  ];

  return (
    <section className="articles-section">
      <h2 className="section-title">Articles</h2>

      <div className="articles-grid">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-card"
            onClick={() => setSelectedArticle(article)}
          >
            <h3>{article.title}</h3>
            <p>{article.preview}</p>
            <span className="read-more">Read More →</span>
          </div>
        ))}
      </div>



      







      {/* MODAL */}
      {selectedArticle && (
        <div
          className="article-modal-overlay"
          onClick={() => setSelectedArticle(null)}
          style={{ overflowY: "auto" }}
        >
          <div
            className="article-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedArticle(null)}
            >
              ✕
            </button>

            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Articles;
