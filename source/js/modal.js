const openModalButton = document.querySelector('.open-modal-button');
const modalWindow = document.querySelector('.modal-window');
const closeButton = document.querySelector('.close-button');
const formMessage = document.querySelector('.form-message');
const modalSendButton = document.querySelector('.modal-inputs__button');
const closeMessageButton = document.querySelector('.close-modal-button');

openModalButton.onclick = () => {
  modalWindow.classList.add('modal-window--opened');
}

closeButton.onclick = () => {
  modalWindow.classList.remove('modal-window--opened');
}

modalSendButton.onclick = () => {
  console.log('A!');
  formMessage.classList.add('form-message--opened');
  modalWindow.classList.remove('modal-window--opened');
}

closeMessageButton.onclick = () => {
  formMessage.classList.remove('form-message--opened');
}

