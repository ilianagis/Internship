import './form.js';
import { heroSwiper } from './hero.js';
import { reviewsSwiper } from './reviews.js';
import { programsSwiper } from './programs.js';
// import { newsSwiper } from './news.js';
import './news.js';
import './faq.js';
import './toggle.js';
import './menu-dropdown.js';


document.addEventListener('DOMContentLoaded', () => {
  // Инициализация Swiper
  heroSwiper();
  reviewsSwiper();
  programsSwiper();
});
