import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    // Отправка через EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'test_service',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'test_template',
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'test_key'
    )
    .then(() => {
      setIsSubmitting(false);
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      console.error('Ошибка отправки:', error);
      setIsSubmitting(false);
      setStatus('error');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-(--border-color) bg-(--surface-color) focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            placeholder="Иван Иванов"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-(--border-color) bg-(--surface-color) focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
            placeholder="ivan@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
        <textarea 
          id="message" 
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-(--border-color) bg-(--surface-color) focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
          placeholder="Привет! Хочу предложить тебе проект..."
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-70 text-white px-6 py-4 rounded-xl font-medium transition-all"
      >
        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
        {!isSubmitting && <Send className="w-5 h-5" />}
      </button>

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