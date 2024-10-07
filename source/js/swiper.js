import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const heroSwiper = new Swiper('.hero-swiper', {
//   modules: [Pagination],
//   loop: true, // Зацикленный слайдер
//   slidesPerView: 1, // Количество отображаемых слайдов
//   spaceBetween: 0, // Расстояние между слайдами
//   autoHeight: true, // Автоматически рассчитывать высоту слайда
//   pagination: {
//     el: '.hero-pagination', // Селектор для пагинации
//     clickable: true, // Возможность клика на буллеты
//   },
//   effect: 'slide', // Эффект смены слайда
//   autoplay: {
//     delay: 5000, // Интервал автопроигрывания
//     disableOnInteraction: false, // Не отключать автопроигрывание при взаимодействии
//   },
//   allowTouchMove: window.innerWidth < 1024 // Отключить перетаскивание на десктопах
// });

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
