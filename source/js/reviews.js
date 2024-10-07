import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function reviewsSwiper() {
  const swiper = new Swiper('.reviews__swiper', {
    // Настройки
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      init: function () {
        // Установим начальную позицию индикатора в зависимости от активного слайда
        updateIndicator(this);
      },
      slideChange: function () {
        // При смене слайда обновляем позицию индикатора
        updateIndicator(this);
      },
    },
  });

  function updateIndicator(swiper) {
    const totalSlides = swiper.slides.length; // Общее количество слайдов
    const activeIndex = swiper.activeIndex; // Индекс активного слайда
    const indicator = document.querySelector('.pagination-indicator');

    // Вычисляем ширину индикатора
    const slideWidth = swiper.width; // Ширина одного слайда
    const newWidth = (slideWidth / totalSlides) * 100; // Новая ширина в %

    // Вычисляем позицию индикатора
    const newLeft = (activeIndex / totalSlides) * 100; // Позиция в %

    // Устанавливаем ширину и позицию индикатора
    indicator.style.width = `${newWidth}%`;
    indicator.style.left = `${newLeft}%`;
  }
}
