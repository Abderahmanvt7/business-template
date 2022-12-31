//// toggle navbar menu ===================================
const navbarMenu = document.querySelector(".navbar-section__menu");
const navbarToggler = document.querySelector(
    ".navbar-section__menu-toggler button"
);

navbarToggler.onclick = function () {
    navbarMenu.classList.toggle("navbar-section__menu--visible");
    navbarToggler.classList.toggle("close");
};

/// change between tabs ===================================
const tabsHeader = document.querySelector(".tabs__header");
const tabWhoWeAre = document.getElementById("tab-who-we-are");
const tabOurVision = document.getElementById("tab-our-vision");
const tabOurHistory = document.getElementById("tab-our-history");

tabsHeader.addEventListener("click", (e) => {
    if (e.target !== tabsHeader) {
        for (let el of tabsHeader.children)
            el.classList.remove("tab-title--active");
        e.target.classList.add("tab-title--active");

        tabWhoWeAre.classList.remove("tab-pane--active");
        tabOurVision.classList.remove("tab-pane--active");
        tabOurHistory.classList.remove("tab-pane--active");

        switch (e.target.dataset.tab) {
            case "who-we-are":
                tabWhoWeAre.classList.add("tab-pane--active");
                break;
            case "our-vision":
                tabOurVision.classList.add("tab-pane--active");
                break;
            case "our-history":
                tabOurHistory.classList.add("tab-pane--active");
                break;
        }
    }
});

//// Scroll To Top ===================================
const backToTop = document.querySelector(".scroll-top");

backToTop.addEventListener("click", () => {
    window.scrollTo(800, 800);
});

function handleBackToTop() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
}

const navbarLinks = document.querySelectorAll(".navbar-link");
/// handle navbar links
function onScroll(e) {
    const scrollPosition = window.pageYOffset + 70;

    for (let i = 0; i < navbarLinks.length; i++) {
        let currentLink = navbarLinks[i];
        let currentSection = document.querySelector(
            currentLink.getAttribute("href")
        );

        if (
            currentSection.offsetTop <= scrollPosition &&
            currentSection.offsetTop + currentSection.offsetHeight >
                scrollPosition
        ) {
            document
                .querySelector(".navbar-link")
                .classList.remove("navbar-link--active");
            currentLink.classList.add("navbar-link--active");
        } else {
            currentLink.classList.remove("navbar-link--active");
        }
    }
}

window.document.addEventListener("scroll", (e) => {
    handleBackToTop();
    onScroll(e);
});

navbarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
