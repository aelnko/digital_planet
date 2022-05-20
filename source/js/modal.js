const introOrderButton = document.querySelector('.intro-buttons__order');
const openModalButton = document.querySelector('.open-modal-button');
const modalWindow = document.querySelector('.modal-window');
const closeButton = document.querySelector('.close-button');
const formMessage = document.querySelector('.form-message');
const modalSendButton = document.querySelector('.modal-inputs__button');
const closeMessageButton = document.querySelector('.close-modal-button');
let sendingForm = document.querySelector('.modal-window__inputs');
const okButton = document.querySelector('.form-message__ok-button');

openModalButton.onclick = () => {
  modalWindow.classList.add('modal-window--opened');
}

introOrderButton.onclick = () => {
  modalWindow.classList.add('modal-window--opened');
}

closeButton.onclick = () => {
  modalWindow.classList.remove('modal-window--opened');
}

sendingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  modalWindow.classList.remove('modal-window--opened');
  formMessage.classList.add('form-message--opened');
})

// modalSendButton.onclick = () => {
//   console.log('A!');
//   formMessage.classList.add('form-message--opened');
//   modalWindow.classList.remove('modal-window--opened');
// }

closeMessageButton.onclick = () => {
  formMessage.classList.remove('form-message--opened');
}

okButton.addEventListener('click', function () {
  formMessage.classList.remove('form-message--opened');
})

