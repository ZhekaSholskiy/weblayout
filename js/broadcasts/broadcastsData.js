// списки для каждого выбора
const value1 = ['Не Рим, не Троя', 'Графомания td', 'О людях и книгах', 'Живые мысли', 'Тонкости эпох', 'Эрудит'];
const value2 = ['Снежинка', 'Мороз', 'Снег', 'Узоры', 'Параллилепипед', 'Мозаика'];
const value3 = ['Жаворонок', 'Снигирь', 'Пташка', 'Ласточка', 'Воробей', 'Крыжовник'];
const value4 = ['Замок', 'Дворец', 'Швейцария', 'Швейцарские часы', 'Город', 'Шексна'];

const images4 = ['broadcasts-img-1-value1.jpg', 'broadcasts-img-2-value1.jpg', 'broadcasts-img-3-value1.jpg',
                 'broadcasts-img-4-value1.jpg', 'broadcasts-img-5-value1.jpg', 'broadcasts-img-6-value1.jpg'];
const images2 = ['broadcasts-img-1-value2.jpg', 'broadcasts-img-2-value2.jpg', 'broadcasts-img-3-value2.jpg',
                 'broadcasts-img-4-value2.jpg', 'broadcasts-img-5-value2.jpg', 'broadcasts-img-6-value2.jpg'];
const images3 = ['broadcasts-img-1-value3.jpg', 'broadcasts-img-2-value3.jpg', 'broadcasts-img-3-value3.jpg',
                 'broadcasts-img-4-value3.jpg', 'broadcasts-img-5-value3.jpg', 'broadcasts-img-6-value3.jpg'];
const images1 = ['broadcasts-img-3.jpg','broadcasts-img-2.jpg','broadcasts-img-1.jpg',
                'broadcasts-img-6.jpg', 'broadcasts-img-5.jpg', 'broadcasts-img-4.jpg'];

// ф-я смотрит на текущий элемент селекта и обновляет правую часть секции
export function changeContentPart(elementList) {
            const dataValue = document.querySelector('.choices__item[data-item]').getAttribute('data-value');
            let value, images;
              switch (dataValue) {
                case 'value1':
                  {value = value1; images = images1}
                  break;
                case 'value2':
                  {value = value2; images = images2}
                  break;
                case 'value3':
                  {value = value3; images = images3}
                  break;
                case 'value4':
                  {value = value4; images = images4}
                  break;
                default:
                  break;
              }
              for (let i = 0; i < elementList.length; ++i) {
                elementList[i].childNodes[3].childNodes[1].textContent = value[i];
                elementList[i].childNodes[1].childNodes[1].attributes[1].nodeValue = `./img/${images[i]}`;
              }
}
