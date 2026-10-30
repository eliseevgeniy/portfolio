import jiraImg from '../../assets/jira.png';
import figmaImg from '../../assets/figma.png';
import chatImg from '../../assets/chat.png';
import landingImg from '../../assets/landing.png';
import yasenevoImg from '../../assets/yasenevo.png';
import weatherImg from '../../assets/weather.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const slides = [
  { id: 1, title: 'Jira Clone', img: jiraImg },
  { id: 2, title: 'Figma Clone', img: figmaImg },
  { id: 3, title: 'Chat App', img: chatImg },
  { id: 4, title: 'Landing Page', img: landingImg },
  { id: 5, title: 'Multi-page', img: yasenevoImg },
  { id: 6, title: 'Weather App', img: weatherImg },
];

export const PortfolioSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="w-full pb-12"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="max-w-150 rounded-2xl overflow-hidden border border-(--border-color) shadow-xl">
            <div className="relative aspect-video group cursor-pointer">
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-xl">{slide.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};