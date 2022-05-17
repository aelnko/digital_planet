const introScrollButton = document.querySelector('.intro__scroll-button');
const mediaQuery2 = window.matchMedia('(min-width: 1366px)');
const aboutNavItem = document.querySelector('.nav-item:nth-of-type(2)')

function scrollClick(e) {
  if (e.matches) {
    introScrollButton.onclick = () => {
      window.scrollTo(0, 768);
    }
  } else {
    introScrollButton.onclick = () => {
      window.scrollTo(0, 568);
    }
  }
}

mediaQuery2.addListener(scrollClick);
scrollClick(mediaQuery2);




// introScrollButton.onclick = () => {
//   console.log('a!');
//   window.scrollTo(0, 568);
// }
