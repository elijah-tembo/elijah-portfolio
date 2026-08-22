/*
==================================================
JAVASCRIPT CODE MAP
==================================================

1. Early theme restore       -> Prevents a flash of light mode
2. EmailJS setup             -> Connects the contact form to EmailJS
3. Mobile navigation         -> Opens and closes the mobile menu
4. Page loader               -> Hides the loading screen after page load
5. Scroll animations         -> Reveals sections as they enter the viewport
6. Typing animation          -> Types the professional title in the hero
7. Page interactions         -> Handles PDFs, flyer previews and navigation
8. Dark/light mode           -> Saves and restores the selected theme
9. Counter animation         -> Counts statistics when they become visible
10. Portfolio lightbox       -> Opens project images in a larger view
11. Project filter           -> Supports filter buttons when present

HTML = STRUCTURE
CSS = APPEARANCE
JavaScript = BEHAVIOUR / INTERACTIVITY
==================================================
*/

/* ==================================================
   EARLY THEME RESTORE
   ==================================================
   localStorage remembers the visitor's theme choice.
   This runs early so dark mode is applied before the
   page is displayed.
*/
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

/* ==================================================
   EMAILJS SETUP
   ==================================================
   EmailJS sends the contact form directly from the browser.
   The SDK is included only on index.html, so this check keeps
   the shared script safe on the other pages.
*/
if (typeof emailjs !== "undefined") {
    emailjs.init("aiuy-9Ek4VkNl-1pj");
}

/* ==================================================
   CONTACT FORM / EMAILJS
   ==================================================
   preventDefault() stops the browser's normal form submission,
   which would reload the page. EmailJS receives the existing
   field names and sends them with the configured service/template.
*/
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_lfgf17s", "template_mafunjl", this)
            .then(function () {
                contactForm.reset();

                const successPopup = document.getElementById("success-popup");
                if (successPopup) {
                    successPopup.style.display = "flex";
                }

                setTimeout(closePopup, 3000);
            }, function (error) {
                console.error("EmailJS error:", error);

                const errorPopup = document.createElement("div");
                errorPopup.className = "success-popup";
                errorPopup.style.display = "flex";
                errorPopup.innerHTML = "<div class=\"popup-content\" style=\"border-color: #ff6b6b;\"><h3 style=\"color: #ff6b6b;\">Message Failed</h3><p>Unable to send your message. Please try again or contact via email.</p><button onclick=\"this.parentElement.parentElement.remove()\">Close</button></div>";
                document.body.appendChild(errorPopup);
            });
    });
}

/* ==================================================
   MOBILE NAVIGATION
   ==================================================
   The HTML calls toggleMenu() from the hamburger's onclick
   attribute. CSS uses the active class to show the menu and
   transform the hamburger icon.
*/
function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!navMenu || !menuToggle) {
        return;
    }

    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
}

function closeMobileMenu() {
    const navMenu = document.querySelector("nav ul");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!navMenu || !menuToggle) {
        return;
    }

    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
}

/* ==================================================
   PAGE LOADER
   ================================================== */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});

/* ==================================================
   SCROLL REVEAL ANIMATION
   ==================================================
   Elements with fade-in receive show when they enter the viewport.
   CSS controls the visual transition for that class.
*/
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", function () {
    faders.forEach(function (element) {
        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            element.classList.add("show");
        }
    });
});

/* ==================================================
   TYPING ANIMATION
   ================================================== */
const textArray = [
    "Graphics Designer | Web Designer | Front-End Developer"
];

let typingIndex = 0;
let charIndex = 0;

function typeText() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) {
        return;
    }

    if (charIndex < textArray[typingIndex].length) {
        typingElement.textContent += textArray[typingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 80);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) {
        return;
    }

    if (charIndex > 0) {
        typingElement.textContent = textArray[typingIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 40);
    } else {
        typingIndex++;

        if (typingIndex >= textArray.length) {
            typingIndex = 0;
        }

        setTimeout(typeText, 200);
    }
}

/* ==================================================
   DOM-READY PAGE INTERACTIONS
   ================================================== */
