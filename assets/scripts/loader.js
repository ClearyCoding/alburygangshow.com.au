const loader = document.querySelector("#loader")
const body = document.querySelector("body")

function updateLoader() {
    if (window.innerWidth < 320) {
        loader.innerHTML =
            `
            <div id="loader">
                <div id="loader-wheel-error">
                    <img draggable="false" alt="Gang Show Logo" src="/assets/images/branding/AGS_transparent-sad.png" class="loader-logo">
                </div>
                <div class="loader-title loader-error">alburygangshow.com.au</div>
                <div class="loader-subtitle">Incompatible Device</div>
                <div class="loader-notice">Unfortunately this site does not support screen widths below 320px, please try again on a different device.</div>
            </div>
            `
        loader.style.display = "flex";
        loader.style.visibility = "visible";
        body.style.visibility = "hidden";
    } else if (document.readyState !== "complete") {

        loader.innerHTML =
            `
            <div id="loader-wheel">
                <img draggable="false" alt="Gang Show Logo" src="/assets/images/branding/AGS_transparent-noText.png" class="loader-logo">
            </div>
            <div class="loader-title">alburygangshow.com.au</div>
            <div class="loader-subtitle">Loading...</div>
            <div class="loader-notice">This site contains many images and may not be suitable on low-speed networks.</div>
            `
        loader.style.display = "flex";
        loader.style.visibility = "visible";
        body.style.visibility = "hidden";
    } else {
        body.style.visibility = "visible";
        loader.style.display = "none";
        loader.style.visibility = "hidden";
    }
}

window.addEventListener("resize", updateLoader);
window.addEventListener("DOMContentLoaded", updateLoader);
document.addEventListener("readystatechange", updateLoader);