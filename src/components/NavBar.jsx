import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdTranslate } from "react-icons/md"

import DarkMode from "./DarkMode";

export default function NavBar({ languaje, setLanguaje, t }) {
  console.log("NAVBAR T:", t)


  const toggleLanguaje = () => {
    setLanguaje(prev => prev === 'es' ? 'en' : 'es');

  }

  return (
    <nav className=" top-0 left-0 w-full h-16 z-50 bg-gray-700 dark:bg-gray-800/80 backdrop-blur">
      <ul className="h-full flex justify-center items-center gap-8 py-4 font-medium text-gray-900 dark:text-white">

        <li>
          <NavLink to="/" className="hover:text-blue-500">
            {t.nav.home}
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="hover:text-blue-500">
            {t.nav.about}
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills" className="hover:text-blue-500">
            {t.nav.skills}
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className="hover:text-blue-500">
            {t.nav.projects}
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="hover:text-blue-500">
            {t.nav.contact}
          </NavLink>
        </li>

        {/* Social icons */}
        <li className="flex gap-4 text-2xl ml-12">
          <a
            href="https://www.linkedin.com/in/mauricio-meza-10b660246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Mauricio-Meza"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>


          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mezamaurii@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
            title="Email"
          >
            <MdEmail size={24} />
          </a>
        </li>

        <li>
          <button
            onClick={toggleLanguaje}
            className={"flex  gap-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:scale-105 transition"}
          >
            <MdTranslate size={22} />
          </button>
        </li>
        <DarkMode />
      </ul>
    </nav>
  );
}
