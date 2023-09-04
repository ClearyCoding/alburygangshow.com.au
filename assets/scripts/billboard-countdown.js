// CREDIT: https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var countDownDate = new Date("Nov 14, 2023 18:59:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count-down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("pageHome-section-billboard-countdown").innerHTML = days + " : " + ('0' + hours).slice(-2) + " : "
        + ('0' + minutes).slice(-2) + " : " + ('0' + seconds ).slice(-2);

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("pageHome-section-billboard-countdown").innerHTML = "NOW";
    }
}, 1000);