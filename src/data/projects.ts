import jiraImg from '../assets/jira.png';
import figmaImg from '../assets/figma.png';
import chatImg from '../assets/chat.png';
import landingImg from '../assets/landing.png';
import yasenevoImg from '../assets/yasenevo.png';
import weatherImg from '../assets/weather.png';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Jira Clone',
    category: 'Jira Clone',
    description: 'Клон Jira с drag-and-drop досками, управлением задачами и авторизацией.',
    stack: ['React 18', 'TypeScript', 'Redux Toolkit', 'dnd-kit', 'SCSS'], 
    githubUrl: 'https://github.com/eliseevgeniy/jira-clone',
    liveUrl: 'https://jira-clone-psi-green.vercel.app/',
    image: jiraImg
  },
  {
    id: 2,
    title: 'Figma Clone',
    category: 'Figma Clone',
    description: 'Веб-редактор для совместного проектирования интерфейсов в реальном времени.',
    stack: ['Nuxt 4', 'Vue 3', 'Vuetify 3', 'SCSS'],
    githubUrl: 'https://github.com/eliseevgeniy/figma-clone',
    liveUrl: 'https://figma-clone-rosy-sigma.vercel.app/',
    image: figmaImg
  },
  {
    id: 3,
    title: 'Chat App',
    category: 'Чат',
    description: 'Мессенджер с обменом сообщениями в реальном времени, статусами и группами.',
    stack: ['Node.js', 'Express', 'Socket.IO', 'Redis', 'Vanilla JS'],
    githubUrl: 'https://github.com/eliseevgeniy/chat-app',
    liveUrl: '#',
    image: chatImg
  },
  {
    id: 4,
    title: 'Landing Page',
    category: 'Лэндинг',
    description: 'Одностраничный сайт для стартапа с анимациями и формами подписки.',
    stack: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid'],
    githubUrl: 'https://github.com/eliseevgeniy/landing',
    liveUrl: 'https://eliseevgeniy.github.io/landing/',
    image: landingImg
  },
  {
    id: 5,
    title: 'Weather App',
    category: 'API',
    description: 'SPA на React для просмотра текущей погоды и прогноза на 7 дней в избранных городах. Данные берутся из открытого API Open-Meteo.',
    stack: ['React 19', 'TypeScript', 'React Bootstrap', 'SCSS', 'React Router', 'Open-Meteo API'],
    githubUrl: 'https://github.com/eliseevgeniy/Weather-App',
    liveUrl: '#',
    image: weatherImg
  },
  {
    id: 6,
    title: 'Yasenevo',
    category: 'Multi-page',
    description: 'Дипломный проект на курсе Frontend-разработчика. Адаптивный многостраничный сайт с использованием CSS Grid и медиазапросов.',
    stack: ['HTML5', 'CSS3'],
    githubUrl: 'https://github.com/eliseevgeniy/Yasenevo',
    liveUrl: 'https://eliseevgeniy.github.io/Yasenevo/', 
    image: yasenevoImg
  },
];