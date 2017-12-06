//  ID
const content_js = document.getElementById('content'); // JS
const content_jquery = $('#content'); // jQuery

content_js.textContent = 'Сделано из JS'; // JS
// content_jquery.text('Сделано из jQuery'); // jQuery

//  CLASS
const classJs = document.getElementsByClassName('content');
console.log(classJs);
const classJquery = $('.content');
//  [ТЕГ] Идентификатор (#, .) Название

//  NAME
const nameJs = document.getElementsByName('content');
const nameJquery = $('[name="content"]');

// const typeJquery = $('div.test[type="submit"][name="submit-button"]');

// classJs[0].innerHTML = '<span>Вставлен тег из JS</span>';
for (let i = 0; i < classJs.length; i++) {
    const el = classJs[i];
    el.innerHTML = '<span>Вставлен тег из JS</span>';
}
nameJquery.html('<div>Вставлен тег из jQuery</div>');

//  События

//  1) Отловить нажатие на кнопку
//  2) Получить нужный элемент
//  3) Сделать текст внутри красным

//  JS
// const buttonJs = document.getElementsByTagName('button');
// for (let i = 0; i < buttonJs.length; i++) {
//     const el = buttonJs[i];
//     if (el.type === 'button') {
//         el.addEventListener('click', function () {
//             const span = document.getElementsByClassName('red');
//             if (span[0].style.color === 'red') {
//                 span[0].style.color = 'black';
//             } else {
//                 span[0].style.color = 'red';
//             }
//         });
//     }
// }

//  Jquery
const buttonJquery = $('[type="button"]');
buttonJquery.click(function () {
    const span = $('.red');
    if (span.css('color') === 'rgb(255, 0, 0)') {
        span.css('color', 'black');
    } else {
        span.css('color', 'red');
    }
    //  .prop .attr .css
    //  1 -> GET
    //  2 -> SET
    //  .css('color') -> Получится цвет
    //  .css('color', 'red') -> Выставится цвет
});

//  AJAX

const cityId = 523750;
const appId = 'addd9b7c638d19282e10c7590c0147e9';
const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${appId}&units=metric`;

$.ajax({
    url: url,
    method: 'GET',
    success: function (response) {
        $('.city').text(response.name);
        $('.temp').text(response.main.temp);
    },
    error: function (err) {
        console.log(err);
    },
});
