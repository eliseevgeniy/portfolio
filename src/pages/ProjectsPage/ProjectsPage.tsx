import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projectsData } from '../../data/projects';
import type { Project } from '../../data/projects';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectModal } from '../../components/ProjectModal/ProjectModal';

const categories = ['Все', 'Jira Clone', 'Figma Clone', 'Чат', 'Лэндинг', 'API', 'Multi-page'];

export const ProjectsPage = () => {
  const [filter, setFilter] = useState('Все');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'Все' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-display font-bold mb-4 text-center"
      >
        Мои проекты
      </motion.h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        От лэндингов до сложных веб-приложений. Вот некоторые из моих последних работ.
      </p>

      {/* Фильтры */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30' 
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Сетка проектов */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Модальное окно */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};