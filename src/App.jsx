import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main sections */}
      <main className="space-y-20">
        <section id="home" className="px-6 md:px-12">
          <Home />
        </section>

        <section id="about" className="px-6 md:px-12">
          <About />
        </section>

        <section id="works" className="px-6 md:px-12">
          <Works />
        </section>

        <section id="contact" className="px-6 md:px-12">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
