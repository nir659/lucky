const enterScreen = document.getElementById('enter-screen');
const enterButton = document.getElementById('enter-button');

enterButton.addEventListener('click', () => {
    enterScreen.classList.add('hidden');
    setTimeout(() => {
        enterScreen.style.display = 'none';
    }, 500);
});