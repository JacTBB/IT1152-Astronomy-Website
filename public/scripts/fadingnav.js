const MainDiv = document.getElementById('maindiv')
const NavBar = document.getElementById('navbar')
const NavDisplay = document.getElementById('navdisplay')

NavBar.classList.add('navFadeOut')
NavDisplay.style.visibility = 'hidden'

MainDiv.onscroll = async () => {
    if (NavDisplay.style.visibility == 'hidden') {
        if (MainDiv.scrollTop < 1) {
            NavBar.classList.remove('navFadeIn')
            NavBar.classList.add('navFadeOut')
        }
        else {
            NavBar.classList.remove('navFadeOut')
            NavBar.classList.add('navFadeIn')
        }
    }
}

NavDisplay.ontransitionstart = async () => {
    if (NavDisplay.style.visibility == 'visible') {
        if (MainDiv.scrollTop < 1) {
            NavBar.classList.remove('navFadeOut')
            NavBar.classList.add('navFadeIn')
        }
    }
    else {
        if (MainDiv.scrollTop < 1) {
            NavBar.classList.remove('navFadeIn')
            NavBar.classList.add('navFadeOut')
        }
        else {
            NavBar.classList.remove('navFadeOut')
            NavBar.classList.add('navFadeIn')
        }
    }
}