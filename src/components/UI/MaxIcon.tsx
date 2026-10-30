export const MaxIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Фон с градиентом (имитация официального логотипа) */}
      <rect width="24" height="24" rx="6" fill="url(#maxGradient)" />
      
      {/* Форма буквы (белая) */}
      <path 
        d="M12 5C8.13 5 5 7.91 5 11.5C5 13.6 6.07 15.45 7.75 16.63L7.2 19.1C7.13 19.43 7.47 19.68 7.76 19.52L10.62 18.06C11.07 18.13 11.53 18.17 12 18.17C15.87 18.17 19 15.26 19 11.67C19 8.08 15.87 5 12 5ZM9 12.75C8.31 12.75 7.75 12.19 7.75 11.5C7.75 10.81 8.31 10.25 9 10.25C9.69 10.25 10.25 10.81 10.25 11.5C10.25 12.19 9.69 12.75 9 12.75ZM15 12.75C14.31 12.75 13.75 12.19 13.75 11.5C13.75 10.81 14.31 10.25 15 10.25C15.69 10.25 16.25 10.81 16.25 11.5C16.25 12.19 15.69 12.75 15 12.75Z" 
        fill="white" 
      />
      
      {/* Определение градиента */}
      <defs>
        <linearGradient id="maxGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B4FF" /> {/* Голубой */}
          <stop offset="1" stopColor="#7B1FA2" /> {/* Фиолетовый */}
        </linearGradient>
      </defs>
    </svg>
  );
};