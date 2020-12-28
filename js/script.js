"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Last viewed movie',''),
          assesment = prompt('Your assesment?','');
          console.log(assesment);
    
    if (lastFilm && lastFilm.length <= 50 && assesment) {
        personalMovieDB.movies[lastFilm] = assesment;
    }else {i--;}
         
}


if (personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count < 30){
    alert('Вы классический зритель');
}else if (personalMovieDB.count >= 30){
    alert('Вы киноман');
}else {alert('Произошла ошибка');}


console.log(personalMovieDB);