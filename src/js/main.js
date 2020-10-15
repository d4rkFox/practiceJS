"use strict";
for (let i = 0; i < 1; i++) {
    const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    console.log(numberOfFilms);
    const check = +numberOfFilms;
    console.log(typeof check);
    console.log(isNaN(check));
    const nameFilm = numberOfFilms.length;
    if (
        nameFilm == 0 ||
        nameFilm > 50 ||
        isNaN(check) === true ||
        numberOfFilms === null
    ) {
        i--;
        alert("Не верно заполнено, введите заново");
    } else {
        const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false,
        };
        for (let j = 0; j <= 1; j++) {
            let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
            const lastFilmName = lastFilm.length;
            if (lastFilmName == 0 || lastFilmName > 50 || lastFilm === null) {
                j = 0;
                alert("Не верно заполнено, введите заново");
            } else {
                for (let k = 0; k <= 1; k++) {
                    let filmRate = prompt("На сколько оцените его?","например 9.5");
                    const rateLenght = filmRate.length;
                    const secondCheck = +filmRate;
                    if (rateLenght == 0 || rateLenght > 50 || isNaN(secondCheck) === true || filmRate === null) {
                        k = 0;
                        alert("Не верно заполнено, введите заново");
                    } else {
                        personalMovieDB.movies[lastFilm] = filmRate;
               
                        k = 2;
                    }
                }
            }
        }
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else {
            alert("Вы киноман");
        }
        console.log(personalMovieDB);
    }
}
