// открытие поиска

const searchContainer = document.querySelector('.nav-top__search');
const searchBtn = document.querySelector('.search-btn');
const searchArea = document.querySelector('.search-area');

function setDisplay(param) {
  searchArea.style.display = param;
};

function toggleClass() {
  searchContainer.classList.toggle('search-active');
};

let timerID;
let toggleClassTimer;

function manageSearch() {
  clearTimeout(toggleClassTimer);
  clearTimeout(timerID);
  searchContainer.classList.contains('search-active') ?
  timerID = setTimeout(() => {setDisplay('none')}, 500) :
  setDisplay('block');
  toggleClassTimer = setTimeout(toggleClass, 1);
};

searchBtn.addEventListener('click', manageSearch);

searchContainer.addEventListener('keydown', (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    manageSearch()};
});
