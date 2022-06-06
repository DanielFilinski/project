// setTimeout setInterval

let timerId;
let i = 0, n = 0;

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
const wrapper = document.querySelector('.wrapper');


let wrapperWidth = 0;
let wrapperHeight = 0;

const animation = () => {

    const moveWidth = (gap) => {
        wrapperWidth += gap;
        box.style.left = wrapperWidth + 'px';
    }

    const moveHeight = (gap) => {
        wrapperHeight += gap;
        box.style.top = wrapperHeight + 'px';
    }

    const id = setInterval(frame, 10);

    function frame() {
        if (wrapperHeight === 0) {
            moveHeight(10)
        } else if (wrapperHeight === 0) {
            moveHeight(-10)
        };

        if (wrapperWidth === 1200) {
            moveWidth(10)
        } else if (wrapperWidth === 0) {
            moveWidth(-10)
        }
    }
};

let width = 100;
let height = 100;

btn.addEventListener('click', animation);

box.addEventListener('click', (event) => {
    if (event.target.classList.contains('box')) {
        console.log(`strike ${i++}`);
        width -= 10;
        height -= 10;
        box.style.width = width + 'px';
        box.style.height = height + 'px';
    }

});

wrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('wrapper')) {
        console.log(`loss ${n++}`);
        width += 10;
        height += 10;
        box.style.width = width + 'px';
        box.style.height = height + 'px';
    }
});





// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 100);
// });


// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('logger');
//     i++;
// };

