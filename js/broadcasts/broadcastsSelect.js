//подключаем библиотеку
const choices = new Choices('#broadcasts__select', {
  searchEnabled: false,
  itemSelectText: '',
});

// удаляем из списка элемент, который выбран
choices.passedElement.element.addEventListener('showDropdown', () => {
  const value = choices.getValue().value;
  document.querySelectorAll('div[data-choice-selectable]').forEach(el => {
    if (el.dataset.value === value) el.remove();
  });
}, false)

document.querySelector('.choices').setAttribute('aria-label', 'выбрать автора');
