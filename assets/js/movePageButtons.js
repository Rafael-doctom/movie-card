import { removeAllChildNodes, request, mountMovieFolders, organizeMoveButtons } from "./functions.js";
const movePageButtons = document.querySelector('[data-page]');

(async () => {
    const api = await request()
    const apiResponse = await api.json()
    const movieBanner = document.querySelector('[data-movies]')
    mountMovieFolders(apiResponse, movieBanner,)
})();

movePageButtons.addEventListener('click', event => {
    let button = event.target;
    const movieBanner = document.querySelector('[data-movies]');

    if (parseInt(button.innerHTML) > 0) {
        (async () => {
            const newApiRequest = await request(parseInt(button.innerHTML))
            const newApiResponse = await newApiRequest.json()
            removeAllChildNodes(movieBanner)
            mountMovieFolders(newApiResponse, movieBanner)
        })();
    };

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
            })();
    };
});

