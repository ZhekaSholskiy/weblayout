const burger = document.querySelector('.nav-top__burger');
export const body = document.querySelector('body');
const navTop = document.querySelector('.nav-top');
const navBottom = document.querySelector('.nav-bottom');
const burgerBg = document.querySelector('.burger-bg');
const navBotList = document.querySelector('.nav-bottom__list');

function navBottomOn() {
  if (window.screen.width < 640) {
    navBottom.classList.add('burger-is-active');
    navBotList.style.transform = 'translateX(-100%)';
    navBotList.style.opacity = '0';
    setTimeout(() => {
      navBotList.style.transform = 'translateX(0)';
      navBotList.style.opacity = '1';
    }, 1)
  }
}

function navBottomOff() {
  if (window.screen.width < 640) {
    navBotList.style.transform = 'translateX(100%)';
    navBotList.style.opacity = '0';
    setTimeout(() => {
      navBotList.style.transform = 'translateX(0)';
      navBotList.style.opacity = '1';
      navBottom.classList.remove('burger-is-active');
    }, 200)
  }
}

const linksArray = document.querySelectorAll('.nav-top__link');
const allLinks = document.querySelectorAll('[tabindex="0"]');
burger.addEventListener('keydown', (e) => {
  if (e.code === 'Tab' && navTop.classList.contains('burger-is-active')) {
    e.preventDefault();
    linksArray[0].focus();
  }
})

function toggleBurger() {
  if (!navTop.classList.contains('burger-is-active')) {
    allLinks.forEach(el => el.setAttribute('tabindex', '-1'));
    document.querySelector('.nav-top__burger').setAttribute('tabindex', '2');
    linksArray.forEach(el => el.setAttribute('tabindex', '1'));
    navTop.classList.add('burger-is-active');
    body.style.overflow = 'hidden';
    burgerBg.style.transform = 'translateX(-100%)';
    burgerBg.style.opacity = '0';
    navBottomOn();
    setTimeout(() => {
      burgerBg.style.transform = 'translateX(0)';
      burgerBg.style.opacity = '1';
    }, 1)
  } else {
    body.style.overflow = 'auto';
    burgerBg.style.transform = 'translateX(100%)';
    burgerBg.style.opacity = '0';
    allLinks.forEach(el => el.setAttribute('tabindex', '0'));
    navBottomOff();
    setTimeout(() => {
      burgerBg.style.transform = 'translateX(0)';
      burgerBg.style.opacity = '1';
      navTop.classList.remove('burger-is-active');
    }, 200)
  }
}

burger.addEventListener('click', () => {
  toggleBurger();
})

burger.addEventListener('mousedown', (e) => {
  e.preventDefault();
})

burger.addEventListener('keypress', (event) => {
  if (event.code === 'Space' || event.code === "Enter") {
    event.preventDefault();
    toggleBurger();
  }
})

const audioBurger = document.querySelector('.audio-plays-burger');
const audioPlays = document.querySelector('.audio-plays');

audioBurger.addEventListener('click', (e) => {
  if (!navBottom.className.includes('audio-plays-opened')) {
    audioPlays.style.transform = 'translateX(-100%)';
    audioPlays.style.opacity = '0';
    navBottom.classList.toggle('audio-plays-opened');
    setTimeout(() => {
      audioPlays.style.transform = 'translateX(0)';
      audioPlays.style.opacity = '1';
    }, 1);
  } else {
    audioPlays.style.transform = 'translateX(100%)';
    audioPlays.style.opacity = '0';
    setTimeout(() => {
      navBottom.classList.toggle('audio-plays-opened');
      audioPlays.style.transform = 'translateX(0)';
      audioPlays.style.opacity = '1';
    }, 200);
  }
})

audioBurger.addEventListener('mousedown', (e) => {
  e.preventDefault();
})
