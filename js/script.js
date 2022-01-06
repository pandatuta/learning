const numberOfFilms = +prompt('Number of films', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last film?', ''),
      b = prompt('Like it?', ''),
      c = prompt('Last film?', ''),
      d = prompt('Like it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);