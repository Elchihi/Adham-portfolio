import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { title } from "framer-motion/client";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "German Autobahn",
      category: "ui",
      img: "/German autobahn.png",
      link: "https://germanautobahn.netlify.app/",
      description:
        "A sleek UI design for a German autobahn-themed website, showcasing modern aesthetics , a mobile-friendly layout, and smooth animations , built with React.js and Tailwind CSS , built for cars enthusiasts.",
    },
    {
      title: "German Services",
      category: "web",
      img: "/German Services.png",
      link: "https://german-services.netlify.app/",
      description:
        "A german services website with responsive design and smooth UI made using HTML5&CSS3 , BootStrap5.",
    },
    {
      title: "Bakery Website",
      category: "web",
      img: "/Ubakery.png",
      link: "https://ubakery.netlify.app/",
      description:
        "A native modern bakery website with responsive design and smooth UI made using HTML5&CSS3 , BootStrap5.",
    },
    {
      title: "Cars Wiki",
      category: "ui",
      img: "/carswiki.png",
      description:
        "A sleek UI design for a car wiki-themed website, showcasing modern aesthetics , a mobile-friendly layout, and smooth animations , built with React.js and Tailwind CSS , built for cars enthusiasts.",
      link: "https://cars-wiki.netlify.app/",
    },
    {
      title: "Smart-Products-Aecom",
      category: "web",
      img: "/aecom.png",
      link: "https://smart-products-aecom.netlify.app/",
      description:
        "A modern website for smart products with responsive design and smooth UI made using HTML5&CSS3 , BootStrap5.",
    },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="py-24 px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        Portfolio
      </motion.h2>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-14">
        {[
          { key: "all", label: "All" },
          { key: "web", label: "Web" },
          { key: "ui", label: "UI / UX" },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            className={`px-6 py-2 rounded-xl border transition-all duration-300 ${
              filter === btn.key
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent text-gray-800 dark:text-gray-200 border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 block"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with title & description */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
