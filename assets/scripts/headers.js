let header = document.querySelector("#header");
const footer = document.querySelector("#footer");

header.innerHTML =
    `
    <div class="header-extension"></div>
      <div class="header-screen_limit">
        This Website Does Not Support Screen Widths Less Than 350px :(<br>Sorry For The Inconvenience.
      </div>
      <a class="header-branding" href="/#billboard">
        <img draggable="false" class="header-branding-logo" src="/assets/images/branding/AGS_transparent.png" alt="Albury Gang Show Logo">
        <h1 class="header-branding-title">Albury Gang Show</h1>
      </a>
      <input class="header-cascade-toggle" type="checkbox" id="header-cascade-toggle" />
      <label class="header-cascade-graphic" for="header-cascade-toggle"><span class="header-cascade-graphic-section"></span></label>
      <nav class="header-navbar">
        <a class="header-navbar-button" href="/#about">About</a>
        <a class="header-navbar-button" href="/#tickets">Tickets</a>
        <a class="header-navbar-button" href="/#history">History</a>
        <a class="header-navbar-button" href="/#faq">FAQ</a>
        <a class="header-navbar-button" href="/#join">Join</a>
        <a class="header-navbar-button" href="/#contact">Contact</a>
      </nav>
    <label class="header-cascade-outside" for="header-cascade-toggle"></label>
    `
footer.innerHTML =
    `
    <section class="footer-logos">
        <a href="https://scouts.com.au/wp-content/uploads/2019/07/SCOUTS-AUSTRALIA-PRIVACY-POLICY-2018.pdf">
            <img class="footer-logos-logo" alt="Scouts Australia Logo" src="/assets/images/branding/scouts.png">
        </a>
        <a href="https://www.guidelinesforgirlguides.org.au/guide_lines/privacy-policy/">
            <img class="footer-logos-logo" alt="Guides Australia Logo" src="/assets/images/branding/guides.png">
        </a>
    </section>
    <section class="footer-privacy">
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
    console.log(window.innerHeight)

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