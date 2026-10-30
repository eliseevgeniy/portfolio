import { MaxIcon } from '../UI/MaxIcon';
import { GithubIcon } from '../UI/GithubIcon';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-(--border-color) bg-(--bg-color)">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Евгений Елисеев. Frontend Developer.
        </p>
        
        {/* Ссылки на соцсети в подвале */}
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
          <a href="https://github.com/eliseevgeniy" target="_blank" rel="noreferrer" className="hover:text-brand-500 transition-colors flex items-center gap-1.5">
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
          <a href="https://t.me/Elevyr" target="_blank" rel="noreferrer" className="hover:text-brand-500 transition-colors">
            Telegram
          </a>
          <a href="https://max.ru/u/f9LHodD0cOKM62DLjXIdmfTXfkzK4o-nmXJadJq29WMozIBsH9b74EoE6e4" target="_blank" rel="noreferrer" className="hover:text-brand-500 transition-colors flex items-center gap-1.5">
            <MaxIcon className="w-4 h-4" /> MAX
          </a>
        </div>
      </div>
    </footer>
  );
};