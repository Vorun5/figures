const container = document.querySelector('#container')
const figure = document.querySelector('#figure')

let size
if (container.clientHeight >= container.clientWidth) {
    size = container.clientWidth / 100
} else {
    size = container.clientHeight / 100
}


const browser = BrowserName()

const root = document.querySelector(":root")


// function googleAnimation() {
//     let i = 1
//     const rotateSteps = 7
//     const steps = 20
//     let timer = setTimeout(function run() {
//         i++;
//         if (i <= rotateSteps) {
//             const deg = i * (45 / rotateSteps)
//             console.log(deg)
//             //figure.style.display = "#000"
//             figure.style.transform = `translateX(0) rotate(${deg}deg) translateY(0)`
//         } else {
//             const x = (i - rotateSteps) * ((size * 70 * Math.sqrt(2) + 100) / (steps - rotateSteps))
//             console.log(x)
//             //figure.style.background = "red"
//             figure.style.transform = `translateX(${x}px) rotate(45deg) translateY(0)`
//         }
//         timer = setTimeout(run, 500);
//         if (i >= steps) {
//             clearTimeout(timer)
//         }
//     }, 5000 / steps);
// }

function googleAnimation() {
    const a1 = "5s cubic-bezier(0, 0, 1, 1) 1s 1 reverse none  google-animation"
    const a2 = "5s cubic-bezier(0, 0, 1, 1) 1s 1 normal none  google-animation"
    if (figure.style.animation === a2) {
        figure.style.animation = a1
    } else {
        figure.style.animation = a2
    }
}


function mozillaAnimation() {
    if (figure.style.opacity === "1") {
        figure.style.opacity = "0"
    } else {
        figure.style.opacity = "1"
    }
}

function edgeAnimation() {
    if (root.style.getPropertyValue('--size') === size * 30 + 'px') {
        root.style.setProperty('--size', 70 * size + 'px')
    } else {
        root.style.setProperty('--size', size * 30 + 'px')
    }
}

let animationFunction
switch (browser) {
    case "Mozilla Firefox":
        root.style.setProperty('--size', size * 50 + 'px')
        root.style.setProperty('--color', '#795bc7')
        figure.classList.add('figure__mozilla')
        figure.style.opacity = "1"
        animationFunction = mozillaAnimation
        break;
    case "Microsoft Edge":
        root.style.setProperty('--size', size * 30 + 'px')
        root.style.setProperty('--color', '#e74bab')
        figure.classList.add('figure__edge')
        animationFunction = edgeAnimation
        break;
    default:
        root.style.setProperty('--size', size * 70 + 'px')
        root.style.setProperty('--color', '#74e6ea')
        figure.classList.add('figure__google')
        animationFunction = googleAnimation
        break;
}


window.addEventListener('load', () => {
    container.addEventListener('click', animationFunction, [])
})