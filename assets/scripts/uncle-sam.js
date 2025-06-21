const samAudio = document.querySelector('#samAudio');
const samImage = document.querySelector('#samImage');
let samCount = 0;

setInterval(reduceSam, 750);
samImage.style.cursor = "pointer";

function samPlay() {
    samCount++;
    updateSam()
    samAudio.play();
}

function updateSam() {
    if (samCount >= 6) {
        samImage.style.height = `${samCount}rem`;
        samImage.style.width = `${samCount * 2/3}rem`;
    }
    if (samCount === 73) {
        document.body.style.backgroundColor = "darkgrey";
        document.body.innerHTML = "" +
            "<h2 style='color: black'>Uncle Sam grew so powerful, that this site had to be taken down in a military action to prevent his takeover of the free world.</h2>" +
            "<p style='margin-top: 50px; color: black'>(If I were you, I'd have probably just taken his advice)</p>";
    }
}

function reduceSam() {
    if (samCount > 0) {
        samCount -= 1;
    }
    updateSam()
}