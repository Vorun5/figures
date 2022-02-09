console.log(navigator.userAgent)
const container = document.querySelector('#container')
const viewWidth = container.clientWidth
const viewHeight = container.clientHeight
let size

if (viewWidth >= viewHeight) {
    size = ( viewHeight / 100 ) * 70
} else {
    size = ( viewWidth / 100 ) * 70
}

const root = document.querySelector(':root')
root.style.setProperty('--size', size + 'px')
root.style.setProperty('--color', '#66eec9')
const figure = document.querySelector('#figure')
figure.classList.toggle('figures__google')
// class Figures {
//
//     constructor(selector) {
//         this.$figure = document.querySelector(selector)
//     }
//
//     show() {
//         this.$figure.style.display = 'block'
//     }
//
//     click() {
//         this.$figure.style.display = 'none'
//     }
// }
//
// class Square extends Figures {
//     constructor(options) {
//         super(options.selector)
//         this.size = options.size
//         // this.$figure.style.width = this.$figure.style.height = options.size
//         // this.$figure.style.backgroundColor = options.color
//         // this.$figure.classList.toggle('figures__google')
//     }
// }
//
// const googleFigure = new Square({
//     selector: '#figure',
//     size: 70
//     // size: size + 'px',
//     // color: '#58bde3'
// })



container.addEventListener('click', () => {
    console.log('click')
    console.log(figure.style.animationName === 'google-animation')
    if (figure.style.animationName === 'google-animation') {
        figure.style.animationDirection = 'reverse'
    } else {
        figure.style.animationName = 'google-animation'
    }
})