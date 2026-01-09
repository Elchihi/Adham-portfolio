import React from "react";
import { motion } from "framer-motion";
import me4 from "../../assets/me4.jpg";
import me5 from "../../assets/me5.jpg";

export function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section
      id="home"
      className="
    relative
    min-h-screen
    flex items-center justify-center 
    px-6 md:px-12 
    text-white 
    pt-28
    bg-[url('/hero-bg3.jpg')]
    bg-cover bg-center bg-no-repeat
  "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-[#7f5af0] to-[#00aaff] shadow-[0_0_40px_#7f5af055]">
            <img
              src={me4}
              alt="Adham"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div variants={fadeUp} className="space-y-4">
          <p className="text-gray-200 text-lg">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Adham{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#00aaff]">
              Elchihi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Web Developer & UI Enthusiast
          </p>

          <div className="pt-4 flex gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7f5af0] to-[#00aaff] font-semibold shadow-lg hover:opacity-90 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-white font-semibold hover:bg-white hover:text-black transition"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Hero2() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col gap-4 max-w-xl"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300">Hello, I'm</p>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Adham Elchihi
        </h1>
        <h2 className="text-2xl text-primary font-semibold dark:text-blue-400">
          Web Developer
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-lg">
          I am a junior web developer passionate about building modern,
          responsive, and high-quality web applications with a focus on clean UI
          & smooth user experience. I recently graduated from Modern Academy
          with a Grade A in Business Information Systems (BIS), and at 22 years
          old, I am constantly learning new technologies and improving my
          skills. I enjoy solving problems, creating intuitive web solutions,
          and pushing myself to grow every day.
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 dark:border-gray-300 text-gray-900 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 md:mt-0"
      >
        <img
          src={me5}
          alt="Adham Hero"
          className="w-80 md:w-[420px] rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700"
        />
      </motion.div>
    </section>
  );
}
