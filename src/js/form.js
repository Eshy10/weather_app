const form = (() => {
  const formElement = document.createElement('form');
  formElement.classList.add('form');
  const inputElement = document.createElement('input');
  inputElement.setAttribute('class', 'form__input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('placeholder', 'Enter City...');
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('class', 'button');
  buttonElement.setAttribute('type', 'submit');
  buttonElement.textContent = 'SEARCH';
  formElement.appendChild(inputElement);
  formElement.appendChild(buttonElement);
  return formElement;
})();
export default form;