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
    
    this.reset(); /* Reset form fields */
    // Reset form fields after submission
    });
}

function closePopup(){ /* Function to close success popup */
    document.getElementById("success-popup").style.display = "none"; /* Hide popup by setting display to none */
    // Hide success popup when close button is clicked
}

function toggleMenu(){ /* Function to toggle mobile menu */
    const menu = document.querySelector('nav ul');
    const toggle = document.getElementById('menu-toggle');
    console.log('Toggle menu called', {menu, toggle});
    if (!menu || !toggle) {
        console.error('Menu or toggle not found');
        return;
    }
    const isOpen = menu.classList.toggle('active'); /* Toggle 'active' class on menu */
    toggle.textContent = isOpen ? '✕' : '☰';
    console.log('Menu toggled:', isOpen);
}

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

});


/* ============================= */
/* Dark Mode Toggle */
/* ============================= */
// Get the dark mode toggle button element by its ID
const darkModeIcon = document.getElementById("dark-mode-icon"); // Selects the moon icon element from HTML

if (darkModeIcon) {
    // Listen for when user clicks the dark mode toggle button
    darkModeIcon.addEventListener("click", () => { // Trigger function when user clicks the icon

        // Toggle the "dark-mode" class on the body element to switch themes
        document.body.classList.toggle("dark-mode"); // Adds or removes dark-mode class

        // Check if dark mode is now active (has dark-mode class)
        if(document.body.classList.contains("dark-mode")){ // If dark mode is ON

            // Change icon from moon to sun (because dark mode is active)
            darkModeIcon.classList.remove("fa-moon"); // Remove moon icon class
            darkModeIcon.classList.add("fa-sun"); // Add sun icon class

        }else{ // If dark mode is OFF

            // Change icon from sun back to moon (because light mode is active)
            darkModeIcon.classList.remove("fa-sun"); // Remove sun icon class
            darkModeIcon.classList.add("fa-moon"); // Add moon icon class
        }

    }); // End of click event listener
}

/* ============================= */
/* Counter Animation */
/* ============================= */
window.addEventListener("load", function() { /* Wait for page load */
    const counters = document.querySelectorAll(".count"); /* Select all counter elements */

    counters.forEach(counter => { /* Loop through each counter */
        counter.innerText = "0"; /* Start from 0 */

        const updateCounter = () => { /* Function to update counter */
            const target = +counter.getAttribute("data-target"); /* Get target number */
            const count = +counter.innerText; /* Get current number */
            const increment = target / 200; /* Calculate increment */

            if (count < target) { /* If not reached target */
                counter.innerText = Math.ceil(count + increment); /* Update display */
                setTimeout(updateCounter, 10); /* Call again after delay */
            } else {
                counter.innerText = target; /* Set final value */
            }
        };

        updateCounter(); /* Start the animation */
    });
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
closeLightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});



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




