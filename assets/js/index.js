import { removeAllChildNodes, request, mountMovieFolders, organizeMoveButtons } from "./functions.js"

// guilherme dará continuidade aqui

//Here we show the folders as soon as the index page is open
(async()=>{
    const api = await request()
    const apiResponse = await api.json()
    console.log(apiResponse)
    //This const get the section where we append each movie folder
    const movieBanner = document.querySelector('[data-movies]')
    //This looping add a new movie folder based on the api response. We'll have as many folders as loopings we do
    mountMovieFolders(apiResponse, movieBanner)
}) ()

const pageButtons = document.querySelector('[data-page]')
//this is an addEventListener aplied on the buttons used to move between the API pages
pageButtons.addEventListener('click', event => {
    let button = event.target
    const movieBanner = document.querySelector('[data-movies]')
    //this if works just when we click on a number
    if(parseInt(button.innerHTML) > 0) {
        (async()=>{
            const newApiRequest = await request(parseInt(button.innerHTML))
            const newApiResponse = await newApiRequest.json()
            removeAllChildNodes(movieBanner)
            mountMovieFolders(newApiResponse, movieBanner)
        })()
    } 
    //this switch works when the button clicked is right ">>" or left "<<"
    switch(button.dataset.button){
        case 'right':
            (async()=>{
                const goButton = parseInt(document.querySelector('[data-button="4"]').innerHTML)
                const newApiRequest = await request(goButton + 1)
                const newApiResponse = await newApiRequest.json()
                removeAllChildNodes(movieBanner)
                mountMovieFolders(newApiResponse, movieBanner)
                organizeMoveButtons(true, goButton)
            })()
            break
        case 'left':
            (async()=>{
                const backButton = parseInt(document.querySelector('[data-button="1"]').innerHTML)
                if(backButton == 1) return
                const newApiRequest = await request(backButton - 4)
                const newApiResponse = await newApiRequest.json()
                removeAllChildNodes(movieBanner)
                mountMovieFolders(newApiResponse, movieBanner)
                organizeMoveButtons(false, backButton)
            })() 
    }
})

