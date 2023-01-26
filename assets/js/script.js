// Dom Element

const whiteBar = document.querySelector('#whiteBar');
const ecranLocked = document.querySelector('.MainIphoneLockedScreen')

// White Bar Animation

whiteBar.addEventListener('click', () => {
    ecranLocked.classList.add('slideIn');
    setTimeout(() => {
        ecranLocked.remove()
    }, 1000);
})