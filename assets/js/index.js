import { removeAllChildNodes, request, mountMovieFolders, organizeMoveButtons } from "./functions.js"
const API_URL = '103186a9f4ef77e1f666cdd93a1fa70a';
const genre_dram = document.getElementById("genre_dram");


(async () => {
    const api = await request()
    const apiResponse = await api.json()
    const movieBanner = document.querySelector('[data-movies]')
    mountMovieFolders(apiResponse, movieBanner,)
})()

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
                            <p class="details__year">Ano de lançamento: ${item.release_date.substring(0,4)}</p>
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

const movePageButtons = document.querySelector('[data-page]')

movePageButtons.addEventListener('click', event => {
    let button = event.target
    const movieBanner = document.querySelector('[data-movies]')

    if (parseInt(button.innerHTML) > 0) {
        (async () => {
            const newApiRequest = await request(parseInt(button.innerHTML))
            const newApiResponse = await newApiRequest.json()
            removeAllChildNodes(movieBanner)
            mountMovieFolders(newApiResponse, movieBanner)
        })()
    }

    switch (button.dataset.button) {
        case 'right':
            (async () => {
                const goButton = parseInt(document.querySelector('[data-button="4"]').innerHTML)
                const newApiRequest = await request(goButton + 1)
                const newApiResponse = await newApiRequest.json()
                removeAllChildNodes(movieBanner)
                mountMovieFolders(newApiResponse, movieBanner)
                organizeMoveButtons(true, goButton)
            })()
            break
        case 'left':
            (async () => {
                const backButton = parseInt(document.querySelector('[data-button="1"]').innerHTML)
                if (backButton == 1) return
                const newApiRequest = await request(backButton - 4)
                const newApiResponse = await newApiRequest.json()
                removeAllChildNodes(movieBanner)
                mountMovieFolders(newApiResponse, movieBanner)
                organizeMoveButtons(false, backButton)
            })()
    }
})

