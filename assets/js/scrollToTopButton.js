const scrollButton = document.querySelector('[data-scroll]')

scrollButton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
})

window.onscroll = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ){
        scrollButton.style.display = 'block'
    } else{
        scrollButton.style.display = 'none'
    }
}