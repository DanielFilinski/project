// setTimeout setInterval

let timerId;


const btn = document.querySelectorAll('.btn')[0];
const stop = document.querySelectorAll('.btn')[1];
const ball = document.querySelectorAll('.btn')[2];
const box = document.querySelector('.box');
const wrapper = document.querySelector('.wrapper');


let wrapperWidth = 0;
let wrapperHeight = 0;

let afterW = -1;
let afterH = -1;

const game = function (speed, placeWidth, placeHeight, boxWidth, boxHeight = boxWidth) {

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

    btn.addEventListener('click', animation);

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