const min = 555;
const max = 700;
const random = Math.floor(max * Math.random() + min * 2 + max);

const config = {
    api_key: '103186a9f4ef77e1f666cdd93a1fa70a',
    api_base_url: 'https://api.themoviedb.org/3/',
    image_base_url: 'https://image.tmdb.org/t/p/w500',
    imageError: 'https://www.diamed.med.br/wp-content/uploads/diamed-banner-erro301.jpg',
    language: 'language=pt-BR',
    example: `https://api.themoviedb.org/3/movie/453395?api_key=103186a9f4ef77e1f666cdd93a1fa70a`,
    exampleRandom: `https://api.themoviedb.org/3/movie/${random}?api_key=103186a9f4ef77e1f666cdd93a1fa70a`,
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDMxODZhOWY0ZWY3N2UxZjY2NmNkZDkzYTFmYTcwYSIsInN1YiI6IjYyZGVmMzliYmJjYWUwMDA1MDEzYTg4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT9bykoKEOw31Mrkbnjitrc3Bxthf-E6b8jRnjPcEyE'
};
