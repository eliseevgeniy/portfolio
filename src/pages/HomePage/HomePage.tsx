import { Hero } from '../../components/Hero/Hero';
import { PortfolioSlider } from '../../components/Slider/PortfolioSlider';
import { GitHubRepos } from '../../components/GitHubRepos/GitHubRepos';
import { motion } from 'framer-motion';

export const HomePage = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-10">
      {/* 1. Главный экран */}
      <Hero />

      {/* 2. Слайдер */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-20"
      >
        <PortfolioSlider />
      </motion.div>

      {/* 3. Блок GitHub */}
      <div className="mb-20">
        <h2 className="text-3xl font-display font-bold text-center mb-8">Последние коммиты на GitHub</h2>
        <GitHubRepos />
      </div>
    </div>
  );
};