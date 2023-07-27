currentLocation = 'inner'
LocationIndex = ['inner','outer','dwarf']

function nav_planets_function(button) {
    const location = button.id
    const oldIndex = LocationIndex.indexOf(currentLocation)
    const newIndex = LocationIndex.indexOf(location)

    if (location == currentLocation) return
    
    const OldPlanetDiv = document.getElementById(`${currentLocation}-planets`)
    const NewPlanetDiv = document.getElementById(`${location}-planets`)
    
    document.getElementById(currentLocation).classList.remove('buttonactive')
    document.getElementById(location).classList.add('buttonactive')

    if (newIndex > oldIndex) {
        NewPlanetDiv.classList.add('active-container')
        OldPlanetDiv.classList.add('swipe-left-out')
        NewPlanetDiv.classList.add('swipe-left-in')
        setTimeout(() => {
            OldPlanetDiv.classList.remove('active-container')
            OldPlanetDiv.classList.remove('swipe-left-out')
            NewPlanetDiv.classList.remove('swipe-left-in')
        }, 800)
    }
    else {
        NewPlanetDiv.classList.add('active-container')
        OldPlanetDiv.classList.add('swipe-right-out')
        NewPlanetDiv.classList.add('swipe-right-in')
        setTimeout(() => {
            OldPlanetDiv.classList.remove('active-container')
            OldPlanetDiv.classList.remove('swipe-right-out')
            NewPlanetDiv.classList.remove('swipe-right-in')
        }, 800)
    }
   
    currentLocation = location
}