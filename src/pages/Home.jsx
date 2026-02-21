
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home({ t }) {
  const navigate = useNavigate()
  return (
    <section className="flex-grow flex flex-col justify-center items-center text-center ">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold "
      >
        {t.home.greeting.split("Mauricio")[0]}
        <span className="text-blue-500">Mauricio</span> 👋
       

      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300"
      >
      
        {t.home.role}
      </motion.p>

      <div className="mt-8 flex gap-4">
        <a
          onClick={() => navigate("/projects")}
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition"
        >
          {t.home.projectsBtn}
        </a>

        <a
          onClick={() => navigate("/contact")}
          href="#contact"
          className="px-6 py-3 border border-blue-500 text-blue-600 rounded-xl hover:bg-blue-700 hover:text-white transition"
        >
          {t.home.contactBtn}
        </a>
        <a
         href="/Cv-Mauricio-Meza.pdf"
         download
         className="px-6 py-3 bg-green-500 text-white rounded-xl transition hover:bg-green-700"

        >
          {t.home.cvBtn}
        </a>
      </div>
    </section >
  );
}


