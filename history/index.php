<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>History - Albury Gang Show</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/branding/AGS_transparent.png">

    <meta name="author" content="Albury Gang Show">
    <meta name="description" content="We are the Albury Gang Show, a two-and-a-half hour variety show created and presented by the Scouts and Guides of the Albury/Wodonga region.">
    <meta name="keywords" content="Gang Show, Albury, Scouts, Guides, Theatre, Wodonga, Australia, Gang, Show">
    <link rel="canonical" href="https://www.alburygangshow.com.au/history/" />

    <link rel="stylesheet" href="/assets/styles/loader.css">
    <link rel="stylesheet" href="/assets/styles/main.css">
    <link rel="stylesheet" href="/assets/styles/headers.css">
    <link rel="stylesheet" href="/assets/styles/imports.css">
    <link rel="stylesheet" href="/assets/styles/pages/pageHistory.css">
</head>
<body>
    <div id="loader"></div>
    <script src="/assets/scripts/loader.js"></script>

    <?php $page = 'History'; include $_SERVER['DOCUMENT_ROOT'] . '/assets/php/header.php'; ?>
    <main id="pageHistory" class="parallax">
        <figure class="backdrop backdrop-title"></figure>
        <article id="title" class="void void-title">
            <section class="container">
                <h2>The History of Albury Gang Show</h2>
                <p>Since 1965, local Scouts have graced our theatres with an Albury rendition of the ever-popular Gang Show format.
                    Celebrating our 60th show in 2026, we still hold true, continuing to have the time of our lives.</p>
            </section>
            <div class="caption">
                AGS Finale, 1967
            </div>
        </article>

        <article class="section section-early">
            <div class="anchor" id="early"></div>
            <section class="crate-text">
                <h2>The Beginning</h2>
                <h3>1960s</h3>
            </section>
        </article>

        <figure class="backdrop backdrop-void1"></figure>
        <article class="void">
            <div class="caption">
                The AGS Cast, 1976
            </div>
        </article>

        <article class="section section-early2">
            <div class="anchor" id="early2"></div>
            <section class="crate-text">
                <h2>Coming Of Age</h2>
                <h3>1970s-80s</h3>
            </section>
        </article>

        <figure class="backdrop backdrop-void2"></figure>
        <article class="void">
            <div class="caption">
                AGS Performance, n.d.
            </div>
        </article>

        <article class="section section-fire">
            <div class="anchor" id="fire"></div>
            <section class="crate-text">
                <h2>Fire at Kiewa Street</h2>
                <h3>2000s</h3>
            </section>
        </article>

        <figure class="backdrop backdrop-void3"></figure>
        <article class="void">
            <div class="caption">
                Theatre-Week Rehearsal, 2004
            </div>
        </article>

        <article class="section section-format">
            <div class="anchor" id="format"></div>
            <section class="crate-text">
                <h2>A New Format</h2>
                <h3>2010-20s</h3>
            </section>
        </article>

        <figure class="backdrop backdrop-void4"></figure>
        <article class="void">
            <div class="caption">
                AGS Finale, 2022
            </div>
        </article>

        <article class="section section-shows">
            <div class="anchor" id="shows"></div>
            <h2>Birds Of A Feather</h2>
            <p>After a great many years, we have produced countless fantastic performances, each even better than the last!</p>
            <section id="pinned-shows"></section>
            <section id="shows-grid"></section>
            <div class="more-positioner">
                <div id="more-shows" onclick="moreShows()">Show More &#x25BC</div>
            </div>
        </article>

        <?php include $_SERVER['DOCUMENT_ROOT'] . '/assets/php/footer.php'; ?>
    </main>
    <div id="show-popups"></div>

    <script src="/assets/scripts/header.js"></script>
    <script src="/assets/scripts/reading-writing.js"></script>
    <script src="/assets/scripts/history-shows.js"></script>
</body>
</html>
