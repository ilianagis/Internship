import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSwiper = new Swiper('.hero-swiper', {
  modules: [Pagination],
  loop: true,
  allowTouchMove: window.innerWidth < 768, // Отключение перетаскивания на десктопе
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.hero-pagination',
    clickable: true,
  },
  effect: 'slide',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

export { heroSwiper };
