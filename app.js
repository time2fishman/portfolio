

// Grab elements
const easterEggButton = document.querySelector('.easter-egg')

// Functions

const setButtonLocation = () => {
    let left = Math.floor(Math.random()*500)+1;
    let top = Math.floor(Math.random()*500)+1;
    easterEggButton.style.left = left + "px";
    easterEggButton.style.top = top + "px";
}

window.onload = setButtonLocation

const foundEasterEgg = () => {
    alert("Congratulations! You found my easter egg!!!")
}

// Event listeners

easterEggButton.addEventListener('click', foundEasterEgg)
// easterEggButton.addEventListener('mouseover', foundEasterEgg)