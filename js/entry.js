const enterScreen = document.getElementById('enter-screen');
const enterButton = document.getElementById('enter-button');

enterButton.addEventListener('click', hideEnterScreen);
enterButton.addEventListener('touchstart', hideEnterScreen);

function hideEnterScreen() {
    enterScreen.classList.add('hidden');
    setTimeout(() => {
        enterScreen.style.display = 'none';
    }, 500);
}
