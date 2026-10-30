import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../UI/GithubIcon';
import type { Project } from '../../data/projects';

export const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-(--surface-color) rounded-2xl overflow-hidden border border-(--border-color) group cursor-pointer shadow-sm hover:shadow-xl transition-all"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button className="p-3 bg-white text-gray-900 rounded-full hover:bg-brand-500 hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}>
            <GithubIcon className="w-5 h-5" />
          </button>
          {project.liveUrl !== '#' && (
            <button className="p-3 bg-white text-gray-900 rounded-full hover:bg-brand-500 hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}>
              <ExternalLink className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <span className="text-xs font-semibold text-brand-500 uppercase tracking-wider">{project.category}</span>
        <h3 className="text-xl font-display font-bold mt-2 mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span key={tech} className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-xs rounded-md font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};