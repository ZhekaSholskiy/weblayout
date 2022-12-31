// поменять значок вкл/выкл радио

const playBtn = Array.from(document.getElementsByClassName('play-media'));

function stopRadio(btn, audio) {
  audio && audio.pause();
  btn.classList.remove('active-radio');
  btn.setAttribute('data-play-radio', 'false');
}

async function playRadio(btn) {
  const isPlay = btn.getAttribute('data-play-radio');
  const audio = document.getElementById(btn.id + '-audio');
  // выключаем все остальные кнопки
  playBtn.forEach(otherBtn => stopRadio(otherBtn, document.getElementById(otherBtn.id + '-audio')));

  if (isPlay === 'false') {
    btn.setAttribute('data-play-radio', 'true');
    btn.classList.add('active-radio');
    await audio.play();
  } else {
    stopRadio(btn, audio);
  }
}

  playBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        playRadio(btn);
      });
  });
