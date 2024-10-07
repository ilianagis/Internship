const customSelect = document.querySelector('.form__custom-select');
const formSelect = document.querySelector('.form__select');

customSelect.addEventListener('click', () => {
  customSelect.classList.toggle('open');
});

// убирает класс при выборе
formSelect.addEventListener('change', () => {
  customSelect.classList.remove('open');
});

// убирает класс при потере фокуса
formSelect.addEventListener('blur', () => {
  customSelect.classList.remove('open');
});
