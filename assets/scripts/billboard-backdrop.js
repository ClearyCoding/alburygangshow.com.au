/*
const carouselImages = ['cast','stage'];
let carouselCurrent = 0;
const billboardBackdrop = document.querySelector('.pageHome-backdrop-billboard')
setInterval(() => {
    if (carouselCurrent < carouselImages.length - 1) {
        carouselCurrent++;
    } else {
        carouselCurrent = 0;
    }
    fade(1)
    setTimeout(() => {
        billboardBackdrop.style.backgroundImage = `url("/assets/images/backdrops/pageHome-billboard-${carouselImages[carouselCurrent]}.jpg")`;
        fade(-1);
    }, 500)
}, 4000)

function fade(direction) {
    let currentOpacity = 100;
    const fadeInterval = setInterval((i) => {
        currentOpacity += direction
        billboardBackdrop.style.opacity = `${currentOpacity}%`;
        if (i >= 100) {
            clearInterval(fadeInterval);
        }
    }, 5);
} 
 */