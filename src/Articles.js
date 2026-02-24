import React, { useState, useEffect } from "react";
import "./App.css";

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Lock background scroll when modal opens
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedArticle]);

  const articles = [
    {
      id: 1,
      title: "Understanding Modern Web Development",
      preview:
        "A deep dive into how modern frameworks are shaping frontend architecture.",
      content:
        "Modern web development focuses on building scalable, responsive, and high-performance applications. Frameworks like React enable dynamic interfaces. Clean architecture, reusable components, performance optimization, and accessibility are essential principles in today’s ecosystem."
    },
    {
      id: 2,
      title: "Why Clean UI Matters",
      preview:
        "Design is more than beauty — it defines user experience and engagement.",
      content:
        "A clean interface improves usability and accessibility. Minimal spacing, consistent color systems, readable typography, and intuitive layouts ensure users interact effortlessly with your product."
    },
    {
      id: 3,
      title: "The Future of Technology",
      preview:
        "AI, automation, and cloud systems are transforming industries.",
      content:
        "Emerging technologies such as artificial intelligence and cloud computing are reshaping industries globally. Continuous learning and adaptability are critical for long-term success in the digital world."
    }
  ];

  return (
    <div className="articles-page">
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
      </section>

      {selectedArticle && (
        <div
          className="article-modal-overlay"
          onClick={() => setSelectedArticle(null)}
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
    </div>
  );
};

export default Articles;
