const phrases = [" follow my spotify! ", " minecraft pvp lord ", " I wanna get haiiii !!! "];
const animatedText = document.querySelector(".animated-text span");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    animatedText.textContent = currentPhrase.slice(0, charIndex);

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    let speed = isDeleting ? 150 : 200; // Slower speed for better mobile performance

    if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 1000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500;
    }

    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);
