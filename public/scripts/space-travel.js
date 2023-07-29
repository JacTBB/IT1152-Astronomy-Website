const RocketsContainer = document.getElementById('rockets-container')

RocketsContainer.addEventListener('wheel', (event) => {
    if (RocketsContainer.scrollLeft == 0 && event.deltaY < 0) return
    if (RocketsContainer.scrollWidth - RocketsContainer.offsetWidth - RocketsContainer.scrollLeft < 5 && event.deltaY > 0) return

    event.preventDefault()
  
    RocketsContainer.scrollBy({left: event.deltaY < 0 ? -30 : 30})
})