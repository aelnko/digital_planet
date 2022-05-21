document.addEventListener('DOMContentLoaded', function () {
  const connectionForm = document.querySelector('.connection-inputs');

  connectionForm.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(connectionForm);
    if (error !== 0) {
      console.log('Заполните поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    let errorMessages = document.querySelectorAll('.error-message');

    for (let index = 0; index < formReq.length; index++) {
      const message = errorMessages[index];
      const input = formReq[index];
      formRemoveError(input, message);

      if (input.classList.contains('email-input__input')) {
        if (emailTest(input)) {
          formAddError(input, message);
          console.log('a');
          error++;
        }
        } else if (input.classList.contains('name-input__input')) {
          if (input.value === '') {
            formAddError(input, message);
            error++;
          }
        }
      }
    }
    function formAddError(input, message) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
      message.classList.add('_error');
    }
  
    function formRemoveError(input, message) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
      message.classList.remove('_error');
    }
  
    // Функция теста email
    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
})