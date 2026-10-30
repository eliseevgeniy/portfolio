import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
}

export const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="relative border-l-2 border-(--border-color) ml-3 md:ml-6 space-y-10">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 md:pl-10" // <-- Увеличен отступ
        >
          {/* Точка на линии */}
          <span className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-(--bg-color)" />
          
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold font-display leading-tight">{item.title}</h3>
            <span className="text-xs whitespace-nowrap font-medium text-brand-500 bg-brand-50 dark:bg-brand-900/30 px-3 py-1 rounded-full w-fit">
              {item.period}
            </span>
          </div>
          <h4 className="text-gray-600 dark:text-gray-400 font-medium mb-2">{item.subtitle}</h4>
          {item.description && (
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};