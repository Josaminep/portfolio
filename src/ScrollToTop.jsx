// src/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop({ theme }) {
  const [visible, setVisible] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition hover:scale-105`}
        style={{
          backgroundColor: isDark ? "#1f2937" : "#facc15", // dark bg or yellow for light mode
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} color={isDark ? "#facc15" : "#1f2937"} /> {/* arrow color */}
      </button>
    )
  );
}
