import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import favicon from "../../assets/favicon.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#hero" },
    { id: "services", label: "Services", href: "#services" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    // { id: "testimonials", label: "Testimonial", href: "#team" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  const fade = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const handleNavClick = (id, href) => {
    setActive(id);
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-black/40 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20 text-white">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home", "#home");
          }}
          className="flex items-center gap-3 text-xl md:text-2xl font-extrabold select-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7f5af0] to-[#00aaff] flex items-center justify-center text-white shadow-lg">
            <img src={favicon} alt="Logo" className="w-6 h-6" />
          </div>
          <span className="hidden sm:inline">Adham Mostafa</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNavClick(l.id, l.href)}
              className={`relative px-2 py-1 font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all ${
                active === l.id
                  ? "text-white after:w-full"
                  : "text-gray-300 hover:text-white hover:after:w-full"
              }`}
            >
              {l.label}
            </button>
          ))}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact", "#contact");
            }}
            className="ml-2 inline-block px-4 py-2 rounded-full border-2 border-white text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            Hire Me
          </a>
        </nav>

        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fade}
              className="fixed inset-0 z-40"
            >
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-[#111] p-6 shadow-2xl text-white"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7f5af0] to-[#00aaff] flex items-center justify-center">
                      AE
                    </div>
                    <div className="font-semibold">Adham`s</div>
                  </div>

                  <button onClick={() => setOpen(false)}>✕</button>
                </div>

                <nav className="flex flex-col gap-4">
                  {links.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => handleNavClick(l.id, l.href)}
                      className={`text-left text-lg py-2 font-medium ${
                        active === l.id ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("contact", "#contact");
                    }}
                    className="block text-center px-4 py-3 rounded-full border-2 border-white font-semibold mt-4"
                  >
                    Hire Me
                  </a>
                </nav>

                <div className="mt-auto pt-6 text-sm text-gray-500">
                  Available for freelance · Cairo, Egypt
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
