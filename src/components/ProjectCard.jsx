import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function projectCard ({ project, t }) {
  return (
    <motion.article
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className=" bg-zinc-900/60
        border border-white/10
        rounded-xl
        p-6
        backdrop-blur
        "
    >
      <h3 className="text-xl font-semibold text-white mb-2">
        {project.title}
      </h3>

      <p className="text-zinc-400 text-sm mb-4">
        {project.description}
      </p>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white hover:text-orange-500 transition"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>


        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white hover:text-blue-500 hover: transition"
        >
          <FaExternalLinkAlt />
          <span>{t.projects.viewDemo}</span>

        </a>

      </div>

      

    </motion.article>


  )
}








