// setTimeout setInterval

const stop = document.querySelectorAll('.btn')[0];
const ball = document.querySelectorAll('.btn')[1];
const box = document.querySelector('.box');
const wrapper = document.querySelector('.wrapper');

const go = document.querySelector('.btn-go');

const plusSpeed = document.querySelector('.btn-plus-speed');
const inputSpeed = document.querySelector('.input-value-speed');
const minusSpeed = document.querySelector('.btn-minus-speed');

const plusPlace = document.querySelector('.btn-plus-place');
const inputPlace = document.querySelector('.input-value-place');
const minusPlace = document.querySelector('.btn-minus-place');

const plusBox = document.querySelector('.btn-plus-box');
const inputBox = document.querySelector('.input-value-box');
const minusBox = document.querySelector('.btn-minus-box');


let wrapperWidth = 0;
let wrapperHeight = 0;

let afterW = -1;
let afterH = -1;

let speedEl = 0;
inputSpeed.value = speedEl
let placeEl = 800;
inputPlace.value = placeEl
let boxEl = 100;
inputBox.value = boxEl;
let boxElH = boxEl;

let id;

plusSpeed.addEventListener('click', () => {
    speedEl += 10;
    inputSpeed.value = speedEl;
});

minusSpeed.addEventListener('click', () => {
    speedEl -= 10;
    inputSpeed.value = speedEl;
});

plusPlace.addEventListener('click', () => {
    placeEl += 100;
    inputPlace.value = placeEl;
});

minusPlace.addEventListener('click', () => {
    placeEl -= 100;
    inputPlace.value = placeEl;
});

plusBox.addEventListener('click', () => {
    boxEl += 10;
    inputBox.value = boxEl;
});

minusBox.addEventListener('click', () => {
    boxEl -= 10;
    inputBox.value = boxEl;
});

const game = function (speed, placeWidth, boxWidth, boxHeight = boxWidth) {

    placeHeight = placeWidth / 2;

    ball.addEventListener('click', () => {
        boxHeight = boxWidth;
        box.style.width = `${boxWidth}px`;
        box.style.height = `${boxHeight}px`;
        box.style.borderRadius = '50%';
    });

    wrapper.style.width = `${placeWidth}px`;
    wrapper.style.height = `${placeHeight}px`;

    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;



    const animation = () => {

        const moveWidth = (gap) => {
            afterW = wrapperWidth;
            wrapperWidth += gap;
            box.style.left = wrapperWidth + 'px';
        }

        const moveHeight = (gap) => {
            afterH = wrapperHeight;
            wrapperHeight += gap;
            box.style.top = wrapperHeight + 'px';
        }

        const id = setInterval(frame, speed);

        function frame() {
            if (wrapperWidth >= 0 && wrapperWidth > afterW && wrapperWidth < placeWidth - boxWidth) {
                moveWidth(10)
            } else if (wrapperWidth !== 0) {
                moveWidth(-10)
            } else { wrapperWidth = 0; afterW = -1; }


            if (wrapperHeight >= 0 && wrapperHeight > afterH && wrapperHeight < placeHeight - boxHeight) {
                moveHeight(10)
            } else if (wrapperHeight !== 0) {
                moveHeight(-10)
            } else { wrapperHeight = 0; afterH = -1; }

        }

        stop.addEventListener('click', () => {
            clearInterval(id);
        });
    };

    animation();

    let i = 1, n = 1;
    box.addEventListener('click', (event) => {
        if (event.target.classList.contains('box')) {
            console.log(event.target.classList.contains('box'));
            console.log(`strike ${i++}`);
            boxWidth -= 10;
            boxHeight -= 10;
            box.style.width = boxWidth + 'px';
            box.style.height = boxHeight + 'px';
        }
    });

    wrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('wrapper')) {
            console.log(event.target.classList.contains('wrapper'));
            console.log(`loss ${n++}`);
            boxWidth += 10;
            boxHeight += 10;
            box.style.width = boxWidth + 'px';
            box.style.height = boxHeight + 'px';
        }
    });
}

game(100, 1200, 400, 100);