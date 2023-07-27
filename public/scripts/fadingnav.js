const MainDiv = document.getElementById('maindiv')
const NavBar = document.getElementById('navbar')
NavBar.classList.add('navFadeOut')
MainDiv.onscroll = async () => {
    if (MainDiv.scrollTop < 1) {
        NavBar.classList.remove('navFadeIn')
        NavBar.classList.add('navFadeOut')
    }
    else {
        NavBar.classList.remove('navFadeOut')
        NavBar.classList.add('navFadeIn')
    }
}