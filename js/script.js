"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '0');

alert(numberOfFilms);

const personalMovieDB = {
    count : [],
    movies : [],
    actors : [],
    genres : [],
    privat : []
};

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = {};
personalMovieDB.privat = false;

const lastFilm = prompt('Last viewed movie',' ');
alert(`last film is ${lastFilm}`);
const assesment = prompt('Your assesment?','5');
alert(`assesment is ${assesment}`);
const movie = {};

personalMovieDB.movies[lastFilm] = assesment;
console.log(personalMovieDB);