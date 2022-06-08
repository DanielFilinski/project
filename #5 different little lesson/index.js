/*
let category = 'toys';
let number = 5;

console.log(`https://www.amazon.com/${category}/${number} - welcome to the website`);

console.log(6.5%2);
*/

// let nunmderOfFilms = +prompt('How many films you watched?', '');

// const personalMovieDB = {
//     count: nunmderOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const lastFilm = prompt('What is the last film you watched?', '');
// const lastFilmRating = prompt('What is the rating?', '');

// personalMovieDB.movies[lastFilm] = lastFilmRating;

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//     alert('hi');
// });





const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', () => {
    // alert('hi1');
    const btn3 = document.createElement('button');
    btn3.classList.add('btn3');
    document.querySelector('.btnm').append(btn3);

});

btn2.addEventListener('click', () => {
    // alert('hi1');
    document.querySelector('.btn3').remove()
});

