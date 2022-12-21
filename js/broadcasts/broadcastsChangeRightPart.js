import { changeContentPart } from "./broadcastsData.js";

// берем все элементы правой части
export let broadcastsList = document.getElementsByClassName('changing-item');

  const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {

      // берем title селекта
      let listTitle = document.querySelector('.choices__list--single').childNodes[0];

      // ставим всем элементам tabindex для возможности их выбора
      document.querySelectorAll('div[data-choice-selectable]').forEach(el => el.setAttribute('tabindex', '0'));

      // условие: если открываем select, запоминаем, какое значение в нем
      if (mutation.type === 'attributes' &&
      document.querySelector('div[data-type=select-one]')
      .getAttribute('aria-expanded') === 'true' ) {
          listTitle.setAttribute('data-prev', listTitle.getAttribute('data-value'));
      }

      // если закрываем select, смотрим, изменилось ли значение, и если изменилось - накидываем анимацию и
      // меняем правую часть соответственно выбору с помощью changeContentPart()
      if (  mutation.type === 'attributes' &&
            document.querySelector('div[data-type=select-one]')
            .getAttribute('aria-expanded') === 'false' &&
            listTitle.getAttribute('data-prev') !== listTitle.getAttribute('data-value')
          ) {
            Array.from(broadcastsList).forEach(el => {
              el.classList.add('animate__bounceIn');
            });
            changeContentPart(broadcastsList);
          }
    }
};

// следим за атрибутом, который меняется при открытии/закрытии селекта
const config = {
  attributes: true,
  attributeFilter: ['aria-expanded'],
};

// создаем обзёрвер, следящий за изменениями
const observer = new MutationObserver(callback);

// накидываем обзёрвер на select
setTimeout(() => {
  const element = document.querySelector('div[data-type=select-one]');
  observer.observe(element, config);
}, 100);

// добавляем анимацию элементам и удаляем, если она проиграла
Array.from(broadcastsList).forEach(el => {
  el.classList.add('animate__animated');
  el.addEventListener('animationend', () => {
    el.classList.remove('animate__bounceIn');
  })
})
