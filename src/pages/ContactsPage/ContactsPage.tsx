import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon } from '../../components/UI/GithubIcon';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { YandexMap } from '../../components/ContactForm/YandexMap';
import { MaxIcon } from '../../components/UI/MaxIcon';

export const ContactsPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Контакты</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Есть интересный проект или предложение о работе? Буду рад обсудить детали!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Левая колонка: Форма и контакты */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-display font-bold mb-6">Напишите мне</h2>
          <ContactForm />

                    {/* Блок контактов */}
          <div className="mt-12 space-y-6"> {/* <--- ВОТ ЭТОТ КЛАСС ОТВЕЧАЕТ ЗА ОТСТУПЫ */}
            
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-50 dark:bg-brand-900/30 text-brand-500 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:eliseev-ey@yandex.ru" className="font-medium hover:text-brand-500 transition-colors">
                  eliseev-ey@yandex.ru
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded-full">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <a href="https://github.com/eliseevgeniy" target="_blank" rel="noreferrer" className="font-medium hover:text-brand-500 transition-colors">
                  github.com/eliseevgeniy
                </a>
              </div>
            </div>

            {/* Telegram */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 dark:bg-slate-800 text-blue-500 rounded-full">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Telegram</p>
                <a href="https://t.me/Elevyr" target="_blank" rel="noreferrer" className="font-medium hover:text-brand-500 transition-colors">
                  @Elevyr
                </a>
              </div>
            </div>

            {/* Мессенджер MAX */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 dark:bg-slate-800 rounded-full">
                <MaxIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Мессенджер MAX</p>
                <a 
                  href="https://max.ru/u/f9LHodD0cOKM62DLjXIdmfTXfkzK4o-nmXJadJq29WMozIBsH9b74EoE6e4" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-medium hover:text-brand-500 transition-colors"
                >
                  Написать в MAX
                </a>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Правая колонка: Карта */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-500" /> Я на карте
          </h2>
          <YandexMap />
          <p className="mt-4 text-sm text-gray-500 text-center">
            Город Абакан, Республика Хакасия
          </p>
        </motion.div>
      </div>
    </div>
  );
};