import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../../data/projects';
import { GithubIcon } from '../UI/GithubIcon'; // <-- Наша новая иконка

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ModalProps) => {
  // Закрытие по нажатию на Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden'; // Блокируем скролл фона
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          {/* Затемненный фон */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Само окно */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-(--surface-color) rounded-2xl shadow-2xl overflow-hidden border border-(--border-color) z-10 max-h-[90vh] flex flex-col"
          >
            {/* Кнопка закрытия */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Изображение */}
            <div className="relative w-full shrink-0 bg-gray-100 dark:bg-slate-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto max-h-[50vh] object-contain" // <-- Изменено
              />
            </div>

            {/* Контент */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-sm font-semibold text-brand-500 uppercase tracking-wider">{project.category}</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mt-1">{project.title}</h2>
                </div>
              </div>

              <p 
                className="mb-6 leading-relaxed text-base" 
                style={{ color: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#4b5563' }}
              >
                {project.description}
              </p>

              <h4 className="font-semibold mb-3">Использованные технологии:</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 text-sm rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

              {/* Ссылки */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-(--border-color)">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors hover:opacity-90"
                  style={{ 
                    backgroundColor: document.documentElement.classList.contains('dark') ? '#ffffff' : '#111827',
                    color: document.documentElement.classList.contains('dark') ? '#111827' : '#ffffff'
                  }}
                >
                  <GithubIcon className="w-5 h-5" /> Исходный код
                </a>
                {project.liveUrl !== '#' && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-brand-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" /> Живая версия
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};