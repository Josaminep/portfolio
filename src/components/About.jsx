import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

export default function About() {
  const skills = [
    { name: "HTML/CSS", value: 85 },
    { name: "C++", value: 80 },
    { name: "Java", value: 70 },
    { name: "PHP", value: 85 },
    { name: "React", value: 75 },
    { name: "Laravel", value: 70 },
    { name: "MySQL", value: 85 },
    { name: "Javascript", value: 60 },
    { name: "Node.js", value: 80 },
  ];

  const tools = [
    "VS Code",
    "XAMPP",
    "MySQL Workbench",
    "MS Office | Excel Macros",
    "MS SQL",
    "Tableau",
    "AnyDesk",
    "Jira & Zendesk (Basic)",
    "Android Studio",
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-100 text-black dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center md:text-left text-yellow-500 dark:text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {/* Left Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow flex flex-col">
          <p className="text-justify">
            Hello — I'm{" "}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">
              Josamine Parungao
            </span>
            , a BS in Information Technology graduate, majoring in Web Systems Technology. I specialize in web development, data analysis, remote support, and tech solutions.
          </p>

          <p className="mt-4 text-justify">
            My <span className="font-semibold">capstone project</span>, BIMS (Barangay Information and Management System), allows residents to request documents online and schedule pickups while admins can generate reports and manage census data efficiently, improving community services.
          </p>

          <p className="mt-4 text-justify">
            I started freelancing in May 2024 for full-stack projects, collaboration, and remote assistance. Since my academic schedule allowed flexibility, I used this opportunity to expand my skills and gain practical experience.
          </p>

          <p className="mt-4 text-justify">
            During my 4-month <span className="font-semibold">internship</span>, I deployed our LGU tourism website and developed a proposed payroll management system. Throughout my academic projects and internship, I contributed as a developer and team lead, building skills that allow me to make a strong impact in the IT industry.
          </p>

          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <Briefcase size={18} className="text-yellow-500 dark:text-yellow-400" />
              Available for collaboration, part-time, and full-time roles
            </li>
          </ul>

          {/* Resume Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="JOSAMINE-PARUNGAO_CV.pdf"
              target="_blank"
              className="px-5 py-3 rounded bg-gradient-to-r from-jasamineBlue to-jasamineYellow text-white font-semibold shadow hover:shadow-lg transition"
            >
              Preview Resume
            </a>
            <a
              href="JOSAMINE-PARUNGAO_CV.pdf"
              download
              className="px-5 py-3 rounded bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow font-sans">
          <h3 className="font-bold text-yellow-600 dark:text-yellow-400 text-lg mb-4">
            Skills
          </h3>
          <div className="mt-3 space-y-3">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{s.name}</span>
                  <span className="font-mono font-bold">{s.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${s.value}%`,
                      background: "linear-gradient(90deg, #60A5FA, #FACC15)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <h3 className="font-bold text-yellow-600 dark:text-yellow-400 text-lg mt-6 mb-3">
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tools.map((tool) => (
              <div
                key={tool}
                className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-center text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm transition hover:scale-105"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}