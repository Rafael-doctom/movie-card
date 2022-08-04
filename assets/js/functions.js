export function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

export function request(page = 1) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=103186a9f4ef77e1f666cdd93a1fa70a&page=${page}&sort_by=popularity.desc`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })

}

export const component = (id, src, year, name, likes) => {
    const content = ` 
    <div class="movie__box" data-id="${id}">
    <img src="${src}" alt="" class="movies__img" 
    <div class="movie__details">
        <p class="details__name">${name}</p>
        <p class="details__year">Ano de lançamento: ${year}</p>
        <p class="details__likes"> 
        <img src="assets/icons/thumbs-up.svg" alt="liked icon"/> ${likes}
        </p>
    </div>
    </div>`

    const element = document.createElement('div')
    element.classList.add('movie__container')
    element.innerHTML = content
    return element
}

export function mountMovieFolders(apiResponse, movieBanner) {
    for (let a = 0; a < apiResponse.results.length; a++) {
        const element = component(
            apiResponse.results[a].id,
            `https://image.tmdb.org/t/p/w500${apiResponse.results[a].poster_path}`,
            apiResponse.results[a].release_date.slice(0, 4),
            apiResponse.results[a].original_title,
            apiResponse.results[a].vote_average
        )
        movieBanner.appendChild(element)
    }
}

export function organizeMoveButtons(direction, goButton) {
    const firstButton = document.querySelector('[data-button="1"]')
    const secondButton = document.querySelector('[data-button="2"]')
    const thirdButton = document.querySelector('[data-button="3"]')
    const forthButton = document.querySelector('[data-button="4"]')

    switch (direction) {
        case true:
            firstButton.innerHTML = goButton + 1
            secondButton.innerHTML = goButton + 2
            thirdButton.innerHTML = goButton + 3
            forthButton.innerHTML = goButton + 4
            break
        case false:
            firstButton.innerHTML = goButton - 4
            secondButton.innerHTML = goButton - 3
            thirdButton.innerHTML = goButton - 2
            forthButton.innerHTML = goButton - 1
            break
    }
}







