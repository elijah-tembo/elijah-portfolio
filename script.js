(function(){ /* Immediately invoked function expression (IIFE) */
    emailjs.init("aiuy-9Ek4VkNl-1pj"); /* Initialize EmailJS with public key */
    // Initialize EmailJS using your Public Key
    // This connects your website to your EmailJS account
})(); /* End of IIFE */

/* =============================
Contact Form Submission Script
============================= */

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event){ /* Get form element and listen for submit */
        // Select the form using id="contact-form"
        // Add event listener to detect form submission

        event.preventDefault(); /* Prevent default form behavior */
        // Prevent default form submission
        // Stops page reload when clicking submit

        emailjs.sendForm('service_lfgf17s', 'template_mafunjl', this) /* Send form data using EmailJS */
        // Send form data using EmailJS
        // 'service_lfgf17s' → Your Service ID
        // 'template_mafunjl' → Your Template ID
        // 'this' → Refers to the form element

    .then(function(){ /* Success callback */
        // This runs if message is sent successfully
        contactForm.reset(); /* Reset form fields after successful send */
        document.getElementById("success-popup").style.display = "flex"; /* Show success popup */
        // Show success alert
        
        // Auto-close popup after 3 seconds
        setTimeout(function(){ /* Set timeout for auto-close */
            closePopup(); /* Call close function */
        }, 3000); /* 3 seconds */
        
    }, function(error){ /* Error callback */
        // This runs if message fails to send
        console.error('EmailJS error:', error); /* Log error to console */
        
        // Show error popup instead of alert
        var errorPopup = document.createElement('div'); /* Create error popup element */
        errorPopup.className = 'success-popup'; /* Set class for styling */
        errorPopup.style.display = 'flex'; /* Make it visible */
        errorPopup.innerHTML = '<div class="popup-content" style="border-color: #ff6b6b;"><h3 style="color: #ff6b6b;">Message Failed</h3><p>Unable to send your message. Please try again or contact via email.</p><button onclick="this.parentElement.parentElement.remove()">Close</button></div>'; /* Set popup content */
        document.body.appendChild(errorPopup); /* Add to page */
    });
    });
}

function closePopup(){ /* Function to close success popup */
    document.getElementById("success-popup").style.display = "none"; /* Hide popup by setting display to none */
    // Hide success popup when close button is clicked
}




/* ============================= */
/* PROFESSIONAL MOBILE MENU */
/* ============================= */
function toggleMenu(){
/* Select mobile menu */

const navMenu = document.querySelector("nav ul");
/* Select hamburger */

const menuToggle = document.querySelector(".menu-toggle");
/* Toggle menu */

navMenu.classList.toggle("active");
/* Toggle animated icon */

menuToggle.classList.toggle("active");

}

/* ============================= */
/* CLOSE MOBILE MENU AFTER CLICK */
/* ============================= */

/* Select all menu links */

const navLinks = document.querySelectorAll("nav ul li a");

/* Loop through links */

navLinks.forEach(link =>{

link.addEventListener("click", ()=>{

/* Select elements */

const navMenu = document.querySelector("nav ul");
const menuToggle = document.querySelector(".menu-toggle");

/* Remove active classes */

navMenu.classList.remove("active");
menuToggle.classList.remove("active");

});

});

function closeMobileMenu(){
    const menu = document.querySelector('nav ul');
    const toggle = document.getElementById('menu-toggle');
    if(!menu || !toggle) return;
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        toggle.textContent = '☰';
    }
}

/* ============================= */
/* Loader Screen */
/* ============================= */
window.addEventListener("load", function(){ /* Wait for page to fully load */
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none"; /* Hide loader */
    }
});

/* ============================= */
/* Cursor Animation */
/* ============================= */
// document.addEventListener("mousemove", function(e){ /* Listen for mouse movement */
// document.querySelector(".cursor").style.left = e.pageX + "px"; /* Update cursor position X */
// document.querySelector(".cursor").style.top = e.pageY + "px"; /* Update cursor position Y */
// });



/* Fade Animation */
const faders = document.querySelectorAll(".fade-in"); /* Select all elements with fade-in class */
    window.addEventListener("scroll", ()=>{ /* Listen for scroll events */
        faders.forEach(el=>{ /* Loop through each fade element */
        const top = el.getBoundingClientRect().top; /* Get element's top position */
            if(top < window.innerHeight - 100){ /* Check if element is in viewport */
            el.classList.add("show"); /* Add show class to trigger animation */
            }
    });
});



/* ============================= */
/* Typing Animation */
/* ============================= */
const textArray = [ /* Array of texts to type */
"Website & Graphics Designer",
"Frontend Developer",
"UI/UX Designer",
"Brand Designer"
];
/* Texts that will rotate */

