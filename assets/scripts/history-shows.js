const showDictionary = [
    {
        title: "Coming Soon!",
        year: 2024,
        number: 58,
        description: `This show is currently in development.` +
            ` More details will be shared once the scripts and poster are finished and publicised.` +
            ` If you would like to become a part of our next show, please check out the <a href="/#join">join section.</a> `,
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

const historyShowsGrid = document.querySelector('#pageHistory-section-shows-grid')
const historyShowsPinned = document.querySelector('#pageHistory-section-shows-pinned')
const historyShowsPopups = document.querySelector('#pageHistory-section-shows-popups')
const moreShowsButton = document.querySelector('#pageHistory-section-shows-more')
let moreShowsButtonToggle = true;

loadHTML();

function openPopup(popupId) {
    const popup = document.querySelector(`#pageHistory-section-shows-popup${popupId}`);
    popup.style.display = 'flex';
    popup.style.opacity = '100';
    headerUp();
}

function closePopup(popupId) {
    const popup = document.querySelector(`#pageHistory-section-shows-popup${popupId}`);
    popup.style.display = 'none';
    popup.style.opacity = '0';
    headerDown()
}

function loadHTML() {
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
            let showHeader = 'Upcoming Show:'
            if (index === 1) {showHeader = 'Latest Show:'}
            historyShowsPinnedHTML += `
                <div class="pageHistory-section-shows-item" onclick="openPopup(${show.number})">
                <h3 class="pageHistory-section-shows-pinned-heading">${showHeader}</h3>
                    <img class="pageHistory-section-shows-item-poster" alt="${show.year} Poster" src="/assets/images/pageHistory/posters/${show.year}.jpg">
                    <h3 class="pageHistory-section-shows-item-title">${show.title || `${show.number}${showNumberSuffix} Show`}</h3>
                    <h4 class="pageHistory-section-shows-item-year">${show.number}${showNumberSuffix} Show - ${show.year}</h4>
                </div>
            `
        } else {
            historyShowsGridHTML += `
                <div class="pageHistory-section-shows-item" onclick="openPopup(${show.number})">
                    <img class="pageHistory-section-shows-item-poster" alt="${show.year} Poster" src="/assets/images/pageHistory/posters/${show.year}.jpg">
                    <h3 class="pageHistory-section-shows-item-title">${show.title || `${show.number}${showNumberSuffix} Show`}</h3>
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
                    <h3 class="pageHistory-section-shows-popup-content-title">${show.title || `${show.number}${showNumberSuffix} Albury Gang Show`} ${show.dvd ? '<div class="pageHistory-section-shows-popup-content-dvd"><img class="pageHistory-section-shows-popup-content-dvd-icon" alt="DvD Available" src="/assets/images/pageHistory/dvd.png"><div class="pageHistory-section-shows-popup-content-dvd-label">DvDs are available to order</div></div>' : ''}</h3>
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
function moreShows() {
    if (moreShowsButtonToggle) {
        historyShowsGrid.style.maxHeight = "none";
        moreShowsButtonToggle = false;
        moreShowsButton.innerHTML = "Show Less &#x25B2";
    } else {
        historyShowsGrid.style.maxHeight = `${window.innerWidth <= 500 ? '34rem' : '40rem'}`;
        moreShowsButtonToggle = true;
        moreShowsButton.innerHTML = "Show More &#x25BC";
    }
}