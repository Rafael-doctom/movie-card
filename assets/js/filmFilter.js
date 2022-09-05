const API_URL = '103186a9f4ef77e1f666cdd93a1fa70a';
const genre_dram = document.getElementById("genre_dram");
const genre_romance = document.getElementById("genre_romance");
const genre_comedy = document.getElementById("genre_comedy");

export function request2(page = 1) {

    var url_image = 'https://image.tmdb.org/t/p/w500';

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_URL}&with_genres=28&page=${page}&sort_by=popularity.desc`)
        .then(response => response.json())
        .then(json => {
            var data_join = json.results.map(item => {
                return `
                    <div class="movie__box" data-id="${item.id}">
                        <img src="${url_image}${item.poster_path}" alt="" class="movies__img" id="movie__box_image" />
                        <div class="movie__details">
                            <p class="details__name" id="details__name">${item.original_title}</p>
                            <p class="details__year">Ano de lançamento: ${item.release_date.substring(0, 4)}</p>
                            <p class="details__likes"> 
                            <img src="assets/icons/thumbs-up.svg" alt="liked icon"/> ${item.vote_average}
                            </p>
                        </div>
                    </div>
                `
            })

            document.getElementById("movie__box2").innerHTML = data_join.join("");

        })
        .catch(() => console.log('Que pena! Não encontramos nenhum filme.'));
};


export function request3(page = 1) {

    var url_image = 'https://image.tmdb.org/t/p/w500';

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_URL}&with_genres=10749&page=${page}&sort_by=popularity.desc`)
        .then(response => response.json())
        .then(json => {
            var data_join = json.results.map(item => {
                return `
                    <div class="movie__box" data-id="${item.id}">
                        <img src="${url_image}${item.poster_path}" alt="" class="movies__img" id="movie__box_image" />
                        <div class="movie__details">
                            <p class="details__name" id="details__name">${item.original_title}</p>
                            <p class="details__year">Ano de lançamento: ${item.release_date.substring(0, 4)}</p>
                            <p class="details__likes"> 
                            <img src="assets/icons/thumbs-up.svg" alt="liked icon"/> ${item.vote_average}
                            </p>
                        </div>
                    </div>
                `
            })

            document.getElementById("movie__box2").innerHTML = data_join.join("");

        })
        .catch(() => console.log('Que pena! Não encontramos nenhum filme.'));
};


export function request4(page = 1) {

    var url_image = 'https://image.tmdb.org/t/p/w500';

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_URL}&with_genres=35&page=${page}&sort_by=popularity.desc`)
        .then(response => response.json())
        .then(json => {
            var data_join = json.results.map(item => {
                return `
                    <div class="movie__box" data-id="${item.id}">
                        <img src="${url_image}${item.poster_path}" alt="" class="movies__img" id="movie__box_image" />
                        <div class="movie__details">
                            <p class="details__name" id="details__name">${item.original_title}</p>
                            <p class="details__year">Ano de lançamento: ${item.release_date.substring(0, 4)}</p>
                            <p class="details__likes"> 
                            <img src="assets/icons/thumbs-up.svg" alt="liked icon"/> ${item.vote_average}
                            </p>
                        </div>
                    </div>
                `
            })

            document.getElementById("movie__box2").innerHTML = data_join.join("");

        })
        .catch(() => console.log('Que pena! Não encontramos nenhum filme.'));
};

genre_dram.addEventListener('click', request2)
genre_romance.addEventListener('click', request3)
genre_comedy.addEventListener('click', request4)