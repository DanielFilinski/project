console.log('Start')

const html = document.querySelector('html');
const btn = document.querySelector('button');
const progress = document.querySelector('.progress');
const square = document.querySelectorAll('.square');

const scrollBar = (e) => {
    progress.style.width = `${((html.scrollTop / (html.scrollHeight - html.clientHeight)) * 100) - 2}%`;
    // progress.style.transition = '.2s ease-in-out';
}

html.addEventListener("wheel", scrollBar);
html.addEventListener("scroll", scrollBar);



// Работа с координатами и стилями
console.log(square[0].getBoundingClientRect())

const style = window.getComputedStyle(square[0]);
// console.log(style) // выводит все стили
console.log(style.display)


// Прокрутка по кнопкам c помощью scrollTop

btn.addEventListener('click', () => {
    html.scrollTop = 500 // прокрутка на 500px от начала страницы
})

square[0].addEventListener('mouseover', () => {
    console.log('hover')
    html.scrollBy(0, 200) // прокрутка на 200px Относительно текущей позиции
})

square[1].addEventListener('click', () => {
    html.scrollTo(0, btn.getBoundingClientRect().bottom) // перемещение к кнопке где бы она не находится на странице
    console.log(btn.getBoundingClientRect().bottom)
})


const btnScroll = document.querySelector('.btn-scroll');

btnScroll.addEventListener('click', () => {
    html.scrollTo(0, html.scrollHeight - html.clientHeight)
})






