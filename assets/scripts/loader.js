document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

let loaderTitleState = 0;
const loaderTitle = document.querySelector('#loader-title')
setInterval(loaderTitleUpdate, 750);

function loaderTitleUpdate() {
    if (loaderTitleState === 0 || loaderTitleState === 4) {
        loaderTitle.innerText = "Loading";
        loaderTitleState = 0;
    }
    if (loaderTitleState < 4) {
        loaderTitle.innerText = loaderTitle.innerText + "."
    }
    loaderTitleState++
}