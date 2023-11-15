let lastScrollTop = 0;
header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > window.innerHeight) {
        header.style.top = "-70px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
})