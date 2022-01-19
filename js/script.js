let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Number of films', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Number of films', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const a = prompt(`You are favorite genre? id is ${i}`);

        if (a != null && a != '') {
            personalMovieDB.genres[i - 1] = a;
        } else {
            console.log('Error!');
            i--;
        }
    }
}

writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last film?', '');
        const b = prompt('Like it?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--;
        }
        
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

// console.log(personalMovieDB);