import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function programsSwiper() {
  const swiper = new Swiper('.programs__swiper', {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.pagination-indicator',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.programs-swiper-button--next',
      prevEl: '.programs-swiper-button--prev',
    },
  });
}
