const podcasts = document.querySelectorAll('.podcasts-item');
const podcastsList = document.querySelector('.podcasts__list');

const podcastsBtn = document.querySelector('.podcasts__btn');

podcastsBtn.addEventListener('click', () => {
  for (let i = 0; i < 4; ++i) {
    podcastsList.append(podcasts[i].cloneNode(true));
  }
})
