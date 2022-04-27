const menuToggle = document.querySelector('.menuToggle')
const menuDesk = document.querySelector('.menuDesk')


menuToggle.addEventListener('click', () => {
    // menuDesk.style.display = 'block'
    menuDesk.classList.toggle('on')
    console.log(menuDesk);
})
