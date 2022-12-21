const burger = document.querySelector('.nav-top__burger');
export const body = document.querySelector('body');
const navTop = document.querySelector('.nav-top');

function toggleBurger() {
  navTop.classList.toggle('burger-is-active');
  navTop.classList.contains('burger-is-active') ?
  body.style.overflow = 'hidden' :
  body.style.overflow = 'auto';
}

burger.addEventListener('click', () => {
  toggleBurger();
})

burger.addEventListener('keypress', (event) => {
  if (event.code === 'Space' || event.code === "Enter") {
    event.preventDefault();
    toggleBurger();
  }
})

const navBottom = document.querySelector('.nav-bottom');
const audioBurger = document.querySelector('.audio-plays-burger');
const audioPlays = document.querySelector('.audio-plays');

audioBurger.addEventListener('click', () => {
  audioPlays.style.transform = 'translateX(-100%)';
  audioPlays.style.opacity = '0';
  navBottom.classList.toggle('audio-plays-opened');
  setTimeout(() => {
    audioPlays.style.transform = 'translateX(0)';
    audioPlays.style.opacity = '1';
  }, 1);
})
