const headerElement = document.querySelector('.page-header');

window.onscroll = () => {
  if (window.scrollY >= headerElement.offsetHeight) {
    headerElement.classList.add('page-header--scrolled');
  } else {
    headerElement.classList.remove('page-header--scrolled');
  }
}