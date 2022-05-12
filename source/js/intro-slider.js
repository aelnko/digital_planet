const introScrollButton = document.querySelector('.intro__scroll-button');
const mediaQuery = window.matchMedia('(min-width: 320px)');
const mediaQuery2 = window.matchMedia('(min-width: 1366px)');

// introScrollButton.addEventListener('click', function scrollClick(e) {
//   if (e.matches) {
//     window.scrollTo(0, 568);
//   }
// })

function scrollClick(e) {
  if (e === mediaQuery) {
    introScrollButton.onclick = () => {
      window.scrollTo(0, 568);
    }
  } else {
    introScrollButton.onclick = () => {
      window.scrollTo(0, 768);
    }
  }
}



mediaQuery.addListener(scrollClick);
scrollClick(mediaQuery);
mediaQuery2.addListener(scrollClick);
scrollClick(mediaQuery2);




// introScrollButton.onclick = () => {
//   console.log('a!');
//   window.scrollTo(0, 568);
// }
