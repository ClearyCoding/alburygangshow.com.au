document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector(".header");
    const scrollablePages = document.querySelectorAll(".pageHome, .pageMembers, .pageHistory");
    console.log(window.innerHeight)

    scrollablePages.forEach(page => {
        page.addEventListener("scroll", () => {
            let scrollTop = page.scrollTop;

            if (scrollTop >= lastScrollTop && scrollTop > window.innerHeight) {
                header.style.height = "0";
                header.style.opacity = "0";
                console.log("up")
            } else {
                header.style.height = "70px";
                header.style.opacity = "100";
                console.log("down")
            }
            lastScrollTop = scrollTop;
        });
    });
});
