// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из 
// первого input, а GET-параметр limit — это введённое число второго input. 
// Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).

// Удачи!
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const myJSON = localStorage.getItem('key');

if (myJSON !=null){
    displayRes(JSON.parse(myJSON));
}

btn.addEventListener('click', () => {
    let pageNumber = document.querySelector('.input1').value;
    let limit = document.querySelector('.input2 ').value;

    if (pageNumber >= 1 && pageNumber <= 10 && limit >= 1 && limit <= 10) {
        fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                displayRes(data)
                localStorage.setItem('key', JSON.stringify(data));
            })
            .catch(() => { console.log('error') });  
    } else {
        result.innerHTML = `<p>Введите значения в диапазоне от 1 до 10</p>`;
    }
})

function displayRes (data){
    let cards ='';
    data.forEach(element => {
        let block = `<div class='card'> <img src='${element.download_url}'> </div>`;
        cards = cards + block;
        result.innerHTML = cards;
    });
}