import { body } from "./burger.js";

const enterBtn = document.querySelector('.nav-top__authoriztion')
const formBg = document.querySelector('.modal-form__bg');
const form = document.querySelector('.modal-form');
const closeBtn = document.querySelector('.modal-form__close');

function closeForm() {
  formBg.style.display = 'none';
  body.style.overflow = 'auto';
}

enterBtn.addEventListener('click', () => {
  formBg.style.display = 'block';
  body.style.overflow = 'hidden';
  document.querySelector('.modal-form__input-login').focus();
})

closeBtn.addEventListener('click', () => {
  closeForm();
})

closeBtn.addEventListener('keypress', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    event.preventDefault();
    closeForm();
  }
})

document.addEventListener('click', (event) => {
  if (!form.contains(event.target) && formBg.contains(event.target)) {
    closeForm();
  }
})
