var throttle = require('lodash.throttle');

const FEEDBACK_LOCAL_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(sendDataToLocalStorage, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_LOCAL_KEY);
}

function sendDataToLocalStorage(e) {
  const formValues = {
    email: refs.email.value,
    message: refs.textarea.value,
  };

  localStorage.setItem(FEEDBACK_LOCAL_KEY, JSON.stringify(formValues));
}

(() => {
  const savedValues = JSON.parse(localStorage.getItem(FEEDBACK_LOCAL_KEY));

  refs.email.value = savedValues ? savedValues.email : '';
  refs.textarea.value = savedValues ? savedValues.message : '';
})();