const technologyItem1 = document.querySelector('.technology-item--first');
const technologyItem2 = document.querySelector('.technology-item--second');
const technologyItem3 = document.querySelector('.technology-item--third');
const technologyItem4 = document.querySelector('.technology-item--fourth');

const technologyItems = [
  technologyItem1,
  technologyItem2,
  technologyItem3,
  technologyItem4
];

const technologyButtonPrev = document.querySelector('.technology__button-prev');
const technologyButtonNext = document.querySelector('.technology__button-next');

technologyButtonPrev.disabled = true;

technologyButtonNext.onclick = () => {
  console.log('Клик!');
  technologyButtonPrev.disabled = false;
  if (technologyItems[0].classList.contains('technology-item--visible')) {
    technologyItems[0].classList.remove('technology-item--visible');
    technologyItems[1].classList.add('technology-item--visible');
  } else if (technologyItems[1].classList.contains('technology-item--visible')) {
    technologyItems[1].classList.remove('technology-item--visible');
    technologyItems[2].classList.add('technology-item--visible');
  } else if (technologyItems[2].classList.contains('technology-item--visible')) {
    technologyItems[2].classList.remove('technology-item--visible');
    technologyItems[3].classList.add('technology-item--visible');
    technologyButtonNext.disabled = true;
  } else {
    technologyButtonNext.disabled = true;
  }
}

technologyButtonPrev.onclick = () => {
  console.log('Клик!');
  technologyButtonNext.disabled = false;
  if (technologyItems[3].classList.contains('technology-item--visible')) {
    technologyItems[3].classList.remove('technology-item--visible');
    technologyItems[2].classList.add('technology-item--visible');
  } else if (technologyItems[2].classList.contains('technology-item--visible')) {
    technologyItems[2].classList.remove('technology-item--visible');
    technologyItems[1].classList.add('technology-item--visible');
  } else if (technologyItems[1].classList.contains('technology-item--visible')) {
    technologyItems[1].classList.remove('technology-item--visible');
    technologyItems[0].classList.add('technology-item--visible');
    technologyButtonPrev.disabled = true;
  } else {
    technologyButtonPrev.disabled = true;
  }
}