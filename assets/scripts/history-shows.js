const showDictionary = [
    {
        year: 2025,
        number: 59,
        description: `This show is currently in development.` +
            ` More details will be shared once the scripts and poster are finished and publicised.` +
            ` If you would like to become a part of our next show, please check out the <a href="/#join">join section.</a> `,
    }, {
        title: "Intergalactic Show-Off",
        year: 2024,
        number: 58,
        dvd: true,
        description: `Stage: The final frontier. These are the voyages of the starship Albury. ` +
            `Its continuing mission: To explore strange new dances, to seek out new costumes and props. ` +
            'To boldly perform where no actor has gone before! '
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
    },
    // There was no 2020 show
    {
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
    }, {
        year: 2011,
        number: 46,
    }, {
        year: 2010,
        number: 45,
    }, {
        year: 2009,
        number: 44,
    }, {
        year: 2008,
        number: 43,
    }, {
        year: 2007,
        number: 42,
    }, {
        year: 2006,
        number: 41,
    }, {
        title: "Phoenix Rising From The Ashes",
        year: 2005,
        number: 40,
    }, {
        year: 2004,
        number: 39,
    }, {
        year: 2003,
        number: 38,
    }, {
        year: 2002,
        number: 37,
    }, {
        year: 2001,
        number: 36,
    }, {
        year: 2000,
        number: 35,
    }, {
        year: 1999,
        number: 34,
    }, {
        year: 1998,
        number: 33,
    }, {
        year: 1997,
        number: 32,
    }, {
        year: 1996,
        number: 31,
    }, {
        year: 1995,
        number: 30,
    }, {
        year: 1994,
        number: 29,
    }, {
        year: 1993,
        number: 28,
    }, {
        year: 1992,
        number: 27,
    },
    // There was no 1991 show
    {
        year: 1990,
        number: 26,
    }, {
        year: 1989,
        number: 25,
    }, {
        year: 1988,
        number: 24,
    }, {
        year: 1987,
        number: 23,
    }, {
        year: 1986,
        number: 22,
    }, {
        year: 1985,
        number: 21,
    }, {
        year: 1984,
        number: 20,
    }, {
        year: 1983,
        number: 19,
    }, {
        year: 1982,
        number: 18,
    }, {
        year: 1981,
        number: 17,
    }, {
        year: 1980,
        number: 16,
    }, {
        year: 1979,
        number: 15,
    }, {
        year: 1978,
        number: 14,
    }, {
        year: 1977,
        number: 13,
    }, {
        year: 1976,
        number: 12,
    }, {
        year: 1975,
        number: 11,
    }, {
        year: 1974,
        number: 10,
    }, {
        year: 1973,
        number: 9,
    }, {
        year: 1972,
        number: 8,
    }, {
        year: 1971,
        number: 7,
    }, {
        year: 1970,
        number: 6,
    }, {
        year: 1969,
        number: 5,
    }, {
        year: 1968,
        number: 4,
    }, {
        year: 1967,
        number: 3,
    }, {
        year: 1966,
        number: 2,
    }, {
        year: 1965,
        number: 1,
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
                    <h3 class="pageHistory-section-shows-popup-content-title">${show.title || `${show.number}${showNumberSuffix} Albury Gang Show`} ${show.dvd ? '<a href="/#contact" class="pageHistory-section-shows-popup-content-dvd"><img class="pageHistory-section-shows-popup-content-dvd-icon" alt="DvD Available" src="/assets/images/pageHistory/dvd.webp"><div class="pageHistory-section-shows-popup-content-dvd-label">DvDs are available to order</div></a>' : ''}</h3>
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