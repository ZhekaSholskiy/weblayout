import { toogleSlide } from "./playlists/choosePlaylist.js";

toogleSlide('.personal-data__label', () => {
  let checkbox = document.getElementById('form__checkbox');
  checkbox.checked ?
  checkbox.checked = false :
  checkbox.checked = true;
})
