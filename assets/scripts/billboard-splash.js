const forcedSplash = '';

const splashList = [
    'Est. 1965',
    '\"Harley here from First National Real Estate\"',
    'NOOOOOAH', // 2022, 23, 24
    '*Laughs Maniacally*',
    'Alexander Hamilton!',
    'You’re an actor, ACT!',
    'My Daddy\'s gonna hear about this!', // 2023
    'Don\'t forget to SMILE',
    'Featuring Harley\'s tight pants!', // 20__
    'Dehydrated Water!', // 2022
    'Gangitty Gangiest Gang Show Gang', // 2022
    'Cool & Creamy', // 2015
    'Super-Trustworthy Steve & Drew Studios',
    'OH NO! I\'ve lost my Mojo!', // 2018
    'I\'ve got a dream!', // 2023
    'For the Republic, FOR DEMOCRACY!',
    '1300655506',
    'Flying Monkeys!',
    'The Bird Is The Word',
    'Don\'t disturb the costume department!',
    'Check out the RAG!',
    'Sorry, need to edit the script again...',
    'Making kids voices hurt since \'65',
    'Birds of a Feather!',
    'This is the best... This is the best night...', // 2022, 23, 24
    'Encore!',
    'What were the moves to Macarena again??',
    'Wait! Why are we different cast members?', // 2023
    '\"GO TO BED\" - Drew',
    'Better than (insert show name)!',
    'Free Range Cast!',
    'Thx 2nd Albury!',
    '\"Albury Town Is Our Home!\"',
    "TWO, THREE, FOUR!",
    'You were AMAZING!',
    'Win an Oscar!.... the grouch',
    'This is a splash text, reload the page!',
    'A  Lizard forced me to add this...',
    'The Show Must Go On!',
    'Sing Louder!',
    'The better \"AGS\"', // Reference to Adelaide Gang Show
    'Shame Harley can\'t see the colour in this site!',
    'Chill\'n Like A Villain!', // 20__
    'You were my brother, Anakin! I LOVED YOU!',
    'Mother knows best!', // 2024
    'L.E.M.P.I.S.Y.P', // 2024
    'Yellow thing with hinges!', // 2024
    'Also available in blue!', // 2024
    'We\'re not going to make it!', // 2024
    'Closing Time.',
    'Let\'s Do The Time Warp Again!',
    'Air Max 3000 EXTREME!', // 2013
    'A little bit of everything...', // 2022
    'The Musical',
    'I forgot to hand in my application form!',
    'Delivery for Mr. Jones!', //2014
    'Albury Gang Show Style!', //2014
    'Try clicking Uncle Sam ;)',
    `Pineapple ${Math.round(Math.random()) ? "DOES" : "DOESN\'T"} belong on pizza!`,
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
        splashElement.innerText = splashList[Math.floor(Math.random() * splashList.length)];
        return `Random Splash \"${splashElement.innerText}\" Successfully Rolled`;
    } else if(splash >= splashList.length || splash < 0 || Number.isInteger(splash) === false) {
        splashElement.innerText = 'missingno';
        return 'Illegal Splash ID, Backup Splash \"missingno\" Rolled';
    } else {
        splashElement.innerText = splashList[splash];
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