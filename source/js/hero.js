import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function heroSwiper() {
  const swiper = new Swiper('.hero__swiper-container', {
    modules: [Pagination],
    pagination: {
      el: '.hero-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        const currentIndex = this.activeIndex;

        // Удаляем все фоновые классы
        document.querySelector('.hero').classList.remove('hero--first', 'hero--second', 'hero--third');

        // Добавляем класс для текущего слайда
        if (currentIndex === 0) {
          document.querySelector('.hero').classList.add('hero--first');
        } else if (currentIndex === 1) {
          document.querySelector('.hero').classList.add('hero--second');
        } else if (currentIndex === 2) {
          document.querySelector('.hero').classList.add('hero--third');
        }
      },
    },
  });

  // Устанавливаем фон для первого слайда при загрузке
  document.querySelector('.hero').classList.add('hero--first');
}
