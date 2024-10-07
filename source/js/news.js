import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const swipers = {
  slider1: new Swiper('#slider1', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.news-swiper-button--next',
      prevEl: '.news-swiper-button--prev',
    },
    pagination: {
      el: '.news-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`; // Создание числовой пагинации
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  }),
  slider2: new Swiper('#slider2', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.news-swiper-button--next',
      prevEl: '.news-swiper-button--prev',
    },
    pagination: {
      el: '.news-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`; // Создание числовой пагинации
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  }),
  slider3: new Swiper('#slider3', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.news-swiper-button--next',
      prevEl: '.news-swiper-button--prev',
    },
    pagination: {
      el: '.news-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`; // Создание числовой пагинации
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  }),
  slider4: new Swiper('#slider4', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.news-swiper-button--next',
      prevEl: '.news-swiper-button--prev',
    },
    pagination: {
      el: '.news-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`; // Создание числовой пагинации
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  }),
  slider5: new Swiper('#slider5', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: '.news-swiper-button--next',
      prevEl: '.news-swiper-button--prev',
    },
    pagination: {
      el: '.news-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`; // Создание числовой пагинации
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  }),
};

// Обработчик кликов по вкладкам
document.querySelectorAll('.news__tabs-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    // Убираем класс активного состояния у всех вкладок
    document.querySelectorAll('.news__tabs-tab').forEach((t) => {
      t.classList.remove('active');
      document.getElementById(t.getAttribute('data-target')).style.display = 'none'; // Скрываем все слайды
    });

    // Добавляем класс активного состояния к выбранной вкладке
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    document.getElementById(target).style.display = ''; // Отображаем соответствующие слайды
  });
});
