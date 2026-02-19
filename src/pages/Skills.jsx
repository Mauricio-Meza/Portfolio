import Card from '../components/Card.jsx'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaPython, FaNodeJs,
  FaGitAlt, FaGithub
} from 'react-icons/fa'
import { SiTailwindcss, SiPostgresql, SiVercel } from 'react-icons/si'
import { motion } from 'framer-motion'
import SkillItem from '../components/SkillItem'


export default function Skills({ t }) {
  return (
    <section className="min-h-full overflow-y-auto flex justify-center">
      <div className="max-w-5xl w-full mx-auto pt-6 pb-20 px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

        >
          <h2 className="text-3xl font-bold mb-2 text-center">
            {t.skills.title}
          </h2>

        </motion.div>


        <div className="grid grid-cols-2 gap-6 p-6">
          <Card title="Frontend">
            <div className="flex p-6 gap-6 text-3xl justify-center">
              <SkillItem
                icon={<FaHtml5 className="text-4xl text-gray-400 group-hover:text-orange-500 transition-colors duration-300" />}
                name="HTML"
              />
              
              <SkillItem
                icon={<FaCss3Alt className="text-4x1 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />}
                name="CSS"
              />
              
              <SkillItem
                icon={<FaJs className="text-4x1 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />}
                name="JavaScript"
              />

              <SkillItem
                icon={<FaReact className="text-4x1 text-gray-400 group-hover:text-[#61DAFB] transition-colors duration-300"/>}
                name="React"
              />

              <SkillItem
                icon={<SiTailwindcss className="text-4xl text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"/>}
                name="Tailwind"
              />
              
              
              
            </div>
          </Card>

          <Card title="Backend">
            <div className="flex p-6 gap-6 text-3xl justify-center">
              <SkillItem
                icon={<FaPython className="text-4x1 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300"/>}
                name="Python"
              />
              
              <SkillItem
                icon={<FaNodeJs className="text-4x1 text-gray-400 group-hover:text-green-500 transition-colors duration-300"/>}
                name="Node.js"
              />
              
              <SkillItem
                icon={<SiPostgresql className="text-4x1 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"/>}
                name="PostgreSQL"
              />

            </div>
          </Card>

          <Card title="Tools">
            <div className="flex p-6 gap-6 text-3xl">
              <SkillItem
                icon={<FaGitAlt className="4x1 text-gray-400 group-hover:text-orange-500 transition-colors duration-300"/>}
                name="Git"
              />

              <SkillItem
                icon={<FaGithub className="4x1 text-gray-400 group-hover:text-orange-500 transition-colors duration-300"/>}
                name="GitHub"
              />             
              
              <SkillItem
                icon={<SiVercel  className="4x1 text-gray-400 group-hover:text-white transition-colors duration-300"/>}
                name="Vercel"
              />

            </div>
          </Card>
        </div>

      </div>
    </section>
  )
}


