const AsteroidBelt = document.getElementById('asteroids-belt')

function AsteroidRandomPosition() {
    function randomRange(min, max) {
        return Math.random() * (max - min) + min
    }

    const angle = randomRange(0, 360)
    const distance = randomRange(110, 150)

    const x = distance * Math.cos(angle * (Math.PI / 180))
    const y = distance * Math.sin(angle * (Math.PI / 180))

    return { x, y }
}

function GenerateAsteroids(num){
    for (let i = 0; i < num; i++) {
        const Asteroid = document.createElement('div')
        const {x, y} = AsteroidRandomPosition()
        Asteroid.style.top = `${y + 150}px`
        Asteroid.style.left = `${x + 150}px`

        AsteroidBelt.appendChild(Asteroid)
    }
}
GenerateAsteroids(150)