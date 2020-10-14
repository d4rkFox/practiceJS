"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm1 = prompt("Один из последних просмотренных фильмов?", ""),
    filmRate1 = +prompt("На сколько оцените его?", "наприме 9.5"),
    lastFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
    filmRate2 = +prompt("На сколько оцените его?", "наприме 9.5");

personalMovieDB.movies[lastFilm1] = filmRate1;
personalMovieDB.movies[lastFilm2] = filmRate2;

console.log(personalMovieDB);


