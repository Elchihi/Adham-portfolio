import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Building responsive, fast, and modern UI using React, Tailwind, and clean code principles.",
      icon: "💻",
    },
    {
      title: "UI / UX Design",
      desc: "Designing smooth user experiences with focus on usability, accessibility, and visual hierarchy.",
      icon: "🎨",
    },
    {
      title: "Full Website Setup",
      desc: "From idea to final deployment: design, build, SEO, and performance optimization.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
      >
        My Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
