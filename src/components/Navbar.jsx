import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  const isDark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`py-4 px-6 sticky top-0 z-50 backdrop-blur transition-colors duration-500 ${
        isDark ? "bg-white/10" : "bg-black/10"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo and name */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 border-2 border-transparent ${
              isDark ? "bg-white/20 text-white" : "bg-black/20 text-black"
            }`}
          >
            J
          </div>
          <div
            className={`font-sans text-lg md:text-xl font-semibold transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Josamine Parungao
          </div>
        </div>

        {/* Desktop Links and toggle */}
        <div className="hidden md:flex items-center gap-6 font-medium font-sans text-sm md:text-base">
          {["Home", "About", "Works", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-300 ${
                isDark
                  ? "text-white hover:text-yellow-400"
                  : "text-gray-900 hover:text-yellow-500"
              }`}
            >
              {item}
            </a>
          ))}

          {/* Theme toggle icon */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`ml-3 p-2 rounded transition-all duration-500 ${
              isDark
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded transition-all duration-500 ${
              isDark
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`flex flex-col md:hidden mt-2 gap-2 px-4 pb-4 transition-colors duration-500 font-sans font-medium text-sm ${
            isDark ? "bg-white/10 text-white" : "bg-black/10 text-gray-900"
          }`}
        >
          {["Home", "About", "Works", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-300 ${
                isDark ? "hover:text-yellow-400" : "hover:text-yellow-500"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Mobile Theme toggle icon */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`mt-2 p-2 rounded transition-all duration-500 ${
              isDark
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
}
