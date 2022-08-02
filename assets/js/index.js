import { removeAllChildNodes } from "./functions.js"



// guilherme dará continuidade aqui

//Component inserted inside the section "movies":

const component = (id, src, year, name, likes) =>{
    const content = ` 
    <div class="movie__box" data-id="${id}">
    <img src="${src}" alt="" class="movies__img" 
    <div class="movie__details">
        <p class="details__name">${name}</p>
        <p class="details__year">Ano de lançamento: ${year}</p>
        <p class="details__likes">Avaliação: ${likes}</p>
    </div>
    </div>`

  const element = document.createElement('div')
  element.classList.add('movie__container')
  element.innerHTML = content
  return element
}

//Here we make a request to tmdb api
export function request (page = 1){
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=103186a9f4ef77e1f666cdd93a1fa70a&page=${page}&sort_by=popularity.desc`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    
}
//Here we show the folders
(async()=>{
    const api = await request()
    const apiResponse = await api.json()
    console.log(apiResponse)
    //This const get the section where we append each movie folder
    const movieBanner = document.querySelector('[data-movies]')
    //This looping add a new movie folder based on the api response. We'll have as many folders as loopings we do
    for(let a = 0; a < 20; a++){
        const element = component(
            apiResponse.results[a].id,
            `https://image.tmdb.org/t/p/w500${apiResponse.results[a].poster_path}`,
            apiResponse.results[a].release_date.slice(0,4),
            apiResponse.results[a].original_title,
            apiResponse.results[a].vote_average
        )
        movieBanner.appendChild(element)
    }
}) ()

const pageButtons = document.querySelector('[data-page]')

pageButtons.addEventListener('click', event => {
    let button = event.target
    //this if works when we click on a number
    if(parseInt(button.innerHTML) > 0) {
        (async()=>{
            const movieBanner = document.querySelector('[data-movies]')
            const newApiRequest = await request(parseInt(button.innerHTML))
            const newApiResponse = await newApiRequest.json()
            console.log(newApiResponse)
            removeAllChildNodes(movieBanner)
            for(let a = 0; a < 20; a++){
                const element = component(
                    newApiResponse.results[a].id,
                    `https://image.tmdb.org/t/p/w500${newApiResponse.results[a].poster_path}`,
                    newApiResponse.results[a].release_date.slice(0,4),
                    newApiResponse.results[a].original_title,
                    newApiResponse.results[a].vote_average
                )
                movieBanner.appendChild(element)
            }
            
        })()
    } 
    //this if works when we click on the last button, with ">>" signal
    if(button.dataset.button == 'right') {
        (async()=>{
            const goButton = parseInt(document.querySelector('[data-button="4"]').innerHTML)
            const movieBanner = document.querySelector('[data-movies]')
            const newApiRequest = await request(goButton + 1)
            const newApiResponse = await newApiRequest.json()
            console.log(newApiResponse)
            removeAllChildNodes(movieBanner)
            for(let a = 0; a < 20; a++){
                const element = component(
                    newApiResponse.results[a].id,
                    `https://image.tmdb.org/t/p/w500${newApiResponse.results[a].poster_path}`,
                    newApiResponse.results[a].release_date.slice(0,4),
                    newApiResponse.results[a].original_title,
                    newApiResponse.results[a].vote_average
                )
                movieBanner.appendChild(element)
            }
            const firstButton = document.querySelector('[data-button="1"]')
            const secondButton = document.querySelector('[data-button="2"]')
            const thirdButton = document.querySelector('[data-button="3"]')
            const forthButton = document.querySelector('[data-button="4"]')

            firstButton.innerHTML = goButton + 1
            secondButton.innerHTML = goButton + 2
            thirdButton.innerHTML = goButton + 3
            forthButton.innerHTML = goButton + 4
        })()
    } 
    //this if works when we click on the first button, with "<<" signal
    if(button.dataset.button == 'left'){
        (async()=>{
            const backButton = parseInt(document.querySelector('[data-button="1"]').innerHTML)
            const movieBanner = document.querySelector('[data-movies]')
            if(backButton == 1) return
            const newApiRequest = await request(backButton - 4)
            const newApiResponse = await newApiRequest.json()
            console.log(newApiResponse)
            removeAllChildNodes(movieBanner)
            for(let a = 0; a < 20; a++){
                const element = component(
                    newApiResponse.results[a].id,
                    `https://image.tmdb.org/t/p/w500${newApiResponse.results[a].poster_path}`,
                    newApiResponse.results[a].release_date.slice(0,4),
                    newApiResponse.results[a].original_title,
                    newApiResponse.results[a].vote_average
                )
                movieBanner.appendChild(element)
            }
            const firstButton = document.querySelector('[data-button="1"]')
            const secondButton = document.querySelector('[data-button="2"]')
            const thirdButton = document.querySelector('[data-button="3"]')
            const forthButton = document.querySelector('[data-button="4"]')

            firstButton.innerHTML = backButton - 4
            secondButton.innerHTML = backButton - 3 
            thirdButton.innerHTML = backButton - 2 
            forthButton.innerHTML = backButton - 1 
        })()
    }
})

