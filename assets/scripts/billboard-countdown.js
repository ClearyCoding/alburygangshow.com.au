const eventList = [
    {
        text: 'THE CURTAINS HAVE CLOSED!',
        count: false,
        date: 'July 10, 2025 12:00:00',
        context: 'Great job again everyone! See you all next year for the 60th!'
    },
    /*{
        text: 'Until the 2026 Information Night!',
        count: true,
        date: 'June 19, 2025 10:45:00',
        context: `For more information, check out the <a href='#join'>join</a> section!`
    },
    {
        text: 'Until Rehearsals Start!',
        count: true,
        date: 'June 21, 2025 19:30:00',
        context: `For more information, check out the <a href='#join'>join</a> section!`
    },*/
    {
        text: 'Until Opening Curtains!',
        count: true,
        date: 'June 12, 2026 19:30:00',
        context: `For more information, check out the <a href='#tickets'>tickets</a> section!`
    },
    {
        text: 'Until the Next Show!',
        count: true,
        date: 'June 13, 2026 13:30:00',
        context: `To book your seat, check out the <a href='#tickets'>tickets</a> section!`
    },
    {
        text: 'Until the Final Show!',
        count: true,
        date: 'June 13, 2026 19:30:00',
        context: `To book your seat, check out the <a href='#tickets'>tickets</a> section!`
    },
    {
        text: 'THE CURTAINS HAVE CLOSED!',
        count: false,
        date: 'August 10, 2026 12:00:00',
        context: 'Great job again everyone! See you all again next year!'
    },
]

function getNextEvent(events) {
    const now = Date.now();
    const futureEvents = events
        .filter(e => new Date(e.date).getTime() > now)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    return futureEvents[0] || null;
}

const nextEvent = getNextEvent(eventList);
const countText = document.querySelector('#countdown-text');
const countContext = document.querySelector('#countdown-context');
const countPrefix = document.querySelector('#countdown-prefix');
const countUnits = document.querySelector('#countdown-units');
const countdownElement = document.querySelector("#countdown");

console.log(nextEvent);

if (nextEvent) {
    if (nextEvent.count) {
        countText.innerHTML = nextEvent.text;
        countContext.innerHTML = nextEvent.context;

        // Set the date we're counting down to
        const countDownDate = convertTZ(nextEvent.date, "Australia/Sydney");
        console.log(countDownDate)

        const x = setInterval(function() {

            let now = new Date().getTime();
            let distance = countDownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (days < 10) {
                days = ('0' + days).slice(-2)
            }

            countdownElement.innerHTML = days + ":" + ('0' + hours).slice(-2) + ":"
                + ('0' + minutes).slice(-2) + ":" + ('0' + seconds ).slice(-2);
            if (distance < 0) {
                clearInterval(x);
                countdownElement.innerHTML = "NOW";
            }
        }, 1000);

        function convertTZ(date, tzString) {
            return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString})).getTime();
        }
    } else {
        countPrefix.innerHTML = '';
        countUnits.innerHTML = '';
        countContext.innerHTML = '';
        countdownElement.innerHTML = nextEvent.text;
        countText.innerHTML = nextEvent.context;
    }
}