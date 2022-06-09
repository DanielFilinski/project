console.log('Start')

const html = document.querySelector('html');
const btn = document.querySelectorAll('button');
const progress = document.querySelector('.progress');


html.addEventListener("wheel", (e) => {
    progress.style.width = `${((html.scrollTop / (html.scrollHeight - html.clientHeight)) * 100) - 2}%`;
    progress.style.transition = '.2s ease-in-out';
});