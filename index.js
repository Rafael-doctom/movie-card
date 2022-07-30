import {getFolder} from "./functions.js"

function request (){
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=103186a9f4ef77e1f666cdd93a1fa70a&?page=1&sort_by=popularity.desc', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        }

    })
    
}

(async()=>{
    const api = await request()
    const apiResponse = await api.json()
    console.log(apiResponse)
    for(let a = 1; a < 7; a++){
        const elements = getFolder(a)
        elements.movieName.innerHTML = apiResponse.results[a].original_title
        elements.movieYear.innerHTML = apiResponse.results[a].release_date
        elements.movieLikes.innerHTML = apiResponse.results[a].vote_average
        elements.movieName.innerHTML = apiResponse.results[a].original_title
        elements.movieImg.src = `https://image.tmdb.org/t/p/w500${apiResponse.results[a].poster_path}`
    }
}) ()

