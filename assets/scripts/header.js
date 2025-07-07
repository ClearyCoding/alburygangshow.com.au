document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    let startScrollPosition = null;
    const header = document.querySelector("#header");
    const scrollablePages = document.querySelectorAll(".parallax");


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

    scrollablePages.forEach(page => {
        page.addEventListener("scroll", () => {
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