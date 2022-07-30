export function getFolder (id){
    const movieImg = document.querySelector(`[data-img="${id}"]`)
    const movieName = document.querySelector(`[data-name="${id}"]`)
    const movieYear = document.querySelector(`[data-year="${id}"]`)
    const movieLikes = document.querySelector(`[data-img="${id}"]`)
    const movieDuration = document.querySelector(`[data-img="${id}"]`)
    return{
        movieImg: movieImg,
        movieName: movieName,
        movieYear: movieYear,
        movieLikes: movieLikes,
        movieDuration: movieDuration
    }
}



