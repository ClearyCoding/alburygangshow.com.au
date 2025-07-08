const eventList = [
    {
        text: 'Until the 2025 DVD Viewing Night!',
        count: true,
        date: 'August 16, 2025 16:00:00',
        context: 'Cast, Crew and Parents check out the <a href="/#members">2025 facebook</a> group for more details!'
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
const countDownContainer = document.querySelector("#container-countdown");
const countContextContainer = document.querySelector("#container-context");
countDownContainer.style.display = "Flex";
countContextContainer.style.display = "Flex";
countPrefix.style.display = "Block";

if (nextEvent) {
    if (nextEvent.count) {
        countText.innerHTML = nextEvent.text;
        countContext.innerHTML = nextEvent.context;

        const countDownDate = convertTZ(nextEvent.date, "Australia/Sydney");

        const countTick = setInterval(function() {

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
                clearInterval(countTick);
                countdownElement.innerHTML = "00:00:00:00";

                let countFlash = true;
                setInterval(function() {
                    countFlash = !countFlash;
                    countdownElement.innerHTML = countFlash ? "00:00:00:00" : "--:--:--:--";
                }, 1000);
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