import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FaHome, FaUser, FaTools, FaCode, FaEnvelope } from "react-icons/fa";
import { MdEmail, MdTranslate } from "react-icons/md";
import DarkMode from "./DarkMode";

export default function NavBar({ languaje, setLanguaje, t }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguaje = () => {
    setLanguaje(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="top-0 left-0 w-full z-50 bg-gray-700 dark:bg-gray-800/80 backdrop-blur">

      {/* ── DESKTOP (igual que tenías) ── */}
      <ul className="hidden md:flex h-16 justify-center items-center gap-3 py-4 font-medium text-gray-900 dark:text-white">
        <span className="text-gray-900 dark:text-white font-bold text-lg flex items-center gap-2 mr-12">
          <img src="/programacion.png" alt="logo" className="w-8 h-8 rounded-full" />
          Portfolio Mauricio Meza
        </span>

        <li>
          <NavLink to="/" className="hover:text-blue-500 flex items-center gap-2">
            <FaHome size={20} /> {t.nav.home}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-blue-500 flex items-center gap-2">
            <FaUser size={20} /> {t.nav.about}
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="hover:text-blue-500 flex items-center gap-2">
            <FaTools size={20} /> {t.nav.skills}
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="hover:text-blue-500 flex items-center gap-2">
            <FaCode size={20} /> {t.nav.projects}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-blue-500 flex items-center gap-2">
            <FaEnvelope size={20} /> {t.nav.contact}
          </NavLink>
        </li>

        <li className="flex gap-4 text-2xl ml-12">
          <a href="https://www.linkedin.com/in/mauricio-meza-10b660246" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Mauricio-Meza" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mezamaurii@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition" title="Email">
            <MdEmail size={24} />
          </a>
        </li>

        <li>
          <button onClick={toggleLanguaje} className="flex gap-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:scale-105 transition">
            <MdTranslate size={22} />
          </button>
        </li>
        <DarkMode />
      </ul>

      {/* ── MOBILE ── */}
      <div className="flex md:hidden h-16 justify-between items-center px-4">
        <span className="text-white font-bold text-lg flex items-center gap-2">
          <img src="/programacion.png" alt="logo" className="w-8 h-8 rounded-full" />
          Portfolio Mauricio Meza
        </span>
        <div className="flex items-center gap-3 text-white">
          <button onClick={toggleLanguaje} className="flex rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:scale-105 transition">
            <MdTranslate size={22} />
          </button>
          <DarkMode />
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú desplegable mobile */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 dark:bg-gray-800 px-4 pb-4">
          <ul className="flex flex-col gap-4 font-medium text-white">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 flex items-center gap-2">
                <FaHome size={20} /> {t.nav.home}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 flex items-center gap-2">
                <FaUser size={20} /> {t.nav.about}
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 flex items-center gap-2">
                <FaTools size={20} /> {t.nav.skills}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 flex items-center gap-2">
                <FaCode size={20} /> {t.nav.projects}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 flex items-center gap-2">
                <FaEnvelope size={20} /> {t.nav.contact}
              </NavLink>
            </li>
            <li className="flex gap-6 text-2xl pt-2 border-t border-gray-600">
              <a href="https://www.linkedin.com/in/mauricio-meza-10b660246" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Mauricio-Meza" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
                <FaGithub />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mezamaurii@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition">
                <MdEmail size={24} />
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
}

