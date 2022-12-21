const workArea = document.querySelector('.guests__guests-list');
const guestName = document.querySelector('.guest__name');
const guestDescr = document.querySelector('.guest__default-descr');
const guestPreview = document.querySelector('.guest__preview-img');
const guestLinkBox = document.querySelector('.guest__link-box');
const guestBtn = document.querySelector('.guest__btn');

function showGuest(event) {
  if (event.target.className === 'guests-names-item') {
    event.preventDefault();
    guestLinkBox.style.display = 'flex';
    guestBtn.style.display = 'initial';
    guestName.textContent = event.target.textContent;
    guestDescr.textContent = document
    .querySelector(`.guest__hide-descr[data-guest="${event.target.getAttribute('data-guest')}-text"]`)
    .textContent;
    guestPreview.src = event.target.getAttribute('data-img');
  }
}

workArea.addEventListener('click', (event) => {showGuest(event)});
workArea.addEventListener('keypress', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    showGuest(event);
   }
});
