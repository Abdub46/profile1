import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./App.css";

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedArticle ? "hidden" : "auto";
  }, [selectedArticle]);

  const articles = [
    {
      id: 1,
      title: "Understanding Modern Web Development",
      preview: "A deep dive into modern frontend architecture.",
      content:
        "Modern web development focuses on scalability, performance, and clean architecture. React enables dynamic interfaces using reusable components and efficient rendering systems."
    },
    {
      id: 2,
      title: "Why Clean UI Matters",
      preview: "Design defines user experience.",
      content:
        "Clean UI improves usability, accessibility, and engagement. Consistent spacing, typography, and color systems enhance clarity and professionalism."
    },
    {
      id: 3,
      title: "The Future of Technology",
      preview: "AI and automation are transforming industries.",
      content:
        "Artificial intelligence and cloud computing continue to reshape business models globally. Adaptability is key in the digital era."
    }
  ];

  return (
    <>
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

      {selectedArticle &&
        createPortal(
          <div
            className="modal-overlay"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="modal-content"
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
          </div>,
          document.body
        )}
    </>
  );
};

export default Articles;
