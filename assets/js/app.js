const min = 555;
const max = 700;
const random = Math.floor(max * Math.random() + min * 2 + max);

const config = {
    api_key: '103186a9f4ef77e1f666cdd93a1fa70a',
    api_base_url: 'https://api.themoviedb.org/3/',
    image_base_url: 'https://image.tmdb.org/t/p/w500',
    imageError: 'https://www.diamed.med.br/wp-content/uploads/diamed-banner-erro301.jpg',
    language: 'language=pt-BR',
    example: `https://api.themoviedb.org/3/movie/293660?api_key=103186a9f4ef77e1f666cdd93a1fa70a&language=pt-BR`,
    exampleRandom: `https://api.themoviedb.org/3/movie/${random}?api_key=103186a9f4ef77e1f666cdd93a1fa70a`,
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDMxODZhOWY0ZWY3N2UxZjY2NmNkZDkzYTFmYTcwYSIsInN1YiI6IjYyZGVmMzliYmJjYWUwMDA1MDEzYTg4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT9bykoKEOw31Mrkbnjitrc3Bxthf-E6b8jRnjPcEyE'
};

const getBannerMovie = () => {

    const paragraph = document.getElementById("paragraph");
    const genres = document.getElementById("genres");
    const release_date = document.getElementById("release_date");
    const time = document.getElementById("time");

    fetch(config.example)
        .then(response => (response.json()))
        // .then(json =>  document.getElementById("hero-image").style.backgroundImage = `url("https://image.tmdb.org/t/p/w500${json.backdrop_path}")`)
        .then(json => {
            paragraph.innerText = json.original_title
            genres.innerText = `${json.genres[0].name} ${json.genres[2].name}`
            release_date.innerText = json.release_date
            time.innerText = `${json.runtime} minutos`
        })
        .catch(() => console.log('Que pena! Não encontramos nenhum filme.'))

}

getBannerMovie();