const instructionScrollButton = document.querySelector('.instruction__scroll-button');

function scrollClickInstruction(e) {
  if (e === mediaQuery2) {
   instructionScrollButton.onclick = () => {
     console.log('a');
     window.scrollTo(0, 2304);
   }
  }
}

mediaQuery2.addListener(scrollClickInstruction);
scrollClickInstruction(mediaQuery2);