"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '0');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const lastFilm = prompt('Last viewed movie',' ');
const assesment = prompt('Your assesment?','5');

personalMovieDB.movies[lastFilm] = assesment;

console.log(personalMovieDB);