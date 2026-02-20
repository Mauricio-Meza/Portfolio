import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/Projects'


export default function Projects({ t }) {
  return (
    <section className="flex justify-center items-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold  mb-12 text-center">
           {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map(project => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}



