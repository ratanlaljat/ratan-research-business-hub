/* ===================================
   RRBH Main JavaScript
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeMobileMenu();
    initializeLanguageToggle();
    initializeStickyNavbar();
    initializeWhatsAppButton();
    initializeSmoothScroll();
    highlightCurrentPage();

});

/* ===================================
   MOBILE MENU
=================================== */

function initializeMobileMenu() {

    const menuBtn =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ===================================
   LANGUAGE TOGGLE
=================================== */

function initializeLanguageToggle() {

    const languageBtn =
        document.getElementById("languageToggle");

    if (!languageBtn) return;

    languageBtn.addEventListener(
        "click",
        toggleLanguage
    );

}

/* ===================================
   STICKY NAVBAR
=================================== */

function initializeStickyNavbar() {

    const header =
        document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}

/* ===================================
   WHATSAPP BUTTON
=================================== */

function initializeWhatsAppButton() {

    const whatsappBtn =
        document.querySelector(
            ".whatsapp-float"
        );

    if (!whatsappBtn) return;

    const pageTitle =
        document.title;

    const lang =
        localStorage.getItem("rrbh_lang")
        || "en";

    let message = "";

    if (lang === "hi") {

        message =
        `नमस्ते RRBH,\n\nमैं "${pageTitle}" पेज से आया हूँ और अधिक जानकारी चाहता हूँ।`;

    } else {

        message =
        `Hello RRBH,\n\nI visited the "${pageTitle}" page and would like more information.`;

    }

    const encodedMessage =
        encodeURIComponent(message);

    whatsappBtn.href =
        `https://wa.me/916378760723?text=${encodedMessage}`;

}

/* ===================================
   SMOOTH SCROLL
=================================== */

function initializeSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            function(e) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });

}

/* ===================================
   ACTIVE PAGE HIGHLIGHT
=================================== */

function highlightCurrentPage() {

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

}

/* ===================================
   HELPER
=================================== */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}