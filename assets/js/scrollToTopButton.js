const ScrollButton = document.querySelector('[data-scroll]');

ScrollButton.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
});

window.onscroll = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ){
        ScrollButton.style.display = 'block'
    } else{
        ScrollButton.style.display = 'none'
    };
};
