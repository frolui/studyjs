"use strict";


const personalMovieDB = {
    count : {},
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
        }

        this.count = numberOfFilms;
    },
    rememberMyFilms(){
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Last viewed movie',''),
                  assesment = prompt('Your assesment?','');
                  console.log(assesment);
            
            if (lastFilm && lastFilm.length <= 50 && assesment) {
                this.movies[lastFilm] = assesment;
            }else {i--;}
                 
        }

    },
    detectPersonalLevel() {
        if (this.count < 10){
            alert('Просмотрено довольно мало фильмов');
        }else if (this.count < 30){
            alert('Вы классический зритель');
        }else if (this.count >= 30){
            alert('Вы киноман');
        }else {alert('Произошла ошибка');}
    },
    writeYourGenres() {
        let answer;
        for (let i = 1; i<4; i++){
            answer = prompt(`Ваш любимый жанр под номером ${i}`);
            if(answer !== '' & answer !== null){
                this.genres.push(answer);
            } else {
                i--;
            }
        }

        let i = 1;
        this.genres.forEach(element => {
            console.log(`Любимый жанр ${i} - это ${element}`);
            i++;
        });
    },
    showMyDB() {
        if (this.privat == false){
            console.log(this);    
        }
    },
    taggleVisibleMyDB() {
        this.privat = !this.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.taggleVisibleMyDB();
personalMovieDB.showMyDB();

