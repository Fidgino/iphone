// Dom Element

const whiteBar = document.querySelector('#whiteBar');
const ecranLocked = document.querySelector('.MainIphone')

// White Bar Animation

whiteBar.addEventListener('click', () => {
    ecranLocked.classList.add('slideIn');
    setTimeout(() => {
        window.location.href='./views/menu.html'
        ecranLocked.remove()
    }, 1000);
})