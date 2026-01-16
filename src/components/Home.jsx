import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center
      transition-colors duration-700
      bg-gray-100 dark:bg-gray-900
      text-black dark:text-white px-4"
    >
      {/* Profile Picture */}
      <motion.img
        src="/profile.jpg" // saved in public folder
        alt="Josamine Parungao"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-yellow-400 dark:border-yellow-500 mb-6 shadow-lg"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="text-4xl md:text-5xl font-bold dark:text-yellow-400 mb-2"
      >
        Josamine Parungao
      </motion.h1>

      {/* Degree */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
        className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-1"
      >
        BS in Information Technology Graduate
      </motion.p>

      {/* Skills */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
        className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-2 font-bold"
      >
        Junior Developer
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
        className="text-md md:text-lg text-gray-700 dark:text-gray-200 max-w-xl italic"
      >
        "Crafting websites, analyzing data, and providing tech solutions with attention to detail and creativity."
      </motion.p>

    </div>
  );
}
