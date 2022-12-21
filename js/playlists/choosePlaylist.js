import { choicesList, createList } from "./createList.js";
import { genreList } from "./groupsData.js";

function choosePlaylist(event, parent = 'false') {
  if (event.target.className === 'custom-radio-input' || event.target.className === 'playlists__item') {
    let groupsList = document.getElementsByClassName('playlists__rigth-part');

    if (groupsList[0].childNodes[0].childNodes[0].childNodes[0].childNodes.length > 3) {
      groupsList[0].remove();
      document.querySelector('.playlists__swiper-button-prev').remove();
      document.querySelector('.playlists__swiper-button-next').remove();
    }

    let isGenreExist;
    parent === 'true' ?
    isGenreExist = genreList[event.target.getAttribute('data-genre')] :
    isGenreExist = genreList[event.target.parentNode.getAttribute('data-genre')];
    if (isGenreExist) {
      createList(isGenreExist);

      if (groupsList[0].childNodes[0].childNodes.length > 1) {
        const musicSwiper = new Swiper('.music-swiper', {
          spaceBetween: 30,
          navigation: {
            nextEl: ".playlists__swiper-button-next",
            prevEl: ".playlists__swiper-button-prev",
          }
        })
        toogleSlide('.playlists__swiper-button-next', () => musicSwiper.slideNext(400, false));
        toogleSlide('.playlists__swiper-button-prev', () => musicSwiper.slidePrev(400, false));
      }
    }
  }
}

export function toogleSlide(buttonClass, onPress) {
  document.querySelector(buttonClass).addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      onPress();
    }
  })
}

choicesList.addEventListener('click', (event) => {
    choosePlaylist(event);
  })

choicesList.addEventListener('keydown', (e) => {
  if ((e.code === 'Space' || e.code === 'Enter') && e.target.childNodes[1].checked === false) {
    e.preventDefault();
    choosePlaylist(e, 'true');
    e.target.childNodes[1].checked = 'true';
  }
})
