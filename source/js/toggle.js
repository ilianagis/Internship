const toggleButton = document.querySelector('.header__toggle');
const menuList = document.querySelector('.header__list');
const toggleIconBurger = toggleButton.querySelector('.header__toggle-icon--burger');
const toggleIconCross = toggleButton.querySelector('.header__toggle-icon--cross');

toggleButton.addEventListener('click', () => {
  menuList.classList.toggle('active'); // Переключить класс для управления видимостью списка
  toggleButton.classList.toggle('header__toggle--active'); // Добавить/удалить класс для кнопки

  toggleIconBurger.style.display = menuList.classList.contains('active') ? 'none' : 'block'; // Показать/скрыть иконку бургера
  toggleIconCross.style.display = menuList.classList.contains('active') ? 'block' : 'none'; // Показать/скрыть иконку крестика
});
