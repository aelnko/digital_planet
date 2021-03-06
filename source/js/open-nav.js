const pageHeader = document.querySelector('.page-header');
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.page-header__nav-toggle');

navToggle.onclick = () => {
  console.log('Клик!');
  pageHeader.classList.toggle('page-header--opened-nav');
  pageMainElement.classList.toggle('page-main--opened-nav');
  pageFooterElement.classList.toggle('page-footer--opened-nav');
  nav.classList.toggle('nav--opened');
  navToggle.classList.toggle('page-header__nav-toggle--close');
}