const min = 555;
const max = 700;
const random = Math.floor(max * Math.random() + min * 2 + max);
const API_URL = '103186a9f4ef77e1f666cdd93a1fa70a';

 const config = {
    image_base_url: 'https://image.tmdb.org/t/p/w500',
    imageError: 'https://www.diamed.med.br/wp-content/uploads/diamed-banner-erro301.jpg',
    language: 'language=pt-BR',
    example: `https://api.themoviedb.org/3/movie/293660?api_key=${API_URL}&language=pt-BR`,
    exampleRandom: `https://api.themoviedb.org/3/movie/${random}?api_key=${API_URL}`,
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDMxODZhOWY0ZWY3N2UxZjY2NmNkZDkzYTFmYTcwYSIsInN1YiI6IjYyZGVmMzliYmJjYWUwMDA1MDEzYTg4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT9bykoKEOw31Mrkbnjitrc3Bxthf-E6b8jRnjPcEyE',
    genre_dram: `https://api.themoviedb.org/3/discover/movie?api_key=${API_URL}&with_genres=28&page=1&sort_by=popularity.desc`
};

const getBannerMovie = () => {

    const paragraph = document.getElementById("paragraph");
    const genres = document.getElementById("genres");
    const release_date = document.getElementById("release_date");
    const time = document.getElementById("time");

    fetch(config.example)
        .then(response => (response.json()))
        .then(json => {
            paragraph.innerText = json.original_title
            genres.innerText = `${json.genres[0].name} ${json.genres[2].name}`
            release_date.innerText = json.release_date
            time.innerText = `${json.runtime} minutos`
        })
        .catch(() => console.log('Que pena! Não encontramos nenhum filme.'));
};

getBannerMovie();


//Codigo fernando
const getDataMovie = () => {

    const paragraph = document.getElementById("paragraph");
    const genres = document.getElementById("genres");
    const release_date = document.getElementById("release_date");
    const time = document.getElementById("time");

    fetch(config.example)
        .then(response => (response.json()))
        .then(json => {
            paragraph.innerText = json.original_title
            genres.innerText = `${json.genres[0].name} ${json.genres[2].name}`
            release_date.innerText = json.release_date
            time.innerText = `${json.runtime} minutos`
        })
        .catch(() => console.log('Que pena! Não encontramos nenhum filme.'));
};

function getDataMovies() {

}

getDataMovies();



