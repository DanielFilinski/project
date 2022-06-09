console.log('Start')

const html = document.querySelector('html');
const btn = document.querySelectorAll('button');

const width = html.scrollWidth;
const height = html.scrollHeight;
const scrollTop = html.scrollTop;
// const width = html.clientWidth;
// const height = html.clientHeight;

btn.forEach((item) => {
    item.addEventListener('click', () => {
        progress.style.width = `${(html.scrollTop / (html.scrollHeight - html.clientHeight)) * 100}%`;
        console.log(progress.style.width);
    });
});

const progress = document.querySelector('.progress');