import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Состояния для полей формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Состояния для ошибок валидации
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Функция валидации
  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    // Проверка имени
    if (!name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    // Проверка Email (регулярное выражение)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Пожалуйста, введите ваш Email';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Введите корректный адрес электронной почты';
    }

    // Проверка сообщения
    if (!message.trim()) {
      newErrors.message = 'Пожалуйста, введите сообщение';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Возвращает true, если ошибок нет
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Запускаем валидацию. Если есть ошибки - прерываем отправку
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus('idle');

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'test_service',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'test_template',
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'test_key'
    )
    .then(() => {
      setIsSubmitting(false);
      setStatus('success');
      // Очищаем форму после успешной отправки
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      console.error('Ошибка отправки:', error);
      setIsSubmitting(false);
      setStatus('error');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Поле Имя */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: undefined }); // Сбрасываем ошибку при вводе
            }}
            className={`w-full px-4 py-3 rounded-xl border bg-(--surface-color) focus:outline-none focus:ring-2 transition-all ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-(--border-color) focus:ring-brand-500'
            }`}
            placeholder="Иван Иванов"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Поле Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            className={`w-full px-4 py-3 rounded-xl border bg-(--surface-color) focus:outline-none focus:ring-2 transition-all ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-(--border-color) focus:ring-brand-500'
            }`}
            placeholder="ivan@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      
      {/* Поле Сообщение */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
        <textarea 
          id="message" 
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border bg-(--surface-color) focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message ? 'border-red-500 focus:ring-red-500' : 'border-(--border-color) focus:ring-brand-500'
          }`}
          placeholder="Привет! Хочу предложить тебе проект..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-70 text-white px-6 py-4 rounded-xl font-medium transition-all"
      >
        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
        {!isSubmitting && <Send className="w-5 h-5" />}
      </button>

      {/* Уведомления об общем статусе отправки */}
      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-xl">
          <CheckCircle2 className="w-5 h-5" />
          <span>Сообщение успешно отправлено! Я свяжусь с вами скоро.</span>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl">
          <AlertCircle className="w-5 h-5" />
          <span>Ошибка при отправке. Пожалуйста, попробуйте позже.</span>
        </div>
      )}
    </form>
  );
};