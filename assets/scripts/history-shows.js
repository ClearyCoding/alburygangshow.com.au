const showDictionary = [
    {
        title: "Coming Soon!",
        year: 2024,
        number: 58,
    }, {
        title: "The Chase",
        year: 2023,
        number: 57,
    }, {
        title: "I'm A Cast Member, Get Me Out Of Here!",
        year: 2022,
        number: 56,
    }, {
        title: "The Never Starting Story",
        year: 2021,
        number: 55,
    }, {
        title: "Lights, Cameras, NEXT!!!",
        year: 2019,
        number: 54,
    }, {
        title: "Oh No, My Mojo",
        year: 2018,
        number: 53,
    }, {
        title: "The Internet Is Down!!!",
        year: 2017,
        number: 52,
    }, {
        title: "The Show Must Go On!!!",
        year: 2016,
        number: 51,
    }, {
        year: 2015,
        number: 50,
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
    const popup = document.getElementById(`pageHistory-section-shows-popup${popupId}`);
    popup.style.display = 'flex';
}

function closePopup(popupId) {
    const popup = document.getElementById(`pageHistory-section-shows-popup${popupId}`);
    popup.style.display = 'none';
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
                <p style="color: white">${show.number}</p>
            </section>
        </div>
        `
    })
    historyShowsGrid.innerHTML = historyShowsGridHTML;
    historyShowsPinned.innerHTML = historyShowsPinnedHTML;
    historyShowsPopups.innerHTML = historyShowsPopupsHTML;
}