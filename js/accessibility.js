// этот скрипт призван убирать фокус после клика

// ссылки навигации
function anim(duration) {
  let temp;
  return function (sel) {
    if (sel) {
      cancelAnimationFrame(temp);
      const start = performance.now();
      const from = window.pageYOffset || document.documentElement.scrollTop,
        to = document.querySelector(sel).getBoundingClientRect().top;
      requestAnimationFrame(function step(timestamp) {
        let progress = (timestamp - start) / duration;
        1 <= progress && (progress = 1);
        window.scrollTo(0, from + to * progress | 0);
        1 > progress && (temp = requestAnimationFrame(step))
      })
      document.querySelector('body').style.overflow = 'auto';
      document.querySelector('.nav-top').classList.remove('burger-is-active');
    }
  }
};
const scrollMenu = anim(400) // плавный скролл к нужному блоку
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault(); el.classList.add('nav__link--active')});
  el.addEventListener('mouseup', () => {el.classList.remove('nav__link--active')});
  el.addEventListener('click', () => {
    scrollMenu(el.getAttribute('data-id'));
  })
})

// кнопка поиска
const searchBtn = document.querySelector('.nav-top__search');
searchBtn.addEventListener('mousedown', (e) => {e.preventDefault(); searchBtn.classList.add('nav-top__search--active')});
searchBtn.addEventListener('mouseup', () => {searchBtn.classList.remove('nav-top__search--active')});

// кнопки старт/пауза радио

document.querySelectorAll('.play__btn').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault(); el.classList.add('play__btn--active')});
  el.addEventListener('mouseup', () => {el.classList.remove('play__btn--active')});
})

// кнопка hero

const heroBtn = document.querySelector('.hero__btn');
heroBtn.addEventListener('mousedown', (e) => {e.preventDefault(); heroBtn.classList.add('hero__btn--active')});
heroBtn.addEventListener('mouseup', () => {heroBtn.classList.remove('hero__btn--active')});

// кнопки в подкастах

document.querySelectorAll('.content__play-btn').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault(); el.classList.add('content__play-btn--active')});
  el.addEventListener('mouseup', () => {el.classList.remove('content__play-btn--active')});
})

document.querySelectorAll('.user-activity-bg').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault()});
})

document.querySelectorAll('.user-activity__likes').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault()});
})

const podcastsBtn = document.querySelector('.podcasts__btn');
podcastsBtn.addEventListener('mousedown', (e) => {e.preventDefault(); podcastsBtn.classList.add('podcasts__btn--active')});
podcastsBtn.addEventListener('mouseup', () => {podcastsBtn.classList.remove('podcasts__btn--active')});

// choices

const choices = document.querySelector('.choices');

let timer;

function clearTimer() {
  clearTimeout(timer);
}

choices.addEventListener('focus', () => {
  timer = setTimeout(() => choices.classList.add('choices--focus'), 100);
})

choices.addEventListener('click', () => {
  setTimeout(clearTimer, 50);
});

choices.addEventListener('blur', () => {
  choices.classList.remove('choices--focus');
})

// broadcasts

const broadcastsBtn = document.querySelector('.broadcasts__btn');
broadcastsBtn.addEventListener('mousedown', (e) => {e.preventDefault(); broadcastsBtn.classList.add('broadcasts__btn--active')});
broadcastsBtn.addEventListener('mouseup', () => {broadcastsBtn.classList.remove('broadcasts__btn--active')});

document.querySelectorAll('.changing-item').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault(); el.classList.add('changing-item--active')});
  el.addEventListener('mouseup', () => {el.classList.remove('changing-item--active')});
})

// swipers

document.querySelectorAll('.swiper-button-interactive').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault()});
})

// footer

document.querySelectorAll('.links__navigation-item').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault(); el.classList.add('links__navigation-item--active')});
  el.addEventListener('mouseup', () => {el.classList.remove('links__navigation-item--active')});
  el.addEventListener('click', () => {
    scrollMenu(el.getAttribute('data-id'));
  })
})

document.querySelectorAll('.links__social-link').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault(); el.classList.add('links__social-link--active')});
  el.addEventListener('mouseup', () => {el.classList.remove('links__social-link--active')});
})

// same-wave-btns

document.querySelectorAll('.same-wave__btn').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault(); el.classList.add('same-wave__btn--active')});
  el.addEventListener('mouseup', () => {el.classList.remove('same-wave__btn--active')});
})

// playlists

document.querySelectorAll('.playlists__music-groups-item').forEach(el => {
  el.addEventListener('mousedown', (e) => {e.preventDefault(); el.classList.add('playlists__music-groups-item--active')});
  el.addEventListener('mouseup', () => {el.classList.remove('playlists__music-groups-item--active')});
})
