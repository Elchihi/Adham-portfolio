import React from "react";
import favicon from "../../assets/favicon.png";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-20 bg-[#040809] text-gray-400 border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7f5af0] to-[#00aaff] flex items-center justify-center text-white font-bold">
            <img src={favicon} alt="Logo" className="w-6 h-6" />
          </div>
          <div>
            <div className="font-semibold text-white">Adham Mostafa</div>
            <div className="text-sm">Web Developer · Cairo</div>
          </div>
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} Adham Elchihi — Built with ❤️
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Elchihi"
            aria-label="github"
            className="hover:text-white"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adham-mostafa-t7/"
            aria-label="linkedin"
            className="hover:text-white"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/adhamelchihi"
            aria-label="FaceBook"
            className="hover:text-white"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
