"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '0');

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

// let i = 0;

// while (i < 2){
//     const lastFilm = prompt('Last viewed movie',''),
//           assesment = prompt('Your assesment?','');
//           console.log(assesment);
    
//     if (lastFilm && lastFilm.length <= 50 && assesment) {
//         personalMovieDB.movies[lastFilm] = assesment;
//     }else {i--;}
//     i++;
// }

// do{ const lastFilm = prompt('Last viewed movie',''),
//           assesment = prompt('Your assesment?','');
//           console.log(assesment);
    
//     if (lastFilm && lastFilm.length <= 50 && assesment) {
//         personalMovieDB.movies[lastFilm] = assesment;
//     }else {i--;}
//     i++;
// } while (i<2);

if (personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count < 30){
    alert('Вы классический зритель');
}else if (personalMovieDB.count >= 30){
    alert('Вы киноман');
}else {alert('Произошла ошибка');}


console.log(personalMovieDB);