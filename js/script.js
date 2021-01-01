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

        this.count = numberOfFilms;
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Last viewed movie',''),
                  assesment = prompt('Your assesment?','');
                  console.log(assesment);
            
            if (lastFilm && lastFilm.length <= 50 && assesment) {
                this.movies[lastFilm] = assesment;
            }else {i--;}
                 
        }

    },
    detectPersonalLevel: function() {
        if (this.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }else if (this.count < 30){
            alert('Вы классический зритель');
        }else if (this.count >= 30){
            alert('Вы киноман');
        }else {alert('Произошла ошибка');}
    },
    writeYourGenres: function() {
        for (let i = 1; i<4; i++){
            this.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
        }
    },
    showMyDB: function() {
        if (this.privat == false){
            console.log(this);    
        }
    },
    taggleVisibleMyDB: function() {
        this.privat === false ? this.privat = true : this.privat = false;
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.taggleVisibleMyDB();
personalMovieDB.showMyDB();

console.log(personalMovieDB.privat);
