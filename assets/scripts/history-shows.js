const showDictionary = [
    {
        title: "Coming Soon!",
        year: 2024,
        number: 58,
    }, {
        title: "The Chase",
        year: 2023,
        number: 57,
        dvd: true,
        description: "Two original stories with a common theme 'The Chase for friendship'. " +
            "One story of two friends seperated when one joins an evil villain organisation. " +
            "The other about the journey of love and discovering if she's the one.",
    }, {
        title: "I'm A Cast Member, Get Me Out Of Here!",
        year: 2022,
        number: 56,
        dvd: true,
        description: "What happens when kids click pop ups on the Internet? " +
            "Will they go on an online adventure, or risk being trapped inside forever? " +
            "Join our Colorblind Host, Snoring Leaders, untold Disney Lovers & Time-travelling Vegemite! ",
    }, {
        title: "The Never Starting Story",
        year: 2021,
        number: 55,
        dvd: true,
        description: "Follow our story as a group of children battle over whose bedtime story is the best. " +
            "Will it be about Dinosaurs, Aliens or Moustaches? " +
            "Perhaps Dad really has the best stories to tell!",
    }, {
        title: "Lights, Cameras, NEXT!!!",
        year: 2019,
        number: 54,
        dvd: true,
        description: "Join us for our 54th show as a trio perform for a cantankerous Director, " +
            "Disney villains go on trial, and some singing vegetables fall in love!",
    }, {
        title: "Oh No, My Mojo",
        year: 2018,
        number: 53,
        dvd: true,
        description: "In our 53rd show join our cast as a ripper detective works a case, " +
            "heroes save their friend, and a witch gets pushed into an oven!",
    }, {
        title: "The Internet Is Down!!!",
        year: 2017,
        number: 52,
        dvd: true,
    }, {
        title: "The Show Must Go On!!!",
        year: 2016,
        number: 51,
        dvd: true,
    }, {
        year: 2015,
        number: 50,
        dvd: true,
    }, {
        year: 2014,
        number: 49,
    }, {
        year: 2013,
        number: 48,
    }, {
        year: 2012,
        number: 47,
    }
]

loadHTML();

function openPopup(popupId) {
    const popup = document.querySelector(`#pageHistory-section-shows-popup${popupId}`);
    const header = document.querySelector(`.header`);
    popup.style.display = 'flex';
    popup.style.opacity = '100';
    header.style.height = "0";
    header.style.opacity = "0";
}

function closePopup(popupId) {
    const popup = document.querySelector(`#pageHistory-section-shows-popup${popupId}`);
    const header = document.querySelector(`.header`);
    popup.style.display = 'none';
    popup.style.opacity = '0';
    header.style.height = "70px";
    header.style.opacity = "100";
}

function loadHTML() {
    const historyShowsGrid = document.querySelector('#pageHistory-section-shows-grid')
    const historyShowsPinned = document.querySelector('#pageHistory-section-shows-pinned')
    const historyShowsPopups = document.querySelector('#pageHistory-section-shows-popups')
    let historyShowsGridHTML = "";
    let historyShowsPinnedHTML = "";
    let historyShowsPopupsHTML = "";
    showDictionary.forEach((show, index) => {
        let showNumberSuffix = 'th';
        if (show.number > 20 || show.number < 10){
            if (show.number % 10 === 3) {showNumberSuffix = 'rd'}
            if (show.number % 10 === 2) {showNumberSuffix = 'nd'}
            if (show.number % 10 === 1) {showNumberSuffix = 'st'}
        }
        if (index <= 1) {
            let showHeader = 'Next Show:'
            if (index === 1) {showHeader = 'Previous Show:'}
            historyShowsPinnedHTML += `
                <div class="pageHistory-section-shows-item" onclick="openPopup(${show.number})">
                <h3 class="pageHistory-section-shows-pinned-heading">${showHeader}</h3>
                    <img class="pageHistory-section-shows-item-poster" alt="${show.year} Poster" src="/assets/images/pageHistory/posters/${show.year}.jpg">
                    <h3 class="pageHistory-section-shows-item-title">${show.title || `${show.number}${showNumberSuffix} show`}</h3>
                    <h4 class="pageHistory-section-shows-item-year">${show.number}${showNumberSuffix} Show - ${show.year}</h4>
                </div>
            `
        } else {
            historyShowsGridHTML += `
                <div class="pageHistory-section-shows-item" onclick="openPopup(${show.number})">
                    <img class="pageHistory-section-shows-item-poster" alt="${show.year} Poster" src="/assets/images/pageHistory/posters/${show.year}.jpg">
                    <h3 class="pageHistory-section-shows-item-title">${show.title || `${show.number}${showNumberSuffix} show`}</h3>
                    <h4 class="pageHistory-section-shows-item-year">${show.number}${showNumberSuffix} Show - ${show.year}</h4>
                </div>
            `
        }
        historyShowsPopupsHTML += `
        <div id="pageHistory-section-shows-popup${show.number}" class="pageHistory-section-shows-popup">
            <div class="pageHistory-section-shows-popup-cover" onclick="closePopup(${show.number})"></div>
            <section class="pageHistory-section-shows-popup-content">
                <span class="pageHistory-section-shows-popup-close" onclick="closePopup(${show.number})">&times;</span>
                <img class="pageHistory-section-shows-popup-content-poster" alt="${show.year} Poster" src="/assets/images/pageHistory/posters/${show.year}.jpg">
                <div class="pageHistory-section-shows-popup-content-info">
                    <h3 class="pageHistory-section-shows-popup-content-title">${show.title || `${show.number}${showNumberSuffix} show`} ${show.dvd ? '<div class="pageHistory-section-shows-popup-content-dvd"><img class="pageHistory-section-shows-popup-content-dvd-icon" alt="DvD Available" src="/assets/images/pageHistory/dvd.png"><div class="pageHistory-section-shows-popup-content-dvd-label">DvDs are available to order</div></div>' : ''}</h3>
                    <h4 class="pageHistory-section-shows-popup-content-year">${show.number}${showNumberSuffix} Show - ${show.year}</h4>
                    ${show.description ? `<p class="pageHistory-section-shows-popup-content-description">${show.description}</p>` : ''}
                    ${index === 0 ? '<a href="/#tickets" class="pageHistory-section-shows-popup-content-tickets">Tickets &#8594</a>' : ''}
                </div>
            </section>
        </div>
        `
    })
    historyShowsGrid.innerHTML = historyShowsGridHTML;
    historyShowsPinned.innerHTML = historyShowsPinnedHTML;
    historyShowsPopups.innerHTML = historyShowsPopupsHTML;
}