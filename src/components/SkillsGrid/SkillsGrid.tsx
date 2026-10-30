import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5 / CSS3', level: 'Продвинутый' },
  { name: 'JavaScript (ES6+)', level: 'Продвинутый' },
  { name: 'TypeScript', level: 'Средний' },
  { name: 'React', level: 'Продвинутый' },
  { name: 'Tailwind CSS', level: 'Продвинутый' },
  { name: 'Git / GitHub', level: 'Продвинутый' },
  { name: 'Figma', level: 'Средний' },
  { name: 'Node.js (базово)', level: 'Начальный' },
];

export const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="p-4 bg-(--surface-color) rounded-xl border border-(--border-color) hover:border-brand-500 transition-colors shadow-sm"
        >
          <h4 className="font-semibold text-sm md:text-base mb-1">{skill.name}</h4>
          <span className="text-xs text-brand-500 font-medium">{skill.level}</span>
        </motion.div>
      ))}
    </div>
  );
};