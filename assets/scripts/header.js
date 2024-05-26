let header = document.querySelector(".header");
document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    let startScrollPosition = null;
    const scrollablePages = document.querySelectorAll(".parallax");
    console.log(window.innerHeight)

    scrollablePages.forEach(page => {
        page.addEventListener("scroll", () => {
            if (!header) {
                header = document.querySelector(".header");
            }

            let scrollTop = page.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > window.innerHeight) {
                if (startScrollPosition === null) {
                    startScrollPosition = lastScrollTop;
                }
                if (scrollTop - startScrollPosition > 400) {
                    headerUp();
                }
            } else {
                headerDown();
                startScrollPosition = null;
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