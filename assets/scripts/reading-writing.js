const hotline = ["1", "3", "0", "0", "6", "5", "5", "5", "0", "6"];
const readingWritingAudio = new Audio('/assets/audio/reading_writing.mp3');
let currentDigit = 0;
document.body.addEventListener('keydown', (event) => {
    if (event.key === hotline[currentDigit]) {
        currentDigit++;
    } else {
        currentDigit = 0;
    }
    if (currentDigit >= 10) {
        readingWriting();
    }
})

function readingWriting() {

    readingWritingAudio.play();
}