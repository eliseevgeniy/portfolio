import { useEffect, useState } from 'react';
import { Star, GitFork } from 'lucide-react';
import { GithubIcon } from '../UI/GithubIcon'; // <-- Наша кастомная иконка

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const GitHubRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const GITHUB_USERNAME = 'eliseevgeniy'; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`)
      .then(res => {
        if (!res.ok) throw new Error('Ошибка сети');
        return res.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 animate-pulse text-gray-500">Загрузка репозиториев...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Не удалось загрузить данные с GitHub.</div>;
  if (repos.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <a 
          key={repo.id} 
          href={repo.html_url} 
          target="_blank" 
          rel="noreferrer"
          className="block p-6 bg-(--surface-color) border border-(--border-color) rounded-xl hover:border-brand-500 transition-colors group"
        >
          <div className="flex items-center gap-2 mb-2 text-brand-500">
            <GithubIcon className="w-5 h-5" />
            <h3 className="font-semibold text-lg group-hover:underline">{repo.name}</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-10">
            {repo.description || 'Без описания'}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            {repo.language && <span>{repo.language}</span>}
            <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stargazers_count}</span>
            <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
          </div>
        </a>
      ))}
    </div>
  );
};