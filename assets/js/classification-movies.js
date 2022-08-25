import {showDropDownClassificationMovieList } from './functions.js';

const filmes = document.querySelector('[data-filmes]');
const classificationMovieBox = document.querySelector('[data-classificationMovies]');

filmes.addEventListener('mouseover', () => {
    showDropDownClassificationMovieList(classificationMovieBox);
});

filmes.addEventListener('mouseout', () => {
    showDropDownClassificationMovieList(classificationMovieBox);
});



