// GLOBAL VARIABLES

let current_rotation = 0

// SELECT ELEMENTS

const easterEggButton = document.querySelector('.easter-egg')
const logoButton = document.querySelector('.logo')

// FUNCTIONS

// Spins logo 360 degrees when double clicked
const spinLogo = () => {
    current_rotation += 360
    logoButton.style.transform = 'rotate(' + current_rotation + 'deg)'
}

// Randomly places hidden easter egg button on home screen each time page loads
const setButtonLocation = () => {
    let left = Math.floor(Math.random() * 500) + 1;
    let top = Math.floor(Math.random() * 500) + 1;
    easterEggButton.style.left = left + "px";
    easterEggButton.style.top = top + "px";
}

// Runs the setButtonLocation function automatically after the page loads.
window.onload = setButtonLocation

const foundEasterEgg = () => {
    alert("Congratulations! You found my easter egg!!!")
}

// EVENT LISTENERS

easterEggButton.addEventListener('click', foundEasterEgg)
logoButton.addEventListener('dblclick', spinLogo)