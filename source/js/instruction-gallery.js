const instructionItem1 = document.querySelector('.instruction-item--first');
const instructionItem2 = document.querySelector('.instruction-item--second');
const instructionItem3 = document.querySelector('.instruction-item--third');
const instructionItem4 = document.querySelector('.instruction-item--fourth');

const instructionItems = [
  instructionItem1,
  instructionItem2,
  instructionItem3,
  instructionItem4
];

const buttonPrev = document.querySelector('.instruction__button-prev');
const buttonNext = document.querySelector('.instruction__button-next');

buttonNext.onclick = () => {
  console.log('Клик!');
  buttonPrev.disabled = false;
    if (instructionItems[0].classList.contains('instruction-item--visible')) {
      instructionItems[0].classList.remove('instruction-item--visible');
      instructionItems[1].classList.add('instruction-item--visible')
    } else if (instructionItems[1].classList.contains('instruction-item--visible')) {
      instructionItems[1].classList.remove('instruction-item--visible');
      instructionItems[2].classList.add('instruction-item--visible')
    } else if (instructionItems[2].classList.contains('instruction-item--visible')) {
      instructionItems[2].classList.remove('instruction-item--visible');
      instructionItems[3].classList.add('instruction-item--visible')
    } else {
      buttonNext.disabled = true
    }
}

buttonPrev.onclick = () => {
  console.log('Клик!');
  buttonNext.disabled = false;
    if (instructionItems[3].classList.contains('instruction-item--visible')) {
      instructionItems[3].classList.remove('instruction-item--visible');
      instructionItems[2].classList.add('instruction-item--visible')
    } else if (instructionItems[2].classList.contains('instruction-item--visible')) {
      instructionItems[2].classList.remove('instruction-item--visible');
      instructionItems[1].classList.add('instruction-item--visible')
    } else if (instructionItems[1].classList.contains('instruction-item--visible')) {
      instructionItems[1].classList.remove('instruction-item--visible');
      instructionItems[0].classList.add('instruction-item--visible')
    } else {
      buttonPrev.disabled = true
    }
  // for (let i = 0; i < instructionItems.length; i += 1) {
  //   if (instructionItems[i].classList.contains('instruction-item--visible')) {
  //     instructionItems[i].classList.remove('instruction-item--visible');
  //     instructionItems[i-1].classList.add('instruction-item--visible');
  //   }
  //   if (instructionItem4.classList.contains('instruction-item--visible')) {
  //     buttonNext.disabled = true;
  //   } else {
  //     buttonNext.disabled = false;
  //   }
  //   if (instructionItem1.classList.contains('instruction-item--visible')) {
  //     buttonPrev.disabled = true;
  //   } else {
  //     buttonPrev.disabled = false;
  //   }
  // }
}

