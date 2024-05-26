let header = document.querySelector(".header"); //TODO: Fix header ducking randomly on touch devices
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const scrollablePages = document.querySelectorAll(".parallax");
    console.log(window.innerHeight)

    scrollablePages.forEach(page => {
        page.addEventListener("scroll", () => {
            if (!header) {
                header = document.querySelector(".header");
            }

            let scrollTop = page.scrollTop;

            if (scrollTop >= lastScrollTop && scrollTop > window.innerHeight) {
                headerUp()
            } else {
                headerDown()
            }
            lastScrollTop = scrollTop;
        });
    });
});
function headerUp() {
    header.style.height = "0";
    header.style.opacity = "0";
    header.style.pointerEvents = "none";
}
function headerDown() {
    header.style.height = "70px";
    header.style.opacity = "100";
    header.style.pointerEvents = "all";
}