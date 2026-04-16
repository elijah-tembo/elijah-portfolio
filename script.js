(function(){ /* Immediately invoked function expression (IIFE) */
    emailjs.init("aiuy-9Ek4VkNl-1pj"); /* Initialize EmailJS with public key */
    // Initialize EmailJS using your Public Key
    // This connects your website to your EmailJS account
})(); /* End of IIFE */

/* =============================
Contact Form Submission Script
============================= */

document.getElementById('contact-form').addEventListener('submit', function(event){ /* Get form element and listen for submit */
    // Select the form using id="contact-form"
    // Add event listener to detect form submission

    event.preventDefault(); /* Prevent default form behavior */
    // Prevent default form submission
    // Stops page reload when clicking submit

    emailjs.sendForm('service_lfgf17s', 'template_mafunjl', this) /* Send form using EmailJS */
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

function closePopup(){ /* Function to close success popup */
    document.getElementById("success-popup").style.display = "none"; /* Hide popup by setting display to none */
    // Hide success popup when close button is clicked
}

function toggleMenu(){ /* Function to toggle mobile menu */
    document.querySelector('nav ul').classList.toggle('active'); /* Toggle 'active' class on menu */
    }


/* ============================= */
/* Loader Screen */
/* ============================= */
window.addEventListener("load", function(){ /* Wait for page to fully load */
    document.getElementById("loader").style.display = "none"; /* Hide loader */
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
/* Select dark mode icon */
const darkModeIcon = document.getElementById("dark-mode-icon");

/* Add click event */
darkModeIcon.addEventListener("click", () => {

    /* Toggle dark mode class */
    document.body.classList.toggle("dark-mode");

    /* Change icon */
    if(document.body.classList.contains("dark-mode")){
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
    }else{
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    }

});

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
/* Back To Top Button */
/* ============================= */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
});
