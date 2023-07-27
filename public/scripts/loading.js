function LoadContent() {
    document.getElementById('navbar').style.display = "block"
    document.getElementById('maindiv').style.display = "block"

    const section = document.getElementById('mainsection')
    const footer = document.getElementById('footer')
    var footerheight = 100
    var navheight = 60

    if (window.innerWidth < 600) footerheight = 200
    const calculated = window.innerHeight-section.offsetHeight-footerheight-navheight
    if (calculated > 0) {
        footer.style.marginTop = `${calculated}px`
    }
    else {
        footer.style.marginTop = '0'
    }

    if (section.offsetHeight < window.innerHeight) {
        footer.style.position = 'absolute'
        footer.style.bottom = '0'
        if (window.innerWidth >= 600) {
            footer.style.width = `${section.scrollWidth-100}px`
        }
        else {
            footer.style.width = ''
        }
    }
}

window.onresize = () => { LoadContent() }