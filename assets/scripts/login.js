const input = document.getElementById("pageLogin-container-input-password");
const incorrect = document.getElementById("pageLogin-container-incorrect");
const container = document.getElementById("pageLogin-container");
// Yes, this is out in the open, but it's not like you cant just look at the redirect page in the GitHub anyway lol
const correct = "FlyingMonkey";

input.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        verify()
    }
})

function verify() {
    if (input.value.match(correct)) {
        incorrect.style.display = "none";
        container.style.padding = "30px";
        window.location.href = "flyingmonkey"
    } else {
        incorrect.style.display = "block";
        container.style.padding = "30px 30px 80px 30px";
    }
}