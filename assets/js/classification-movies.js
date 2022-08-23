import {showDropDownClassificationMovieList } from './functions.js'

const movieButton = document.querySelector('[data-filmes]')
const classificationMovieBox = document.querySelector('[data-classificationMovies]')

movieButton.addEventListener('mouseover', () => {
    showDropDownClassificationMovieList(classificationMovieBox)
})

classificationMovieBox.addEventListener('mouseleave', () => {
    showDropDownClassificationMovieList(classificationMovieBox)
})
