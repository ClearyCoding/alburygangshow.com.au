const forcedSplash = 'Radically Cool';

const splashList = [
    // Generic
    {text: 'Est. 1965', weight: 2},
    {text: 'Don\'t forget to SMILE', weight: 1},
    {text: '*Laughs Maniacally*', weight: 1},
    {text: 'Making kids voices hurt since \'65', weight: 1},
    {text: 'Don\'t disturb the costume department!', weight: 1},
    {text: 'Encore!', weight: 1.5},
    {text: 'The Show Must Go On!', weight: 1},
    {text: 'Sing Louder!', weight: 1},
    {text: 'Better than (insert show name)!', weight: 1},
    {text: 'Free Range Cast!', weight: 1},
    {text: 'This is a splash text, reload the page!', weight: 3},
    {text: 'The Musical', weight: 1},
    {text: 'Try clicking Uncle Sam ;)', weight: 1},
    {text: 'I forgot to hand in my application form!', weight: 1},

    // Cast General Knowledge
    {text: '\"Harley here from First National Real Estate\"', weight: 1},
    {text: 'Featuring Harley\'s tight pants!', weight: 1},
    {text: 'Super-Trustworthy Steve & Drew Studios', weight: 1},
    {text: 'The Bird Is The Word', weight: 1},
    {text: 'Check out the RAG!', weight: 1},
    {text: 'Sorry, need to edit the script again...', weight: 1},
    {text: 'Birds of a Feather!', weight: 2},
    {text: 'Closing Time.', weight: 1},
    {text: 'What were the moves to Macarena again??', weight: 1},
    {text: 'Thx 2nd Albury!', weight: 0.1},
    {text: '\"Albury Town Is Our Home!\"', weight: 1},
    {text: "TWO, THREE, FOUR!", weight: 2},
    {text: 'You were AMAZING!', weight: 1},
    {text: 'Shame Harley can\'t see the colour in this site!', weight: 1},
    {text: 'Win an Oscar!.... the grouch', weight: 1},
    {text: 'Let\'s Do The Time Warp Again!', weight: 1},

    // Show Specific
    {text: "Ye Old Callstone", weight: 0.05}, // 2025
    {text: "Work this out!", weight: 0.05}, // 2025
    {text: "You're Welcome!", weight: 0.05}, // 2025
    {text: 'This is the best... This is the best night...', weight: 0.5}, // 2020s
    {text: `Pineapple DOESN\'T belong on pizza!`, weight: 0.1}, // 2024
    {text: `Pineapple DOES belong on pizza!`, weight: 0.1}, // 2024
    {text: 'You’re an actor, ACT!', weight: 0.05}, //2024
    {text: 'L.E.M.P.I.S.Y.P', weight: 0.1}, // 2024
    {text: 'Mother knows best!', weight: 0.05}, // 2024
    {text: 'Yellow thing with hinges!', weight: 0.05}, // 2024
    {text: 'Also available in blue!', weight: 0.05}, // 2024
    {text: 'We\'re not going to make it!', weight: 0.05}, // 2024
    {text: 'My Daddy\'s gonna hear about this!', weight: 0.05}, //2023
    {text: 'Wait! Why are we different cast members?', weight: 0.05}, // 2023
    {text: 'I\'ve got a dream!', weight: 0.05}, // 2023
    {text: 'Dehydrated Water!', weight: 0.1}, // 2022
    {text: 'A little bit of everything...', weight: 0.05}, // 2022
    {text: 'Chill\'n Like A Villain!', weight: 0.05}, // 2019 or 2021
    {text: 'OH NO! I\'ve lost my Mojo!', weight: 0.05}, // 2018
    {text: 'Cool & Creamy', weight: 0.05}, // 2015
    {text: 'Albury Gang Show Style!', weight: 0.5}, // 2014
    {text: 'Air Max 3000 EXTREME!', weight: 0.05}, // 2013
    {text: 'Flying Monkeys!', weight: 0.5}, // 2010s-20s
    {text: 'Delivery for Mr. Jones!', weight: 0.1}, // 2010s
    {text: 'Radically Cool', weight: 0.05}, // 2010s & 2025

    // Pop Culture
    {text: 'Alexander Hamilton!', weight: 0.1},
    {text: 'For the Republic, FOR DEMOCRACY!', weight: 0.1},
    {text: 'You were my brother, Anakin! I LOVED YOU!', weight: 0.1},

    // Niche
    {text: 'NOOOOOAH!', weight: 0.01},
    {text: 'Gangitty Gangiest Gang Show Gang', weight: 0.01},
    {text: 'The better \"AGS\"', weight: 0.01},
    {text: '\"GO TO BED\" - Drew', weight: 0.01},
    {text: 'A  Lizard forced me to add this...', weight: 0.01},
    {text: 'This splash will never appear on the website. Isn\'t that weird?', weight: 0},
]
specialSplashList = [
    {
        splash: 'Merry Christmas!',
        date: '25/11',
    }, {
        splash: 'Happy New Year!',
        date: '1/0',
    }, {
        splash: 'Don\'t Look Behind You!',
        date: '31/9',
    }, {
        splash: 'May the 4th be with you!',
        date: '4/4',
    }, {
        splash: 'April Fools!',
        date: '1/3',
    },
]

const splashElement = document.querySelector('#pageHome-section-billboard-container-splash-text');
const currentDate = `${new Date().getDate()}/${new Date().getMonth()}`
let specialSplash;
let specialForced;

rollSplash()
function rollSplash(splash) {
    specialSplashes(splash)
    if (specialSplash) {
        splashElement.innerText = `${specialSplash}`;
        if (specialForced) {
            console.log(`Special Splash Trigger Detected, Splash ${specialSplash} At Splash Id #${splash} Successfully Rolled`);
        } else {
            console.log(`Special Splash Trigger Detected, Splash ${specialSplash} Rolled`);
        }
    } else if (splash === undefined) {
        const totalWeight = splashList.reduce((sum, entr) => sum + entr.weight, 0);
        let rand = Math.random() * totalWeight;
        for (const entry of splashList) {
            if (rand < entry.weight) {
                splashElement.innerText = entry.text;
                break
            }
            rand -= entry.weight;
        }
        return `Random Splash \"${splashElement.innerText}\" Successfully Rolled`;
    } else if(splash >= splashList.length || splash < 0 || Number.isInteger(splash) === false) {
        splashElement.innerText = 'missingno';
        return 'Illegal Splash ID, Backup Splash \"missingno\" Rolled';
    } else {
        splashElement.innerText = splashList[splash.text];
        return `Splash \"${splashElement.innerText}\" At Splash Id #${splash} Successfully Rolled.`;
    }
}
function specialSplashes(splash) {
    specialSplash = ''
    specialForced = false
    if (forcedSplash !== '') {
        specialSplash = forcedSplash
    } else if (splash < 0 && -1 * splash <= specialSplashList.length) {
        specialSplash = specialSplashList[(splash + 1) * -1].splash
        specialForced = true
    } else {
        specialSplashList.forEach(special => {
            if (currentDate === special.date || splash === -2) {
                specialSplash = special.splash
            }
        })
    }
}