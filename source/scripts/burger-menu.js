const burgerBtn = document.querySelector('.button-toggle');
const burgerText = document.querySelector('.button-toggle__text');
const mainNavigationList = document.querySelector('.main-nav__list');

burgerBtn.addEventListener('click', () => {
  const isClosed = burgerBtn.classList.contains('header__button--close');

  if (!isClosed) {
    burgerBtn.classList.add('header__button--close');
    mainNavigationList.classList.add('main-nav__list--open');
    burgerText.textContent = 'Закрыть меню';
    document.body.classList.add('page__body--noscroll');
  } else {
    burgerBtn.classList.remove('header__button--close');
    mainNavigationList.classList.remove('main-nav__list--open');
    burgerText.textContent = 'Открыть меню';
    document.body.classList.remove('page__body--noscroll');
  }
});
