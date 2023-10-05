const subtitleSplashes = [
    'Est. 1965',
    'Harley Here From First National Real Estate',
    'NOOOOOAH',
    '*Laughs Maniacally*',
    'Alexander Hamilton!',
    'You’re an actor, ACT!',
    'My Daddy\'s gonna hear about this!',
    'Don\'t forget to SMILE'
]
document.querySelector('#pageHome-section-billboard-container-splash-text').innerText = subtitleSplashes[Math.floor(Math.random() * subtitleSplashes.length)]