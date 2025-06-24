const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    carousel.innerHTML += carousel.innerHTML;

    let speed = -1 * parseInt(carousel.dataset.speed, 10) || -5;
    let position = 0;
    let lastTimestamp = null;

    function animateCarousel(timestamp) {
        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }

        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        position += speed * deltaTime / 60;
        if (speed >= 0 && position >= carousel.scrollWidth / 4) {
            position = -carousel.scrollWidth / 4;
        } else if (speed < 0 && position <= -carousel.scrollWidth / 4) {
            position = carousel.scrollWidth / 4;
        }
        carousel.style.transform = `translateX(${position}px)`;

        requestAnimationFrame(animateCarousel);
    }

    requestAnimationFrame(animateCarousel);
})