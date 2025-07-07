<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home - Albury Gang Show</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/branding/AGS_transparent.png">

    <meta name="author" content="Albury Gang Show">
    <meta name="description" content="We are the Albury Gang Show, a two-and-a-half hour variety show created and presented by the Scouts and Guides of the Albury/Wodonga region.">
    <meta name="keywords" content="Gang Show, Albury, Scouts, Guides, Theatre, Wodonga, Australia, Gang, Show, Entertainment Centre, Border">

    <link rel="stylesheet" href="/assets/styles/loader.css">
    <link rel="stylesheet" href="/assets/styles/main.css">
    <link rel="stylesheet" href="/assets/styles/imports.css">
    <link rel="stylesheet" href="/assets/styles/pages/pageHome.css">
    <link rel="stylesheet" href="/assets/styles/headers.css">
</head>
<body>
    <div id="loader">
        <noscript>
            <div id="loader-wheel-error">
                <img draggable="false" alt="Gang Show Logo" src="/assets/images/branding/AGS_transparent-sad.png" class="loader-logo">
            </div>
            <div class="loader-title loader-error">alburygangshow.com.au</div>
            <div class="loader-subtitle">This site requires Javascript</div>
            <div class="loader-notice">Please refer to your internet browser's documentations on how to enable JavaScript for this website.</div>
        </noscript>
    </div>
    <script src="/assets/scripts/loader.js"></script>

    <?php $page = 'Home'; include $_SERVER['DOCUMENT_ROOT'] . '/assets/php/header.php'; ?>
    <main id="pageHome" class="parallax">
        <figure class="backdrop backdrop-billboard"></figure>
        <article id="billboard" class="void void-billboard">
            <h4 id="countdown-prefix">Only</h4>
            <section class="container container-countdown">
                <h2 id="countdown"> A Short Time</h2>
                <div id="countdown-units">
                    <h5>Days</h5>
                    <h5>Hours</h5>
                    <h5>Minutes</h5>
                    <h5>Seconds</h5>
                </div>
                <div class="splash-positioner">
                    <div class="splash-restrainer">
                        <div id="splash-text">Birds of a Feather!</div>
                    </div>
                </div>
            </section>
            <section class="container container-context">
                <h4 id="countdown-text">Until Opening Curtains!</h4>
                <h5 id="countdown-context">Great job again everyone! See you all next year for the 60th!</h5>
            </section>
            <a href="#about">
                <figure class="pulser">
                    <img draggable="false" alt="Scroll Down For More!" src="/assets/images/pageHome/billboard_scroll_down.webp">
                </figure>
            </a>
        </article>

        <article class="section section-about">
            <div class="anchor" id="about"></div>
            <section class="crate-text">
                <h2>Who Are We?</h2>
                <p>
                    We are the Albury Gang Show, a two-and-a-half hour variety show created and presented by the Scouts and Guides of the Albury/Wodonga region. Members can take on a variety of roles, as a cast member, writing in our creative teams or become part of one of our amazing backstage teams.
                </p>
                <p>
                    Our fun-loving cast perform three shows in June every year, with stories and skits written and choreographed by our talented creative teams. Cast and Crew will meet up every week (and a few weekends) and rehearse their lines, songs and dances alongside their friends.
                </p>
                <p>
                    Gang Show exists to provide challenging and demanding opportunities for all interested members of the Scout and Guide Associations, to receive practical training in theatre craft while creating a public relations showpiece for audiences and other Scout and Guide Groups. Gang Show, like rock-climbing, abseiling or flying, is a specialist activity that Scouting provides to allow members to develop their potential further, while still being active in their own Section. In fact, Leaders also join in with the cast to support their own member’s involvement!
                </p>
            </section>
            <section class="crate-images">
                <img draggable="false" class="about-image1" src="/assets/images/pageHome/about_1.webp" alt="Gang Show Rehearsing (Ah Scary Cayt!)">
                <img draggable="false" class="about-image2" src="/assets/images/pageHome/about_2.webp" alt="Gang Show Performing">
            </section>
        </article>

        <figure class="backdrop backdrop-join"></figure>
        <article class="void void-join">
            <section class="container">
                <div class="anchor" id="join"></div>
                <img draggable="false" alt="I WANT YOU TO JOIN THE ALBURY GANG SHOW!" src="/assets/images/pageHome/join_sam.webp" id="samImage" onclick="samPlay()">
                <audio src="/assets/audio/join_sam.mp3" id="samAudio"></audio>
                <section class="crate-text">
                    <h2>Join Albury Gang Show!</h2>
                    <p>
                        The Albury Gang Show is always welcoming new cast members,
                        from the ages of 10&frac12 to... well, anything!
                        We love to see interest from scouts and guides, as well
                        as leaders, from both sides of the border.
                    </p>
                    <p>
                        No prior experience in theatre of any kind is required!
                        Most of our first timers have never been on a stage before,
                        and are quite nervous to perform to a large audience,
                        only to finish the show begging for a bigger role the next year!
                    </p>
                    <section class="crate-buttons">
                        <p>Applications will reopen closer to the 2026 season commencement - Date TBA</p>
                        <!--<a href="/assets/forms/2025/Application_Info_Pack_2025.pdf" class="button" target="_blank">
                            2025 Info. Pack
                        </a>
                        <a href="/assets/forms/2025/2025_AGS_E1_Form1.pdf" class="button" target="_blank">
                            2025 App. Form
                        </a>-->
                    </section>
                    <p class="join-context">
                        For any enquiries, don't be afraid to <a href="#contact">contact us</a>!
                    </p>
                </section>
                <figure class="crate-images">
                    <img draggable="false" alt="Lily McQualter, our resident smiler!" src="/assets/images/pageHome/join.webp">
                </figure>
            </section>
        </article>

        <article class="section section-history">
            <div class="anchor" id="history"></div>
            <figure class="crate-images">
                <img draggable="false" src="/assets/images/pageHome/history.webp" alt="AGS Performance 1967">
            </figure>
            <section class="crate-text">
                <h2>Our History</h2>
                <p>
                    Since 1965, local Scouts have graced our theatres with an Albury rendition of the ever-popular Gang Show format.
                    Celebrating our 60th show in 2026, we still hold true, continuing to have the time of our lives.
                </p>
                <p>History Page Coming Soon!</p>
                <!--<a href="/history" target="_self" class="button">Our History &#8594</a>-->
            </section>
        </article>

        <figure class="backdrop backdrop-posters"></figure>
        <article class="void"></article>

        <article class="section section-faq">
            <div class="anchor" id="faq"></div>
            <figure class="crate-images">
                <img draggable="false" src="/assets/images/pageHome/faq.webp" alt="If you remember these images, you are an AGS veteran!">
            </figure>
            <section class="crate-text">
                <h2>Frequently Asked Questions</h2>
                <section class="crate-list">
                    <div class="question">
                        <input class="question-toggle" type="checkbox" id="faq-question5-toggle" />
                        <label class="question-title" for="faq-question5-toggle">
                            <span class="question-arrow">&#9660</span>
                            When will tickets become available to purchase?
                        </label>
                        <p>
                            Tickets are usually made available on the Albury Entertainment Center
                            website about a month in advance of the show. When this happens, you can find more
                            information on our <a href="#tickets">tickets</a> section.
                        </p>
                    </div>
                    <div class="question">
                        <input class="question-toggle" type="checkbox" id="faq-question1-toggle" />
                        <label class="question-title" for="faq-question1-toggle">
                            <span class="question-arrow">&#9660</span>
                            What days do rehearsals take place?
                        </label>
                        <p>
                            All rehearsal dates can be found in advance in the <a href="#join">information pack</a>.
                        </p>
                        <p>
                            In short, we usually meet on Tuesday nights from 6:59pm to 9pm, and throughout the day on
                            the first weekend of each month. We also have full-dress rehearsals at the Albury
                            Entertainment Center for the last week before the show.
                        </p>
                        <p>
                            This is all subject to change, and it is best to contact a crew member if you have any
                            questions or concerns.
                        </p>
                    </div>
                    <div class="question">
                        <input class="question-toggle" type="checkbox" id="faq-question2-toggle" />
                        <label class="question-title" for="faq-question2-toggle">
                            <span class="question-arrow">&#9660</span>
                            Where do rehearsals take place?
                        </label>
                        <p>
                            During the rehearsal season we meet at the 2nd Albury Scout hall,
                            which can be found at 319 North St, Albury.
                        </p>
                        <p>
                            During theatre week, we will meet at the Albury Entertainment
                            Center, at the side entrance. This will be communicated at meetings well
                            in advance.
                        </p>
                    </div>
                    <div class="question">
                        <input class="question-toggle" type="checkbox" id="faq-question3-toggle" />
                        <label class="question-title" for="faq-question3-toggle">
                            <span class="question-arrow">&#9660</span>
                            What should I bring/wear to a rehearsal?
                        </label>
                        <p>
                            Your uniform shirt / rehearsal shirt with some comfortable shorts or pants and closed in comfortable shoes. On
                            weekend rehearsals you will want to bring a hat and sunblock as we do spend time outdoors.
                        </p>
                        <p>
                            Your full script and a pen are also a must. You must bring a drink bottle. Drinks and
                            chocolates are available for purchase from the kiosk
                        </p>
                    </div>
                    <div class="question">
                    <input class="question-toggle" type="checkbox" id="faq-question4-toggle" />
                    <label class="question-title" for="faq-question4-toggle">
                        <span class="question-arrow">&#9660</span>
                        Help! I am trapped in the Internet!
                    </label>
                    <p>>:)</p>
                </div>
                </section>
                <h5>If you have any further questions, don't hesitate to <a href="#contact">contact us</a>!</h5>
            </section>
        </article>

        <figure class="backdrop backdrop-tickets"></figure>
        <article class="void void-tickets">
            <section class="container">
                <div class="anchor" id="tickets"></div>
                <section class="crate-text">
                    <h2>Tickets</h2>
                    <p>
                        The 2026 Show currently under development.
                        The dates and times for the next show will be:
                    </p>
                    <time>- 7:30pm - Friday the 12th of June 2026</time>
                    <time>- 1:30pm - Saturday the 13th of June 2026</time>
                    <time>- 7:30pm - Saturday the 13th of June 2026</time>
                    <p>
                        All of our performances are held at
                        <a href="https://www.alburyentertainmentcentre.com.au/">The Albury Entertainment Center</a>, 525 Swift Street, Albury NSW.
                    </p>
                    <!--<a href="https://www.alburyentertainmentcentre.com.au/" target="_blank" class="button">Book Now! &#8594</a>-->
                </section>
                <figure class="crate-images">
                    <img alt="Promotional Photo" src="/assets/images/pageHome/tickets.jpg"/>
                </figure>
            </section>
        </article>

        <article class="section section-members">
            <div class="anchor" id="members"></div>
            <figure class="crate-images">
                <img draggable="false" src="/assets/images/pageHome/members.webp" alt="Cast Rehearsing">
            </figure>
            <section class="crate-text">
                <h2>Cast & Crew Portal</h2>
                <p>
                    Latest information, updates and resources are posted on the Cast & Crew Facebook group.
                    If you are currently a member of the cast or crew or are a parent of a current cast member,
                    join the latest group to stay in the loop!
                </p>
                <a href="https://www.facebook.com/groups/2025ags" target="_blank" class="button">2025 Facebook &#8594</a>
            </section>
        </article>

        <figure class="backdrop backdrop-local_groups"></figure>
        <article class="void void-local_groups">
            <section class="container">
                <div class="anchor" id="local_groups"></div>
                <h2>Where do our gangsters come from?</h2>
                <h3>
                    We have members from throughout the local area,
                    these are just a few of the scout and guide groups where our cast & crew are from!
                </h3>
                <section class="crate-list">
                    <h6>1st Albury Rovers</h6>
                    <h6>1st Albury Scouts</h6>
                    <h6>2nd Albury Scouts</h6>
                    <h6>1st Beechworth Scouts</h6>
                    <h6>1st Benalla Scouts</h6>
                    <h6>1st Lavington Scouts</h6>
                    <h6>1st Mt Beauty Scouts</h6>
                    <h6>3rd Wodonga Scouts</h6>
                    <h6>1st Yackandandah Scouts</h6>
                    <h6>1st Yarrunga Scouts</h6>
                    <h6>Albury Gang Show Fellowship</h6>
                    <h6>Albury Guides</h6>
                    <h6>Bundara Rovers</h6>
                    <h6>Ettamogah Venturers</h6>
                    <h6>North Albury Guides</h6>
                    <h6>Twin Rivers Olave Fellowship</h6>
                    <h6>Upper Murray Venturers</h6>
                    <h6>Wodonga Guides</h6>
                </section>
            </section>
        </article>

        <article class="section section-links">
            <div class="anchor" id="links"></div>
            <h2>Other Shows</h2>
            <h3>
                Live too far away to join Albury Gang Show? Fear NOT! There are plenty of fantastic scout & guide driven
                performances throughout Australia and New Zealand!
            </h3>
            <section class="carousel" data-speed="7">
                <h3>Victoria</h3>
                <a href="https://www.camberwellshowtime.com/" target="_blank">
                    <img draggable="false" alt="Camberwell Showtime" src="/assets/images/pageHome/links/camberwell.webp">
                    <h6>Camberwell / Geelong Showtime</h6>
                </a>
                <a href="https://www.gangshow.org/" target="_blank">
                    <img draggable="false" alt="Melbourne Gang Show" src="/assets/images/pageHome/links/melbourne.webp">
                    <h6>Melbourne Gang Show</h6>
                </a>
                <a href="https://www.southmetroshowtime.org/" target="_blank">
                    <img draggable="false" alt="South Metro Showtime" src="/assets/images/pageHome/links/south_metro.webp">
                    <h6>South Metro Showtime</h6>
                </a>
                <a href="https://www.strzeleckishowtime.com.au/" target="_blank">
                    <img draggable="false" alt="Strzelecki Showtime" src="/assets/images/pageHome/links/strzelecki.webp">
                    <h6>Strzelecki Showtime</h6>
                </a>
                <a href="https://sunraysiagangshow.org.au/" target="_blank">
                    <img draggable="false" alt="Sunraysia Gang Show" src="/assets/images/pageHome/links/sunraysia.webp">
                    <h6>Sunraysia Gang Show</h6>
                </a>
                <a href="https://whitehorseshowtime.org/" target="_blank">
                    <img draggable="false" alt="Whitehorse Showtime" src="/assets/images/pageHome/links/whitehorse.webp">
                    <h6>Whitehorse Showtime</h6>
                </a>

                <h3>A.C.T</h3>
                <a href="https://sites.google.com/scoutsact.com.au/canberra-gang-show/home" target="_blank">
                    <img draggable="false" alt="Canberra Gang Show" src="/assets/images/pageHome/links/canberra.webp">
                    <h6>Canberra Gang Show</h6>
                </a>

                <h3>New South Wales</h3>
                <a href="https://centralcoastgangshow.org/" target="_blank">
                    <img draggable="false" alt="Central Coast Gang Show" src="/assets/images/pageHome/links/central_coast.webp">
                    <h6>Central Coast Gang Show</h6>
                </a>
                <a href="https://gangshow.asn.au/" target="_blank">
                    <img draggable="false" alt="Cumberland Gang Show" src="/assets/images/pageHome/links/cumberland.webp">
                    <h6>Cumberland Gang Show</h6>
                </a>
                <a href="https://www.gangshow.com/" target="_blank">
                    <img draggable="false" alt="Hornsby Gang Show" src="/assets/images/pageHome/links/hornsby.webp">
                    <h6>Hornsby Gang Show</h6>
                </a>
                <a href="https://www.kirraweegangshow.com.au/" target="_blank">
                    <img draggable="false" alt="Kirrawee Gang Show" src="/assets/images/pageHome/links/kirrawee.webp">
                    <h6>Kirrawee Gang Show</h6>
                </a>
                <a href="https://www.korimulgangshow.com/" target="_blank">
                    <img draggable="false" alt="Korimul Gang Show" src="/assets/images/pageHome/links/korimul.webp">
                    <h6>Korimul Gang Show</h6>
                </a>

                <h3>Queensland</h3>
                <a href="https://brisbanegangshow.com.au/" target="_blank">
                    <img draggable="false" alt="Brisbane Gang Show" src="/assets/images/pageHome/links/brisbane.webp">
                    <h6>Brisbane Gang Show</h6>
                </a>
                <a href="https://www.darlingdownsrevue.org.au/" target="_blank">
                    <img draggable="false" alt="Darling Downs Revue" src="/assets/images/pageHome/links/darling_downs.webp">
                    <h6>Darling Downs Revue</h6>
                </a>
                <a href="https://limestonerevue.wordpress.com/" target="_blank">
                    <img draggable="false" alt="Limestone Revue" src="/assets/images/pageHome/links/limestone.webp">
                    <h6>Limestone Revue</h6>
                </a>
                <a href="https://redlandsrevue.wixsite.com/redlandsrevue/about" target="_blank">
                    <img draggable="false" alt="Redlands Revue" src="/assets/images/pageHome/links/redlands.webp">
                    <h6>Redlands Revue</h6>
                </a>
                <a href="https://www.rochedale.scoutsqld.com.au/rochedale-revue-scout--guide-show.html" target="_blank">
                    <img draggable="false" alt="Rochedale Revue" src="/assets/images/pageHome/links/rochedale.webp">
                    <h6>Rochedale Revue</h6>
                </a>
                <a href="https://wonargo.wordpress.com/" target="_blank">
                    <img draggable="false" alt="Wonargo Revue" src="/assets/images/pageHome/links/wonargo.webp">
                    <h6>Wonargo Revue</h6>
                </a>

                <h3>South Australia</h3>
                <a href="https://www.adelaidegangshow.com.au/" target="_blank">
                    <img draggable="false" alt="Adelaide Gang Show" src="/assets/images/pageHome/links/adelaide.webp">
                    <h6>Adelaide Gang Show</h6>
                </a>
                <a href="https://carryonguides.org.au/" target="_blank">
                    <img draggable="false" alt="Carry On Guides" src="/assets/images/pageHome/links/carry_on.webp">
                    <h6>Carry On Guides</h6>
                </a>
                <a href="https://www.comedycapersgangshow.org.au/" target="_blank">
                    <img draggable="false" alt="Comedy Capers Gang Show" src="/assets/images/pageHome/links/comedy_capers.webp">
                    <h6>Comedy Capers Gang Show</h6>
                </a>
                <a href="https://www.scoutsshouts.org.au/" target="_blank">
                    <img draggable="false" alt="Scout Shouts" src="/assets/images/pageHome/links/scout_shouts.webp">
                    <h6>Scout Shouts</h6>
                </a>

                <h3>Tasmania</h3>
                <a href="https://www.hobartgangshow.com/" target="_blank">
                    <img draggable="false" alt="Hobart Gang Show" src="/assets/images/pageHome/links/hobart.webp">
                    <h6>Hobart Gang Show</h6>
                </a>

                <h3>New Zealand</h3>
                <a href="https://gangshow.co.nz/" target="_blank">
                    <img draggable="false" alt="Auckland Central Gang Show" src="/assets/images/pageHome/links/auckland_central.webp">
                    <h6>Auckland Central Gang Show</h6>
                </a>
                <a href="https://www.christchurchgangshow.org.nz/" target="_blank">
                    <img draggable="false" alt="Christchurch Gang Show" src="/assets/images/pageHome/links/christchurch.webp">
                    <h6>Christchurch Gang Show</h6>
                </a>
                <a href="https://hvgs.org.nz/" target="_blank">
                    <img draggable="false" alt="Hutt Valley Gang Show" src="/assets/images/pageHome/links/hutt.webp">
                    <h6>Hutt Valley Gang Show</h6>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100064602915242" target="_blank">
                    <img draggable="false" alt="Manawatu Gang Show" src="/assets/images/pageHome/links/manawatu.webp">
                    <h6>Manawatu Gang Show</h6>
                </a>
                <a href="https://www.facebook.com/nelsongangshow/" target="_blank">
                    <img draggable="false" alt="Nelson Gang Show" src="/assets/images/pageHome/links/nelson.webp">
                    <h6>Nelson Gang Show</h6>
                </a>
                <a href="https://gangshow.org.nz/" target="_blank">
                    <img draggable="false" alt="North Shore Gang Show" src="/assets/images/pageHome/links/north_shore.webp">
                    <h6>North Shore Gang Show</h6>
                </a>
                <a href="https://www.otagogangshow.nz/" target="_blank">
                    <img draggable="false" alt="Otago Gang Show" src="/assets/images/pageHome/links/otago.webp">
                    <h6>Otago Gang Show</h6>
                </a>
                <a href="https://www.facebook.com/WaikatoGangShow/" target="_blank">
                    <img draggable="false" alt="Waikato Gang Show" src="/assets/images/pageHome/links/waikato.webp">
                    <h6>Waikato Gang Show</h6>
                </a>
            </section>
        </article>

        <figure class="backdrop backdrop-void"></figure>
        <article class="void"></article>

        <article class="section section-sponsors">
            <div class="anchor" id="sponsors"></div>
            <h2>Our Supporters</h2>
            <h3>The Albury Gang Show would cease to exist if not for our fantastic and generous supporters!</h3>
            <section class="carousel" data-speed="-4">
                <a target="_blank" href="https://2640restaurantandbar.com.au/"><img  draggable="false" alt="2640 Restaurant and Bar" src="/assets/images/pageHome/sponsors/2640.webp"></a>
                <a target="_blank" href="https://www.alburysound.com/"><img  draggable="false" alt="Albury Sound & Lighting" src="/assets/images/pageHome/sponsors/asl.webp"></a>
                <a target="_blank" href="https://www.bunnings.com.au/"><img  draggable="false" alt="Bunnings Warehouse" src="/assets/images/pageHome/sponsors/bunnings.webp"></a>
                <a target="_blank" href="https://commercialclubalbury.com.au/"><img  draggable="false" alt="Commercial Club Albury" src="/assets/images/pageHome/sponsors/commercialclub.webp"></a>
                <a target="_blank" href="https://link.mobilocard.com/card_code/ODAbGkEToGzg?s=4"><img  draggable="false" alt="Darren Leckie" src="/assets/images/pageHome/sponsors/darren.webp"></a>
                <a target="_blank" href="https://www.facebook.com/p/Fallon-Street-Takeaway-100043096542994/"><img  draggable="false" alt="Fallon Street Takeaway" src="/assets/images/pageHome/sponsors/fallon.webp"></a>
                <a target="_blank" href="https://www.firstnational.com.au/pages/real-estate/agent/18639/harley-maclachlan"><img  draggable="false" alt="First National Real-Estate" src="/assets/images/pageHome/sponsors/firstnational.webp"></a>
                <a target="_blank" href="https://www.gjgardner.com.au/"><img  draggable="false" alt="GJ Gardener Homes" src="/assets/images/pageHome/sponsors/gjgardener.webp"></a>
                <a target="_blank" href="https://butko.com.au/"><img  draggable="false" alt="JC Butko" src="/assets/images/pageHome/sponsors/jcbutko.webp"></a>
                <a target="_blank" href="https://www.facebook.com/AlburyLionsClub/"><img  draggable="false" alt="Albury Lions Club" src="/assets/images/pageHome/sponsors/lions.webp"></a>
                <a target="_blank" href="https://www.matthewgrahamplumbing.com.au/"><img  draggable="false" alt="Mathew Graham Plumbing" src="/assets/images/pageHome/sponsors/matthew.webp"></a>
                <a target="_blank" href="https://www.youtube.com/@DarcyLighting/videos"><img  draggable="false" alt="Roulston Lighting" src="/assets/images/pageHome/sponsors/roulston.webp"></a>
                <a target="_blank" href="https://www.facebook.com/groups/166595490347817/"><img  draggable="false" alt="Sammy Jo Creations" src="/assets/images/pageHome/sponsors/sammy.webp"></a>
                <a target="_blank" href="https://www.youtube.com/watch?v=98fD5DaO_Do"><img  draggable="false" alt="Supertrustworthy Steve and Drew Studios" src="/assets/images/pageHome/sponsors/supertrustworthy.webp"></a>
            </section>
        </article>

        <figure class="backdrop backdrop-crew"></figure>
        <article class="void void-crew">
            <section class="container">
                <div class="anchor" id="crew"></div>
                <h2>Our Crew</h2>
                <section class="crate-list">
                    <figure>
                        <h3>Executive Team</h3>
                        <h6>Darren Leckie, Caroll Bolitho, Andrew Ferguson, Anne Moffat, Mackenzi Harrison, Amanda Harrison</h6>
                    </figure>
                    <figure>
                        <h3>Production Team</h3>
                        <h6>Adelaide Roach, Harley Maclachlan, Lily McQualter, Andrew Ferguson, Elizabeth Powles (asst.), Grace Harper (asst.)</h6>
                    </figure>
                    <figure>
                        <h3>Costumes Team</h3>
                        <h6>Amanda Harrison, Mackenzi Harrison, Cameron Abood, Del Mills, Kyleen Marheine, Joanne Amos</h6>
                    </figure>
                    <figure>
                        <h3>Choreography Team</h3>
                        <h6>Adelaide Roach, Grace Harper, Lily McQualter, Elizabeth Powles, Hannah Young</h6>
                    </figure>
                    <figure>
                        <h3>Backstage Team</h3>
                        <h6>Ash Gillespie, Connor Campbell, Orla DeYoung, Mackenzi Harrison, Anne Moffat, Alice McQualter, Harley Maclachlan, Noah Harper, Callan Spinelli</h6>
                    </figure>
                    <figure>
                        <h3>Welfare Team</h3>
                        <h6>Darren Leckie, Janie Eckert, Kara Rennick</h6>
                    </figure>
                    <figure>
                        <h3>Make-Up Team</h3>
                        <h6>Dee Sweetland, Sue Timmermans, Noeline Bridge, Emma Timmermans</h6>
                    </figure>
                    <figure>
                        <h3>Sound & Lighting</h3>
                        <h6>Connor Campbell, Andrew Ferguson, Dim Roach, Charlie Roach, Adelaide Roach, Darcy Roulston</h6>
                    </figure>
                </section>
                <h3 class="crew-context">And MANY more behind the scenes!</h3>
            </section>
        </article>

        <article class="section section-contact">
            <div class="anchor" id="contact"></div>
                <section class="crate-text">
                    <section class="crate-emails">
                        <h2>Contact Us</h2>
                        <h3>General Enquiries:</h3>
                        <a href="mailto:info@alburygangshow.com.au">info@alburygangshow.com.au</a>
                        <h3>Website Enquiries:</h3>
                        <a href="mailto:webmaster@alburygangshow.com.au">webmaster@alburygangshow.com.au</a>
                    </section>
                    <section class="crate-socials">
                        <h3>Make Sure To Follow Our Socials!</h3>
                        <figure>
                            <a href="https://www.facebook.com/AlburyGangshow/" target="_blank"><img  draggable="false" alt="Facebook" src="/assets/images/branding/facebook.png"></a>
                            <a href="https://www.youtube.com/@AlburyGangshow/" target="_blank"><img  draggable="false" alt="Youtube" src="/assets/images/branding/youtube.png"></a>
                            <a href="https://www.instagram.com/alburygangshow/" target="_blank"><img  draggable="false" alt="Instagram" src="/assets/images/branding/instagram.png"></a>
                            <a href="https://www.tiktok.com/@albury.gang.show/" target="_blank"><img  draggable="false" alt="TikTok" src="/assets/images/branding/tiktok.png"></a>
                        </figure>
                    </section>
                </section>
            <figure class="crate-images">
                <img  draggable="false" class="contact-image1" alt="The Cast Dress Rehearsal" src="/assets/images/pageHome/contact_1.jpg">
                <img  draggable="false" class="contact-image2" alt="Darby and Crew" src="/assets/images/pageHome/contact_3.webp">
            </figure>
        </article>

        <?php include $_SERVER['DOCUMENT_ROOT'] . '/assets/php/footer.php'; ?>
    </main>

    <script src="/assets/scripts/billboard-splash.js"></script>
    <script src="/assets/scripts/carousel.js"></script>
    <script src="/assets/scripts/header.js"></script>
    <script src="/assets/scripts/billboard-countdown.js"></script>
    <script src="/assets/scripts/uncle-sam.js"></script>
    <script src="/assets/scripts/reading-writing.js"></script>
</body>
</html>