let typingIndex = 0; /* Index for current text in array */
let charIndex = 0; /* Index for current character in text */

function typeText(){ /* Function to type text character by character */

if(charIndex < textArray[typingIndex].length){ /* Check if there are more characters to type */

document.getElementById("typing").textContent += textArray[typingIndex].charAt(charIndex); /* Add next character */
/* Add one letter */

charIndex++; /* Increment character index */

setTimeout(typeText, 80); /* Call function again after delay */
/* Speed of typing */

}

else{ /* If text is complete */

setTimeout(eraseText, 1500); /* Wait then start erasing */
/* Wait before deleting */

}

}

function eraseText(){ /* Function to erase text character by character */

if(charIndex > 0){ /* Check if there are characters to erase */

document.getElementById("typing").textContent = /* Set text content */
textArray[typingIndex].substring(0, charIndex-1); /* Remove last character */

charIndex--; /* Decrement character index */

setTimeout(eraseText, 40); /* Call function again after delay */

}

else{ /* If text is erased */

typingIndex++; /* Move to next text */

if(typingIndex >= textArray.length) /* If at end of array */
typingIndex = 0; /* Reset to beginning */

setTimeout(typeText, 200); /* Start typing next text */

}

}


document.addEventListener("DOMContentLoaded", function(){ /* Wait for DOM to load */

    if(textArray.length) /* If there are texts to type */
        setTimeout(typeText, 1000); /* Start typing after 1 second */

    const homeLinks = document.querySelectorAll('a[href="#home"]'); /* Select all home links */
    const homeSection = document.getElementById('home'); /* Get home section */

    if (homeSection && homeLinks.length) { /* Check if elements exist */
        homeLinks.forEach(link => { /* Loop through each link */
            link.addEventListener('click', function(event) { /* Add click listener */
                event.preventDefault(); /* Prevent default anchor behavior */
                homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); /* Smooth scroll to home */
            });
        });
    }

    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu); /* Close mobile menu when a navigation link is clicked */
    });

    const previewButtons = document.querySelectorAll('.btn-preview');
    previewButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const targetId = this.dataset.previewTarget;
            const previewElement = document.getElementById(targetId);
            console.log('Preview click', targetId, previewElement);
            if (!previewElement) return;
            const src = previewElement.dataset.src;
            console.log('Preview source', src);
            if (!src) return;
            this.disabled = true;
            this.classList.add('loading');
            try {
                // Try inline preview; if it fails open in new tab as fallback
                const ok = await tryLoadPdfInto(previewElement, src, {openOnFail:true});
                if (ok) this.textContent = 'Loaded';
            } finally {
                this.disabled = false;
                this.classList.remove('loading');
            }
            previewElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const targetId = this.dataset.viewTarget;
            const previewElement = document.getElementById(targetId);
            console.log('View click', targetId, previewElement);
            if (!previewElement) return;
            const src = previewElement.dataset.src;
            console.log('View source', src);
            if (!src) return;
            // Immediately open new tab so user can view, then try inline load in background
            try {
                window.open(src, '_blank');
            } catch (e) {
                console.warn('window.open blocked', e);
            }
            await tryLoadPdfInto(previewElement, src, {openOnFail:false});
            previewElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

        /**
         * Try to load a PDF into an <object> preview element.
         * If network fetch succeeds we set the element data attribute so the PDF renders inline.
         * On failure, optionally open in new tab as a fallback.
         */
        async function tryLoadPdfInto(el, src, opts = { openOnFail: false }) {
            // Prefer a lightweight HEAD request to check accessibility
            try {
                const head = await fetch(src, { method: 'HEAD' });
                if (head && head.ok) {
                    el.setAttribute('data', src);
                    el.dataset.loaded = 'true';
                    return true;
                }
            } catch (e) {
                console.warn('HEAD request failed for', src, e);
            }

            // Try a small ranged GET as a fallback (some servers don't accept HEAD)
            try {
                const get = await fetch(src, { method: 'GET', headers: { Range: 'bytes=0-1023' } });
                if (get && (get.ok || get.status === 206)) {
                    el.setAttribute('data', src);
                    el.dataset.loaded = 'true';
                    return true;
                }
            } catch (e) {
                console.warn('GET range request failed for', src, e);
            }

            // If we reach here, inline preview likely won't work. Open in new tab if requested.
            if (opts.openOnFail) {
                try {
                    window.open(src, '_blank');
                } catch (e) {
                    console.error('Unable to open new tab for', src, e);
                }
            }

            // Leave fallback message in the preview element
            if (!el.querySelector('p')) {
                el.innerHTML = '<p>Preview not available. Use the Download button to open the document.</p>';
            }
            return false;
        }
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');

    console.log('Modal elements found:', {imageModal, modalImage, modalClose});

    function closeImageModal(){
        if(!imageModal) return;
        imageModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        if(modalImage) modalImage.src = '';
        console.log('Modal closed');
    }

    document.querySelectorAll('.flyer-card').forEach(card => {
        card.addEventListener('click', function(event) {
            event.preventDefault();
            const src = this.dataset.imageSrc || this.querySelector('img')?.src;
            console.log('Modal triggered for:', src);
            if (!src || !imageModal || !modalImage) {
                console.error('Modal elements missing:', {src, imageModal, modalImage});
                return;
            }
            modalImage.src = src;
            imageModal.classList.add('active');
            document.body.classList.add('modal-open');
            console.log('Modal opened');
        });
    });

    modalClose?.addEventListener('click', function(event) {
        event.stopPropagation();
        console.log('Close button clicked');
        closeImageModal();
    });

    // Also add direct event listener as backup
    const modalCloseDirect = document.getElementById('modal-close');
    if (modalCloseDirect) {
        modalCloseDirect.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('Close button clicked (direct)');
            closeImageModal();
        });
    }
    imageModal?.addEventListener('click', function(event) {
        if (event.target === imageModal) {
            console.log('Modal background clicked');
            closeImageModal();
        }
    });

    // Add keyboard support for closing modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && imageModal?.classList.contains('active')) {
            console.log('Escape key pressed');
            closeImageModal();
        }
    });

    const observerOptions = {
        root: null,
        threshold: 0.35,
    };

    function clearActiveNav(){
        navLinks.forEach(link => link.classList.remove('nav-active'));
    }

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const navLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

            if(!navLink) return;

            if(entry.isIntersecting){
                clearActiveNav();
                navLink.classList.add('nav-active');
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    /* ============================= */
    /* Dark Mode Toggle */
    /* ============================= */
    // Restore dark mode preference on page load
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    const darkModeIcon = document.getElementById("dark-mode-icon");

    if (darkModeIcon) {
        // Sync icon to current theme state
        if (document.body.classList.contains("dark-mode")) {
            darkModeIcon.classList.remove("fa-moon");
            darkModeIcon.classList.add("fa-sun");
        } else {
            darkModeIcon.classList.remove("fa-sun");
            darkModeIcon.classList.add("fa-moon");
        }
        
        darkModeIcon.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDark);
            
            if (isDark) {
                darkModeIcon.classList.remove("fa-moon");
                darkModeIcon.classList.add("fa-sun");
            } else {
                darkModeIcon.classList.remove("fa-sun");
                darkModeIcon.classList.add("fa-moon");
            }
        });
    }

});

