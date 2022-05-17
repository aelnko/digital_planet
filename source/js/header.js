

window.onscroll = () => {
  if (window.scrollY >= headerElement.offsetHeight) {
    headerElement.classList.add('page-header--scrolled');
    console.log('header');
  } else {
    headerElement.classList.remove('page-header--scrolled');
  }
}