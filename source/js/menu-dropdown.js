const dropdownItems = document.querySelectorAll('.header__item--dropdown');

dropdownItems.forEach((item) => {
  const link = item.querySelector('.header__link');
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    const dropdownList = item.querySelector('.header__dropdown-list');
    dropdownList.classList.toggle('active');
    dropdownList.style.display = dropdownList.classList.contains('active') ? 'block' : 'none';

    item.classList.toggle('active');
  });
});
