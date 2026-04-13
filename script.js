(function(){
    emailjs.init("aiuy-9Ek4VkNl-1pj"); 
    // Initialize EmailJS using your Public Key
    // This connects your website to your EmailJS account
})();

/* =============================
Contact Form Submission Script
============================= */

document.getElementById('contact-form').addEventListener('submit', function(event){
    // Select the form using id="contact-form"
    // Add event listener to detect form submission

    event.preventDefault(); 
    // Prevent default form submission
    // Stops page reload when clicking submit

    emailjs.sendForm('service_lfgf17s', 'template_mafunjl', this)
    // Send form data using EmailJS
    // 'service_lfgf17s' → Your Service ID
    // 'template_mafunjl' → Your Template ID
    // 'this' → Refers to the form element

    .then(function(){
        // This runs if message is sent successfully
        document.getElementById("success-popup").style.display = "flex"; // Show success popup
        // Show success alert
    }, function(error){
        // This runs if message fails to send
        alert('Oops! Something went wrong. Error: ' + JSON.stringify(error));
        // Show error message for debugging
    });
    function closePopup(){
        document.getElementById("success-popup").style.display = "none";
        // Hide success popup when close button is clicked
    };

    this.reset();
    // Reset form fields after submission
});

function toggleMenu(){
    document.querySelector('ul').classList.toggle('active');
    }


/* ============================= */
/* Loader Screen */
/* ============================= */
window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
});

/* ============================= */
/* Cursor Animation */
/* ============================= */
// document.addEventListener("mousemove", function(e){
// document.querySelector(".cursor").style.left = e.pageX + "px";
// document.querySelector(".cursor").style.top = e.pageY + "px";
// });



/* Fade Animation */
const faders = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", ()=>{
        faders.forEach(el=>{
        const top = el.getBoundingClientRect().top;
            if(top < window.innerHeight - 100){
            el.classList.add("show");
            }
    });
});



/* ============================= */
/* Typing Animation */
/* ============================= */
const textArray = [
"Website & Graphics Designer",
"Frontend Developer",
"UI/UX Designer",
"Brand Designer"
];
/* Texts that will rotate */

let typingIndex = 0;
let charIndex = 0;

function typeText(){

if(charIndex < textArray[typingIndex].length){

document.getElementById("typing").textContent += textArray[typingIndex].charAt(charIndex);
/* Add one letter */

charIndex++;

setTimeout(typeText, 80);
/* Speed of typing */

}

else{

setTimeout(eraseText, 1500);
/* Wait before deleting */

}

}

function eraseText(){

if(charIndex > 0){

document.getElementById("typing").textContent =
textArray[typingIndex].substring(0, charIndex-1);

charIndex--;

setTimeout(eraseText, 40);

}

else{

typingIndex++;

if(typingIndex >= textArray.length)
typingIndex = 0;

setTimeout(typeText, 200);

}

}

document.addEventListener("DOMContentLoaded", function(){

if(textArray.length)
setTimeout(typeText, 1000);

});



/* ============================= */
/* Counter Animation */
/* ============================= */
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 200;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter, 10);

}

else{

counter.innerText = target;

}

};

updateCounter();

});