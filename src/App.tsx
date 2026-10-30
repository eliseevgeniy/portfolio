import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          {/* Страница 404 (не найдено) */}
          <Route path="*" element={<div className="text-center py-20 text-2xl">404 - Страница не найдена</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;