import {googleAnimation, mozillaAnimation, edgeAnimation} from './animation.js'
import {smallerSide, figureCreation, browserName} from './function.js'


const container = document.querySelector('#container')
let size = smallerSide(container)
const browser = browserName()
const root = document.querySelector(":root")
let element = figureCreation(browser, container, size, root)

if (!element.classList.contains('no-support')) {

    window.addEventListener('resize', () => {
        let sizeNow = smallerSide(container)

        switch (browser) {
            case "edge": {
                if (root.style.getPropertyValue('--size') === size * 30 + 'px') {
                    root.style.setProperty('--size', sizeNow * 30 + 'px')
                } else {
                    root.style.setProperty('--size', sizeNow * 70 + 'px')
                }
                size = sizeNow
                break
            }
            case "google": {
                root.style.setProperty('--size', sizeNow * 70 + 'px')
                break
            }
            case "mozilla": {
                root.style.setProperty('--size', sizeNow * 50 + 'px')
                break
            }
            default:
                break
        }
    }, false)

    window.addEventListener('load', () => {
        switch (browser) {
            case "google":
                container.addEventListener('click', (event) => {
                    googleAnimation(element, root.style.getPropertyValue('--size'), event.target === element)
                }, false)
                break
            case "edge":
                container.addEventListener('click', (event) => {
                    edgeAnimation(root, size, event.target === element)
                }, false)
                break
            case "mozilla":
                container.addEventListener('click', (event) => {
                    mozillaAnimation(element, event.target === element)
                }, false)
                break
            default:
                break
        }
    }, false)

}