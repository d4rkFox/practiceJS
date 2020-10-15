"use strict";
let check, nameFilm;

for (let i = 0; i < 1; i++) {
    const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    if (numberOfFilms === null) {
        i--;
        alert("Поле обязательное к заполнению");
    } else {
        check = +numberOfFilms;
        nameFilm = numberOfFilms.length;
        if (nameFilm == 0 || nameFilm > 50 || isNaN(check) === true) {
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
            let lastFilmName;
            for (let j = 0; j <= 1; j++) {
                let lastFilm = prompt("Один из последних просмотренных фильмов?","");
                if (lastFilm === null) {
                    j--;
                    alert("Поле обязательное к заполнению");
                } else {
                    lastFilmName = lastFilm.length;
                    if (lastFilmName == 0 || lastFilmName > 50) {
                        j--;
                        alert("Не верно заполнено, введите заново");
                    } else {
                        let rateLenght, secondCheck;

                        for (let k = 0; k <= 1; k++) {
                            let filmRate = prompt(
                                "На сколько оцените его?",
                                "например 9.5"
                            );
                            if (filmRate === null) {
                                k = 0;
                                alert("Поле обязательное к заполнению");
                            } else {
                                rateLenght = filmRate.length;
                                secondCheck = +filmRate;
                                if (
                                    rateLenght == 0 ||
                                    rateLenght > 50 ||
                                    isNaN(secondCheck) === true
                                ) {
                                    k = 0;
                                    alert("Не верно заполнено, введите заново");
                                } else {
                                    personalMovieDB.movies[lastFilm] = filmRate;
                                    k = 2;
                                }
                            }
                        }
                    }
                }
            }
            if (personalMovieDB.count < 10) {
                alert("Просмотрено довольно мало фильмов");
            } else if (
                personalMovieDB.count > 10 &&
                personalMovieDB.count < 30
            ) {
                alert("Вы классический зритель");
            } else {
                alert("Вы киноман");
            }
            console.log(personalMovieDB);
        }
    }
}
