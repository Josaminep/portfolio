import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "POS and Inventory Management Systems",
    desc: "A system designed to simplify sales management and inventory tracking for businesses.",
    tech: ["Java", "MySQL"],
  },
  {
    id: 2,
    title: "Restaurant Mobile Application",
    desc: "App for food ordering and catering reservations.",
    tech: ["Android Studio", "Java", "UI/UX", "SQLite"],
    apk: "https://drive.google.com/file/d/1R07Ci1aHg1dXd1T_75xtCH2LHzInNQF-/view",
  },
  {
    id: 3,
    title: "Voter's Registration System",
    desc: "Platform to manage and track voter information.",
    tech: ["Java", "MySQL"],
    source: "https://github.com/Josaminep/Voters-Registration",
  },
  {
    id: 4,
    title: "Simple Todo List Application",
    desc: "Organize and manage daily tasks efficiently.",
    tech: ["Java", "MySQL"],
    live: "https://josaminep.github.io/todo-app/",
  },
  {
    id: 5,
    title: "Simple Inventory Management",
    desc: "Manage store inventory with basic CRUD operations.",
    tech: ["HTML/CSS", "PHP", "MySQL"],
    source: "https://github.com/Josaminep/Simple-Inventory",
  },
  {
    id: 6,
    title: "Online Gate Vehicle System",
    desc: "A web based system for vehicle gate access, registration, tracking, and reporting.",
    tech: ["HTML/CSS", "PHP", "MySQL"],
    source: "https://github.com/Josaminep/online-vehicle-gate",
  },
  {
    id: 7,
    title: "Payroll Management System",
    desc: "A system to manage employee payroll, track salaries, and generate reports efficiently.",
    tech: ["HTML/CSS", "PHP", "Javascript", "MySQL"],
  },
  {
    id: 8,
    title: "Gabaldon Tourism Website",
    desc: "Showcase local attractions, resorts, and tourism services.",
    tech: ["Wix", "WixCMS"],
    live: "https://gabaldonturismo.wixsite.com/gabaldon-tourism",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="py-20 bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-yellow-500 dark:text-yellow-400">
        Works
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p) => (
          <motion.article
            key={p.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {p.desc}
              </p>

              <div className="flex gap-2 flex-wrap mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-yellow-200 dark:bg-yellow-600 dark:text-gray-100 text-gray-800 px-3 py-1 rounded-full transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2 flex-wrap mt-auto">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded bg-yellow-400 text-black font-semibold hover:bg-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:text-gray-900 transition"
                >
                  View
                </a>
              )}
              {p.source && (
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  Source
                </a>
              )}
              {p.apk && (
                <a
                  href={p.apk}
                  download
                  className="text-sm px-4 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                >
                  APK
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