document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) {
        setTimeout(typeText, 1000);
    }

    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section[id]");

    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMobileMenu);
    });

    const homeLinks = document.querySelectorAll('a[href="#home"]');
    const homeSection = document.getElementById("home");

    if (homeSection && homeLinks.length) {
        homeLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });
    }

    /* ---------- PDF preview and view buttons ---------- */
    document.querySelectorAll(".btn-preview").forEach(function (button) {
        button.addEventListener("click", function () {
            const targetId = this.dataset.previewTarget;
            const iframe = document.getElementById(targetId);
            const wrapper = iframe ? iframe.closest(".document-preview-wrapper") : null;

            if (!iframe || !wrapper) {
                return;
            }

            if (wrapper.classList.contains("active")) {
                wrapper.classList.remove("active");
                iframe.src = "";
                this.textContent = "Preview";
                return;
            }

            const card = this.closest(".document-card");
            const downloadLink = card ? card.querySelector("a[download]") : null;

            if (!downloadLink) {
                return;
            }

            iframe.src = downloadLink.getAttribute("href") + "#toolbar=1";
            wrapper.classList.add("active");
            this.textContent = "Close Preview";
            wrapper.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    });

    document.querySelectorAll(".btn-view").forEach(function (button) {
        button.addEventListener("click", function () {
            const card = this.closest(".document-card");
            const downloadLink = card ? card.querySelector("a[download]") : null;

            if (downloadLink) {
                window.open(downloadLink.getAttribute("href"), "_blank");
            }
        });
    });

    /* ---------- Flyer image modal ---------- */
    const imageModal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const modalClose = document.getElementById("modal-close");

    function closeImageModal() {
        if (!imageModal) {
            return;
        }

        imageModal.classList.remove("active");
        document.body.classList.remove("modal-open");

        if (modalImage) {
            modalImage.src = "";
        }
    }

    document.querySelectorAll(".flyer-card").forEach(function (card) {
        card.addEventListener("click", function (event) {
            event.preventDefault();

            const source = this.dataset.imageSrc || this.querySelector("img")?.src;

            if (!source || !imageModal || !modalImage) {
                return;
            }

            modalImage.src = source;
            imageModal.classList.add("active");
            document.body.classList.add("modal-open");
        });
    });

    if (modalClose) {
        modalClose.addEventListener("click", closeImageModal);
    }

    if (imageModal) {
        imageModal.addEventListener("click", function (event) {
            if (event.target === imageModal) {
                closeImageModal();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && imageModal?.classList.contains("active")) {
            closeImageModal();
        }
    });

    /* ---------- Active navigation link ---------- */
    const sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            const sectionId = entry.target.getAttribute("id");
            const navLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

            if (!navLink) {
                return;
            }

            if (entry.isIntersecting) {
                navLinks.forEach(function (link) {
                    link.classList.remove("nav-active");
                });
                navLink.classList.add("nav-active");
            }
        });
    }, { root: null, threshold: 0.35 });

    sections.forEach(function (section) {
        sectionObserver.observe(section);
    });

    /* ---------- Dark/light mode ---------- */
    const darkModeIcon = document.getElementById("dark-mode-icon");

    function updateThemeIcon() {
        if (!darkModeIcon) {
            return;
        }

        const isDark = document.body.classList.contains("dark-mode");
        darkModeIcon.classList.toggle("fa-sun", isDark);
        darkModeIcon.classList.toggle("fa-moon", !isDark);
    }

    updateThemeIcon();

    if (darkModeIcon) {
        darkModeIcon.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
            updateThemeIcon();
        });
    }
});

/* ==================================================
   SUCCESS POPUP
   ==================================================
   closePopup() is global because the Close button in index.html
   calls it through an inline onclick attribute.
*/
function closePopup() {
    const successPopup = document.getElementById("success-popup");

    if (successPopup) {
        successPopup.style.display = "none";
    }
}

/* ==================================================
   COUNTER ANIMATION
   ================================================== */
function startCounter(counterElement) {
    counterElement.innerText = "0";
    const target = +counterElement.getAttribute("data-target");

    function updateCounter() {
        const count = +counterElement.innerText;
        const increment = target / 200;

        if (count < target) {
            counterElement.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counterElement.innerText = target;
        }
    }

    updateCounter();
}

window.addEventListener("load", function () {
    const counters = document.querySelectorAll(".count");

    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });
});

/* ==================================================
   PORTFOLIO LIGHTBOX
   ================================================== */
const portfolioImages = document.querySelectorAll(".portfolio-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

portfolioImages.forEach(function (image) {
    image.addEventListener("click", function () {
        if (lightbox && lightboxImage) {
            lightbox.style.display = "flex";
            lightboxImage.src = image.src;
        }
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener("click", function () {
        if (lightbox) {
            lightbox.style.display = "none";
        }
    });
}

/* ==================================================
   PROJECT FILTER
   ==================================================
   These listeners remain available for pages that contain the
   older filter controls and project-item class.
*/
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");
        const filter = button.getAttribute("data-filter");

        projects.forEach(function (project) {
            if (filter === "all" || project.getAttribute("data-category") === filter) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});
