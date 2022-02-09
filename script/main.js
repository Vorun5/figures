const container = document.querySelector('#container')
const size = SmallerSide(container)
const browser = BrowserName()
const root = document.querySelector(":root")

let element = figureCreation(browser, container, size, root)
window.addEventListener('load', () => {
    switch (browser) {
        case "google":
            container.addEventListener('click', (event) => {
                googleAnimation(element)
            }, false)
            break
        case "edge":
            container.addEventListener('click', (event) => {
                edgeAnimation(element)
            }, false)
            break
        case "mozilla":
            container.addEventListener('click', (event) => {
                mozillaAnimation(element)
            }, false)
            break
        default:
            break
    }
})