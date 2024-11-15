const phrases = ["follow me on spotify!", "minecraft pvp lord", "I wanna get haiiii !!!"];
const animatedText = document.querySelector(".animated-text span");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    // Update text content
    animatedText.textContent = currentPhrase.slice(0, charIndex);
    
    if (!isDeleting) {
        animatedText.classList.add("typing"); // Start underline animation
    } else {
        animatedText.classList.remove("typing"); // Remove underline during deletion
    }

    if (isDeleting) {
        charIndex--; 
    } else {
        charIndex++; 
    }

    let speed = isDeleting ? 100 : 150;

    if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 700; 
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; 
        speed = 500;
    }

    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);s