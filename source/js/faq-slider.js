const faqScrollButton = document.querySelector('.faq__scroll-button');

function faqScrollClick(e) {
  if (e === mediaQuery2) {
    faqScrollButton.onclick = () => {
      window.scrollTo(0, 3840);
    }
  }
}

mediaQuery2.addListener(faqScrollClick);
faqScrollClick(mediaQuery2);