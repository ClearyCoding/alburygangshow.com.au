const subtitleSplashes = [
    'Est. 1965',
    'Harley Here From First National Real Estate',
    'NOOOOOAH',
    '*Laughs Maniacally*',
    'Alexander Hamilton!',
    'You’re an actor, ACT!',
    'My Daddy\'s gonna hear about this!',
    'Don\'t forget to SMILE',
    'Petition to burn the tight pants...',
    'Dehydrated Water!',
    'Gangity Gangiest Gang Show Gang',
    'Cool & Creamy',
    'Super-Trustworthy Steve & Drew Studios',
    'OH NO! I\'ve lost my Mojo!'
]
document.querySelector('#pageHome-section-billboard-container-splash-text').innerText = subtitleSplashes[Math.floor(Math.random() * subtitleSplashes.length)]