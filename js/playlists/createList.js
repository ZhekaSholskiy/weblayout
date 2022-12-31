import { createItem } from "./createItem.js";
import { genreList } from "./groupsData.js";

const playlists = document.querySelector('.playlists__container');
export const choicesList = document.querySelector('.playlists__list');

export function createList(isGenreExist) {
  const listWrapper = document.createElement('div');
  listWrapper.classList.add('playlists__rigth-part', 'music-swiper');
  playlists.append(listWrapper);

  // кнопки переключения
  const leftBtn = document.querySelector('.swiper-button-prev-svg').cloneNode(true);
  leftBtn.classList.add('playlists__swiper-button-prev', 'playlists__swiper-button', 'swiper-button-interactive');
  leftBtn.classList.remove('swiper-button-prev-svg');
  leftBtn.setAttribute('tabindex', '0');
  leftBtn.addEventListener('mousedown', (e) => {e.preventDefault()})
  const rightBtn = document.querySelector('.swiper-button-next-svg').cloneNode(true);
  rightBtn.classList.add('playlists__swiper-button-next', 'playlists__swiper-button', 'swiper-button-interactive');
  rightBtn.classList.remove('swiper-button-next-svg');
  rightBtn.setAttribute('tabindex', '0');
  rightBtn.addEventListener('mousedown', (e) => {e.preventDefault()})

  const groupsList = document.createElement('div');
  groupsList.classList.add('swiper-wrapper', 'anti-swiper');
  listWrapper.append(groupsList);
  listWrapper.after(leftBtn, rightBtn);

  const amountOfItems = Math.ceil(isGenreExist.length / 12);

  for (let i = 1; i <= amountOfItems; i++) {
    const twelveLi = document.createElement('div');
    twelveLi.classList.add('playlists__twelveLi', 'swiper-slide');
    groupsList.append(twelveLi);

    const twelveUl = document.createElement('ul');
    twelveUl.classList.add('.playlists__twelveUl', 'playlists__music-groups-list');

    twelveLi.append(twelveUl);

      for (let a = 12 * (i - 1); a < 12 * i && a < isGenreExist.length; a++) {
        let el = isGenreExist[a];
        createItem(el.lang, el.img, el.title, el.song, twelveUl);
      }
  }
}

createList(genreList['postpank']);


