let currentLocation = '1'

function locationFunction(button) {
    const location = button.id.substr(2)

    if (location == currentLocation) return
    
    OLB = document.getElementById(`LB${currentLocation}`)
    OLI = document.getElementById(`LI${currentLocation}`)
    OL = document.getElementById(`L${currentLocation}`)
    LB = document.getElementById(`LB${location}`)
    LI = document.getElementById(`LI${location}`)
    L = document.getElementById(`L${location}`)
    
    OLB.classList.remove('buttonselected')
    OLI.classList.add('fadeOut')
    OL.classList.add('fadeOutL')
    
    LB.classList.add('buttonselected')

    setTimeout(() => {
        OLI.style.display = 'none'
        OL.style.display = 'none'
        OLI.classList.remove('fadeOut')
        OL.classList.remove('fadeOutL')

        LI.style.display = 'inline-block'
        L.style.display = 'inline-block'
        LI.classList.add('fadeIn')
        L.classList.add('fadeInL')

        setTimeout(() => {
            LI.classList.remove('fadeOut')
            L.classList.remove('fadeOutL')
        }, 200)
    }, 200)
   
    currentLocation = location
}