const answer = document.querySelector('.faq-item__answer-wrapper');
const buttonOpenAnswer = document.querySelector('.faq-item__answer-button--second');
const buttonCloseAnswer = document.querySelector('.answer-button--opened');

buttonOpenAnswer.onclick = () => {
  console.log('Клик!');
  answer.classList.toggle('faq-item__answer-wrapper--opened');
  buttonOpenAnswer.classList.toggle('answer-button--opened');
}
