import { Link, NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme'; // <-- Импорт хука

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme(); // <-- Используем хук

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Обо мне', path: '/about' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-(--border-color)">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-brand-500/50 group-hover:border-brand-500 transition-colors">
            <span 
              className="text-3xl bg-clip-text text-transparent bg-linear-to-br from-brand-500 to-accent-400 flex items-center justify-center leading-none pt-4"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              E
            </span>
          </div>
          <span className="text-xl font-display font-bold hidden sm:block">
            Евгений
          </span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-500 ${
                  isActive ? 'text-brand-500' : 'text-gray-600 dark:text-gray-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Кнопки действий */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Переключить тему"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </button>
          
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Открыть меню"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden border-t border-(--border-color) bg-(--surface-color) absolute w-full">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium hover:text-brand-500"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};