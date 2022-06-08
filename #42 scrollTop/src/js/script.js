console.log('Start')

const html = document.querySelector('html');
const btn = document.querySelector('button');

const width = html.scrollWidth;
const height = html.scrollHeight;
const scrollTop = html.scrollTop;
// const width = html.clientWidth;
// const height = html.clientHeight;

btn.addEventListener('click', () => {
    console.log(html.scrollTop);
    progress.style.width = `${html.scrollTop}px`;
});

const progress = document.querySelector('.progress');



