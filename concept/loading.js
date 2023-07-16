function LoadContent() {
    document.getElementById('navbar').style.display = "block"
    document.getElementById('maindiv').style.display = "block"

    const section = document.getElementById('mainsection')
    const footer = document.getElementById('footer')
    var footerheight = 100
    if (window.innerWidth < 600) footerheight = 200
    const calculated = window.innerHeight-section.offsetHeight-footerheight-60
    if (calculated > 0) {
        footer.style.marginTop = `${calculated}px`
    }
    else {
        footer.style.marginTop = '0'
    }
}

window.onresize = () => { LoadContent() }