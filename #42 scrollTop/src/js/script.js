console.log('Start')

const html = document.querySelector('html');
const btn = document.querySelectorAll('button');

const width = html.scrollWidth;
const height = html.scrollHeight;
const scrollTop = html.scrollTop;
// const width = html.clientWidth;
// const height = html.clientHeight;

html.addEventListener("wheel", (e) => {
    progress.style.width = `${(html.scrollTop / (html.scrollHeight - html.clientHeight)) * 100}%`;
    console.log(progress.style.width);
    console.log(`e.deltaY: ${e.deltaY}`);
    console.log(`e.deltaX: ${e.deltaX}`);
    console.log(`e.deltaMode: ${e.deltaMode}`);
    console.log(`e.detail: ${e.detail}`);
    console.log(`e.wheelDelta: ${e.wheelDelta}`);


});


// btn.forEach((item) => {
//     item.addEventListener('click', () => {
//         progress.style.width = `${(html.scrollTop / (html.scrollHeight - html.clientHeight)) * 100}%`;
//         console.log(progress.style.width);
//     });
// });

const progress = document.querySelector('.progress');