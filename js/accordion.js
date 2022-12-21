const accordion = new Accordion('.accordion-container');

const guestsItems = document.getElementsByClassName('guests__item');
const guestsList = document.getElementsByClassName('guests__guests-list');

guestsList[0].addEventListener('keypress', (event) => {
  console.log()
  if ((event.code === 'Space' || event.code === 'Enter') && event.target.className.includes('ac-header')) {
    event.preventDefault();
    const toggler = event.target.getAttribute('aria-expanded');
    accordion.closeAll();
    if (toggler === 'false') {
      accordion.open(event.target.id.slice(-1));
    }
  }
})
