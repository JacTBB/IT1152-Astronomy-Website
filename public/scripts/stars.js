const Stars = document.getElementById('stars')

function TouchingTitle(Star) {
    var aRect = document.getElementById('stars-title').getBoundingClientRect()
    var bRect = Star.getBoundingClientRect()
  
    if (
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    ) {
        Star.remove()
    }
}

for (let i = 0; i < 300; i++) {
    const Star = document.createElement('div')
    Star.classList.add('star', 'star1')
    Star.style.top = `${Math.random() * 100}%`
    Star.style.left = `${Math.random() * 100}%`
    Star.style.backgroundColor = `rgb(${(Math.random() * 100) + 50},${(Math.random() * 80) + 50},${(Math.random() * 150) + 100})`
    Star.style.opacity = '0'
    Star.style.animation = `StarsAnimation${Math.round(Math.random() + 1)} 1s ease-in-out infinite`
    Star.style.animationDuration = `${(Math.random() * 15) + 5}s`
    Star.style.boxShadow = `
        0px 0px 16px 2px ${Star.style.backgroundColor},
        0px 0px 80px 8px blue
        `
    Stars.appendChild(Star)

    TouchingTitle(Star)
}
for (let i = 0; i < 50; i++) {
    const Star = document.createElement('div')
    Star.classList.add('star', 'star2')
    Star.style.top = `${Math.random() * 100}%`
    Star.style.left = `${Math.random() * 100}%`
    Star.style.backgroundColor = `rgb(${(Math.random() * 100) + 50},${(Math.random() * 80) + 50},${(Math.random() * 150) + 100})`
    Star.style.opacity = '0'
    Star.style.animation = `StarsAnimation${Math.round(Math.random() + 1)} 1s ease-in-out infinite`
    Star.style.animationDuration = `${(Math.random() * 20) + 5}s`
    Star.style.boxShadow = `
        0px 0px 24px 3px ${Star.style.backgroundColor},
        0px 0px 120px 12px blue
        `
    Stars.appendChild(Star)

    TouchingTitle(Star)
}
for (let i = 0; i < 10; i++) {
    const Star = document.createElement('div')
    Star.classList.add('star', 'star3')
    Star.style.top = `${Math.random() * 100}%`
    Star.style.left = `${Math.random() * 100}%`
    Star.style.backgroundColor = `rgb(${(Math.random() * 150) + 50},${(Math.random() * 120) + 50},${(Math.random() * 50) + 200})`
    Star.style.opacity = '0'
    Star.style.animation = `StarsAnimation${Math.round(Math.random() + 1)} 1s ease-in-out infinite`
    Star.style.animationDuration = `${(Math.random() * 25) + 5}s`
    Star.style.boxShadow = `
        0px 0px 40px 5px ${Star.style.backgroundColor},
        0px 0px 200px 20px blue
        `
    Stars.appendChild(Star)

    TouchingTitle(Star)
}