"use strict";
// let check, nameFilm;

// for (let i = 0; i < 1; i++) {
//     const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//     if (numberOfFilms === null) {
//         i--;
//         alert("Поле обязательное к заполнению");
//     } else {
//         check = +numberOfFilms;
//         nameFilm = numberOfFilms.length;
//         if (nameFilm == 0 || nameFilm > 50 || isNaN(check)) {
//             i--;
//             alert("Не верно заполнено, введите заново");
//         } else {
//             const personalMovieDB = {
//                 count: numberOfFilms,
//                 movies: {},
//                 actors: {},
//                 genres: [],
//                 privat: false,
//             };
//             let lastFilmName;
//             for (let j = 0; j <= 1; j++) {
//                 let lastFilm = prompt("Один из последних просмотренных фильмов?","");
//                 if (lastFilm === null) {
//                     j--;
//                     alert("Поле обязательное к заполнению");
//                 } else {
//                     lastFilmName = lastFilm.length;
//                     if (lastFilmName == 0 || lastFilmName > 50) {
//                         j--;
//                         alert("Не верно заполнено, введите заново");
//                     } else {
//                         let rateLenght, secondCheck;

//                         for (let k = 0; k <= 1; k++) {
//                             let filmRate = prompt(
//                                 "На сколько оцените его?",
//                                 "например 9.5"
//                             );
//                             if (filmRate === null) {
//                                 k = 0;
//                                 alert("Поле обязательное к заполнению");
//                             } else {
//                                 rateLenght = filmRate.length;
//                                 secondCheck = +filmRate;
//                                 if (
//                                     rateLenght == 0 ||
//                                     rateLenght > 50 ||
//                                     isNaN(secondCheck)
//                                 ) {
//                                     k = 0;
//                                     alert("Не верно заполнено, введите заново");
//                                 } else {
//                                     personalMovieDB.movies[lastFilm] = filmRate;
//                                     k = 2;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             if (personalMovieDB.count < 10) {
//                 alert("Просмотрено довольно мало фильмов");
//             } else if (
//                 personalMovieDB.count > 10 &&
//                 personalMovieDB.count < 30
//             ) {
//                 alert("Вы классический зритель");
//             } else {
//                 alert("Вы киноман");
//             }
//             console.log(personalMovieDB);
//         }
//     }
// }

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
        numberOfFilms == "" ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    let numberOfGenres;
    for (let i = 1; i <= 3; i++) {
        numberOfGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        if (numberOfGenres === null) {
            i--;
        } else if (numberOfGenres == "") {
            i--;
        } else {
            personalMovieDB.genres[i-1]= numberOfGenres;
        }
    }
}

writeYourGenres();
