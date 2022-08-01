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
function request (page = 1){
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
console.log(pageButtons)

pageButtons.addEventListener('click', event => {
    let botao = event.target.dataset === "[data-page='1']"
    if(botao) console.log('de certo')
    let button = parseInt(event.target.innerHTML)
    if(button > 0) {
        const newApiRequest = await request(button)
        const newApiResponse = await newApiRequest.json()
        console.log(newApiResponse)

    }
})