/* ============================= */
/* Counter Animation */
/* ============================= */
function startCounter(counterElement) {
    counterElement.innerText = "0"; /* Start from 0 */
    const target = +counterElement.getAttribute("data-target"); /* Get target number */
    
    const updateCounter = () => { /* Function to update counter */
        const count = +counterElement.innerText; /* Get current number */
        const increment = target / 200; /* Calculate increment */
        
        if (count < target) { /* If not reached target */
            counterElement.innerText = Math.ceil(count + increment); /* Update display */
            setTimeout(updateCounter, 10); /* Call again after delay */
        } else {
            counterElement.innerText = target; /* Set final value */
        }
    };
    updateCounter(); /* Start the animation */
}

window.addEventListener("load", function() { /* Wait for page load */
    const counters = document.querySelectorAll(".count"); /* Select all counter elements */
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
});



/* ============================= */
/* Lightbox */
/* ============================= */
/* Select all portfolio images */
const portfolioImages = document.querySelectorAll(".portfolio-item img");

/* Select lightbox */
const lightbox = document.getElementById("lightbox");

/* Select lightbox image */
const lightboxImg = document.getElementById("lightbox-img");

/* Select close button */
const closeLightbox = document.querySelector(".close-lightbox");

/* Loop images */
portfolioImages.forEach(image => {

image.addEventListener("click", () => {

/* Show lightbox */
lightbox.style.display = "flex";

/* Set image */
lightboxImg.src = image.src;

});

});

/* Close lightbox */
if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}



// ================= PROJECT FILTER =================
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterBtns.forEach(btn => {

btn.addEventListener("click", ()=>{

// remove active class
filterBtns.forEach(button =>{
button.classList.remove("active");
});

// add active class
btn.classList.add("active");

const filter = btn.getAttribute("data-filter");

projects.forEach(project => {

if(filter === "all"){
project.style.display = "block";
}
else if(project.getAttribute("data-category") === filter){
project.style.display = "block";
}
else{
project.style.display = "none";
}

});

});

});




