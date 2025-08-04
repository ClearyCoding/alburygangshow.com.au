<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Join - Albury Gang Show</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/branding/AGS_transparent.png">
    <link rel="canonical" href="https://www.alburygangshow.com.au/join/" />

    <meta name="author" content="Albury Gang Show">
    <meta name="description" content="We are the Albury Gang Show, a two-and-a-half hour variety show created and presented by the Scouts and Guides of the Albury/Wodonga region.">
    <meta name="keywords" content="Gang Show, Albury, Scouts, Guides, Theatre, Wodonga, Australia, Gang, Show">

    <link rel="stylesheet" href="/assets/styles/loader.css">
    <link rel="stylesheet" href="/assets/styles/main.css">
    <link rel="stylesheet" href="/assets/styles/headers.css">
    <link rel="stylesheet" href="/assets/styles/imports.css">
    <link rel="stylesheet" href="/assets/styles/pages/pageJoin.css">
</head>
<body>
    <div id="loader"></div>
    <script src="/assets/scripts/loader.js"></script>

    <?php $page = 'Join'; include $_SERVER['DOCUMENT_ROOT'] . '/assets/php/header.php'; ?>
    <main id="pageJoin" class="parallax">
        <figure class="backdrop backdrop-title"></figure>
        <article id="title" class="void panel-title">
            <section class="container">
                <h2>Join Albury Gang Show</h2>
                <p>Gang Show exists to provide challenging & demanding opportunities for members of the Scout and Guide Associations, to receive
                    practical training in theatre craft. Gang Show is a specialist activity that Scouting provides to allow members to develop their
                    potential further, while still being active in their own Section. Although the focus is on youth, leaders also join in with the cast to
                    support their own member’s involvement. At the completion of rehearsals Albury Gang Show performs 3 shows to a combined
                    audience of around 1,000 people.</p>
            </section>
        </article>

        <article class="section panel-roles">
            <h2>Where can you be involved?</h2>
            <img draggable="false" alt="I WANT YOU TO JOIN THE ALBURY GANG SHOW!" src="/assets/images/pageHome/join_sam.webp" id="samImage" onclick="samPlay()">
            <audio src="/assets/audio/join_sam.mp3" id="samAudio"></audio>
            <section class="crate-roles">
                <section class="role">
                    <h3>Cast Member</h3>
                    <h4>-Aged 10&frac12 by June 1st 2026</h4>
                    <h4>-Uniformed Scout/Guide/Fellowship Member</h4>
                </section>
                <section class="role">
                    <h3>Backstage</h3>
                </section>
                <section class="role">
                    <h3>Costumes</h3>
                </section>
            </section>
        </article>

        <?php include $_SERVER['DOCUMENT_ROOT'] . '/assets/php/footer.php'; ?>
    </main>
    <script src="/assets/scripts/header.js"></script>
    <script src="/assets/scripts/uncle-sam.js"></script>
    <script src="/assets/scripts/reading-writing.js"></script>
</body>
</html>