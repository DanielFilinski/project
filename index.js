/*
let category = 'toys';
let number = 5;

console.log(`https://www.amazon.com/${category}/${number} - welcome to the website`);

console.log(6.5%2);
*/

let nunmderOfFilms = +prompt('How many films you watched?', '');

const personalMovieDB = {
    count: nunmderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('What is the last film you watched?', '');
const lastFilmRating = prompt('What is the rating?', '');

personalMovieDB.movies[lastFilm] = lastFilmRating;