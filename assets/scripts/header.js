document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector(".header");
    const scrollablePages = document.querySelectorAll(".pageHome, .pageMembers, .pageHistory");
    console.log(window.innerHeight)

    scrollablePages.forEach(page => {
        page.addEventListener("scroll", () => {
            let scrollTop = page.scrollTop;

            if (scrollTop >= lastScrollTop && scrollTop > window.innerHeight) {
                setTimeout(() =>{
                    header.style.height = "0";
                    header.style.opacity = "0";
                }, 1000)
            } else {
                header.style.height = "70px";
                header.style.opacity = "100";
            }
            lastScrollTop = scrollTop;
        });
    });
});
