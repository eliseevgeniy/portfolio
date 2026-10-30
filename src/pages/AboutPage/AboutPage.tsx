import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { SkillsGrid } from '../../components/SkillsGrid/SkillsGrid';
import { Timeline } from '../../components/Timeline/Timeline';

// 1. ИМПОРТ ВАШЕГО ФОТО (Убедитесь, что файл лежит в src/assets/)
import myPhoto from '../../assets/my-photo.jpg'; 

// 2. ВАШЕ ОБРАЗОВАНИЕ
const education = [
  {
    title: 'Томский государственный университет систем управления и радиоэлектроники',
    subtitle: 'Специальность: Менеджмент организации',
    period: '2006 — 2011 гг.',
    description: 'Специализация: Информационный менеджмент.',
  },
];

// 3. ВАШИ КУРСЫ И ПРАКТИКА
const courses = [
  {
    title: 'Университет «Синергия»',
    subtitle: 'Программа переподготовки «Frontend-разработчик»',
    period: '2026 г.',
    description: 'Успешное освоение программы профессиональной переподготовки.',
  },
  {
    title: 'Практика и пет-проекты',
    subtitle: 'Самостоятельная разработка',
    period: 'Настоящее время',
    description: 'Изучение React, TypeScript, Git и современных CSS-фреймворков. Создание проектов для портфолио: Jira Clone, Figma Clone, Chat App.',
  },
];

export const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      
      {/* --- БЛОК 1: ФОТО + ТЕКСТ О СЕБЕ --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Обо мне</h1>
        
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Фото с градиентной рамкой */}
          <div className="w-full md:w-1/3 shrink-0">
             <div className="aspect-square rounded-2xl bg-linear-to-br from-brand-500 to-accent-500 p-1 shadow-xl shadow-brand-500/20">
                <img 
                  src={myPhoto} 
                  alt="Евгений Елисеев" 
                  className="w-full h-full object-cover rounded-xl"
                />
             </div>
          </div>
          
          {/* Текст */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-display font-bold mb-4">Привет! Я Евгений.</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Frontend-разработчик из города Абакан. Имею фундаментальное образование в области информационного менеджмента и успешно переквалифицировался в веб-разработку.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Специализируюсь на экосистеме React и TypeScript. В своей работе уделяю большое внимание деталям, производительности и доступности (a11y). Постоянно изучаю новые технологии и слежу за трендами в дизайне.
            </p>
            
            {/* Кнопка скачивания резюме */}
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-brand-500/30"
            >
              Скачать резюме <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* --- БЛОК 2: НАВЫКИ --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-display font-bold mb-8">Мои навыки</h2>
        <SkillsGrid />
      </motion.div>

      {/* --- БЛОК 3: ОБРАЗОВАНИЕ И КУРСЫ (Таймлайн) --- */}
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Образование */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold mb-8">Образование</h2>
          <Timeline items={education} />
        </motion.div>

        {/* Курсы / Практика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold mb-8">Курсы и практика</h2>
          <Timeline items={courses} />
        </motion.div>
        
      </div>
    </div>
  );
};