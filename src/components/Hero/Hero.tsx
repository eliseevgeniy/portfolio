import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6 border border-brand-500/20"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
        </span>
        Открыт для предложений о работе
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
      >
        Привет, я <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-500 to-accent-500">Евгений</span>
        <br />
        Frontend-разработчик
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10"
      >
        Создаю современные, быстрые и доступные веб-интерфейсы. 
        Специализируюсь на React, TypeScript и превращении сложных задач в элегантные решения.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        <Link 
          to="/projects" 
          className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-brand-500/30"
        >
          Смотреть проекты <ArrowRight className="w-5 h-5" />
        </Link>
        
        <a 
          href="/resume.pdf" 
          target="_blank" 
          className="flex items-center gap-2 bg-white dark:bg-slate-800 text-gray-800 dark:text-white border border-(--border-color) hover:bg-gray-50 dark:hover:bg-slate-700 px-6 py-3 rounded-full font-medium transition-all"
        >
          Скачать резюме <Download className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
};