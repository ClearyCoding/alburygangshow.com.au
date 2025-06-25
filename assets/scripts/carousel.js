const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    carousel.innerHTML += carousel.innerHTML;

    let baseSpeed = -1 * parseInt(carousel.dataset.speed, 10) || -5;
    let speed = baseSpeed;
    let targetSpeed = baseSpeed;
    let position = 0;
    let lastTimestamp = null;

    carousel.addEventListener('mouseenter', () => {
        targetSpeed = 0;
    });

    carousel.addEventListener('mouseleave', () => {
        targetSpeed = baseSpeed;
    });

    function animateCarousel(timestamp) {
        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }

        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        speed += (targetSpeed - speed) * 0.05;
        if (Math.abs(targetSpeed - speed) < 0.001) {
            speed = targetSpeed;
        }

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