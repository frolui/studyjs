"use strict";


const personalMovieDB = {
    count : {},
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
        }

        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Last viewed movie',''),
                  assesment = prompt('Your assesment?','');
                  console.log(assesment);
            
            if (lastFilm && lastFilm.length <= 50 && assesment) {
                personalMovieDB.movies[lastFilm] = assesment;
            }else {i--;}
                 
        }

    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count < 30){
            alert('Вы классический зритель');
        }else if (personalMovieDB.count >= 30){
            alert('Вы киноман');
        }else {alert('Произошла ошибка');}
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

function writeYourGenres(){
    for (let i = 1; i<4; i++){
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}

writeYourGenres();

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);    
    }
}

showMyDB();