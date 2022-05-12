const technologyScrollButton = document.querySelector('.technology__scroll-button');

function scrollClickTechnology(e) {
  if (e === mediaQuery2) {
    technologyScrollButton.onclick = () => {
      window.scrollTo(0, 3072);
    }
  }
}

mediaQuery2.addListener(scrollClickTechnology);
scrollClickTechnology(mediaQuery2);