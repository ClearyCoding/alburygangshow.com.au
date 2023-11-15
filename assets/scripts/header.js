document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector(".header");
    const scrollablePages = document.querySelectorAll(".pageHome, .pageMembers, .pageHistory");
    console.log(window.innerHeight)

    scrollablePages.forEach(page => {
        page.addEventListener("scroll", () => {
            let scrollTop = page.scrollTop;

            if (scrollTop >= lastScrollTop && scrollTop > window.innerHeight) {
                header.style.transition = "transition: height 0.75s, opacity 0.75s;";
                header.style.height = "0";
                header.style.opacity = "0";
            } else {
                header.style.transition = "transition: height 0.25s, opacity 0.25s;";
                header.style.height = "70px";
                header.style.opacity = "100";
            }
            lastScrollTop = scrollTop;
        });
    });
});
