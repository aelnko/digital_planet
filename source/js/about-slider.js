
const aboutScrollButton = document.querySelector('.about__scroll-button');

function scrollClickAbout(e) {
  if (e === mediaQuery2) {
   aboutScrollButton.onclick = () => {
     console.log('a');
     window.scrollTo(0, 1536);
   }
  }
}

mediaQuery2.addListener(scrollClickAbout);
scrollClickAbout(mediaQuery2);