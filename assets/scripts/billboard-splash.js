const splashList = [
    'Est. 1965',
    '\"Harley here from First National Real Estate\"',
    'NOOOOOAH',
    '*Laughs Maniacally*',
    'Alexander Hamilton!',
    'You’re an actor, ACT!',
    'My Daddy\'s gonna hear about this!',
    'Don\'t forget to SMILE',
    'Petition to burn the tight pants...',
    'Dehydrated Water!',
    'Gangitty Gangiest Gang Show Gang',
    'Cool & Creamy',
    'Super-Trustworthy Steve & Drew Studios',
    'OH NO! I\'ve lost my Mojo!',
    'I\'ve got a dream!',
    'For the Republic, FOR DEMOCRACY!',
    '1300655506',
    'Flying Monkeys!',
    'The Bird Is The Word',
    'Don\'t disturb the costume department!',
    'Check out the RAG!',
    'DEFINITELY not a cult...',
    'Sorry, need to edit the script again...',
    'Making kids voices hurt since \'65',
    'Birds of a Feather!',
    'This is the best... This is the best night...',
    'Encore!',
    'What were the moves to Macarena again??',
    'Wait! Why are we different cast members?',
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
    'Speak Louder!',
    'The better \"AGS\"',
    'Shame Harley can\'t see the colour in this site!',
    'Chill\'n Like A Villain!'
]
const splashElement = document.querySelector('#pageHome-section-billboard-container-splash-text');
const currentDate = `${new Date().getDate()}/${new Date().getMonth()}`
let specialSplash;

rollSplash()
function rollSplash(splash) {
    specialSplashes()
    if (specialSplash) {
        splashElement.innerText = `${specialSplash}`;
        console.log(`Special Splash Trigger Detected, Splash ${specialSplash} Rolled`);
    } else if (splash === undefined) {
        splashElement.innerText = splashList[Math.floor(Math.random() * splashList.length)];
        return `Random Splash \"${splashElement.innerText}\" Successfully Rolled`;
    } else if(splash >= splashList.length || splash < 0) {
        splashElement.innerText = 'missingno';
        return 'Illegal Splash ID, Backup Splash \"missingno\" Rolled';
    } else {
        splashElement.innerText = splashList[splash];
        return `Splash \"${splashElement.innerText}\" At Splash Id #${splash} Successfully Rolled.`;
    }
}
function specialSplashes() {
    if (currentDate === "25/11") {
        specialSplash = 'Merry Christmas!';
    } else if (currentDate === "1/0") {
        specialSplash = 'Happy New Year!';
    }
}