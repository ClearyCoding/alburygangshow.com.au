let header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const page = header.dataset.page;

let navbar = [
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Join",
        link: "/#join",
    },
    {
        title: "History",
        link: "/#history",
    },
    {
        title: "Tickets",
        link: "/#tickets",
    },
    {
        title: "FAQ",
        link: "/#faq",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
]

if (page && page.toString() == "History") {
    navbar = [
            {
                title: "Home",
                link: "/",
            },
            {
                title: "Join",
                link: "/#join",
            },
            {
                title: "History",
                link: "/history/#title",
            },
            {
                title: "Tickets",
                link: "/#tickets",
            },
            {
                title: "FAQ",
                link: "/#faq",
            },
            {
                title: "Contact",
                link: "/#contact",
            },
        ]
}

header.innerHTML =
    `
    <div class="extender"></div>
    <a class="branding" href="/#billboard">
      <img draggable="false" src="/assets/images/branding/AGS_transparent.png" alt="Albury Gang Show Logo">
      <h1>Albury Gang Show</h1>
    </a>
    <input type="checkbox" id="cascade-toggle" />
    <label class="cascade-graphic" for="cascade-toggle"><span class="cascade-midbar"></span></label>
    <nav id="navbar">
      <a href="${navbar[0].link}">${navbar[0].title}</a>
      <a href="${navbar[1].link}">${navbar[1].title}</a>
      <a href="${navbar[2].link}">${navbar[2].title}</a>
      <a href="${navbar[3].link}">${navbar[3].title}</a>
      <a href="${navbar[4].link}">${navbar[4].title}</a>
      <a href="${navbar[5].link}">${navbar[5].title}</a>
    </nav>
    <label class="cascade-outside" for="cascade-toggle"></label>
    `
footer.innerHTML =
    `
    <section class="crate-images">
        <a href="https://scouts.com.au/wp-content/uploads/2019/07/SCOUTS-AUSTRALIA-PRIVACY-POLICY-2018.pdf">
            <img alt="Scouts Australia Logo" src="/assets/images/branding/scouts.png">
        </a>
        <a href="https://www.guidelinesforgirlguides.org.au/guide_lines/privacy-policy/">
            <img alt="Guides Australia Logo" src="/assets/images/branding/guides.png">
        </a>
    </section>
    <section class="crate-text">
        <div class="anchor" id="privacy"></div>
        <h2>Privacy Policy</h2>
        <p>
            Albury Gang Show's Privacy Policy follows similar lines as Scouting & Guiding Australia and most
            other Australian websites, in addition, it is bound by the National Privacy Principles (NPP) in
            the Privacy Act of 1998. This policy applies to both the main website and the attached social medias.
        </p>
        <p>
            All Gang Show members have also signed a form regarding the release of photographs, videos and
            website content. If there are any issues with content which appears on the site, please do not
            hesitate to contact <a href="mailto:webmaster@alburygangshow.com.au">the webmaster</a>.
        </p>
    </section>
    <h6 class="footer-version">alburygangshow.com.au v2.1.5</h6>
    <h6 class="footer-copyright">© 2025 Albury Gang Show</h6>
    <h6 class="footer-credit">Website by <a href="mailto:alexjacleary@gmail.com" target="_blank">Alexander Cleary</a></h6>
    `

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    let startScrollPosition = null;
    const scrollablePages = document.querySelectorAll(".parallax");

    scrollablePages.forEach(page => {
        page.addEventListener("scroll", () => {
            if (!header) {
                header = document.querySelector("#header");
            }

            let scrollTop = page.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > window.innerHeight) {
                if (startScrollPosition === null) {
                    startScrollPosition = lastScrollTop;
                }
                if (scrollTop - startScrollPosition > 400) {
                    headerUp();
                }
            } else {
                headerDown();
                startScrollPosition = null;
            }
            lastScrollTop = scrollTop;
        });
    });
});
function headerUp() {
    header.style.height = "0";
    header.style.opacity = "0";
    header.style.pointerEvents = "none";
}
function headerDown() {
    header.style.height = "70px";
    header.style.opacity = "100";
    header.style.pointerEvents = "all";
}