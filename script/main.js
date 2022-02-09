const container = document.querySelector('#container')
let size = SmallerSide(container)
const browser = BrowserName()
const root = document.querySelector(":root")
let click = false
let element = figureCreation(browser, container, size, root)

window.addEventListener('resize', () => {
    let sizeNow = SmallerSide(container)
    switch (browser) {
        case "edge": {
            if (click) {
                root.style.setProperty('--size', sizeNow * 70 + 'px')
            } else {
                root.style.setProperty('--size', sizeNow * 30 + 'px')
            }
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
    let click = false
    switch (browser) {
        case "google":
            container.addEventListener('click', (event) => {
                console.log(event.target === element)
                if (click) {
                    click = false
                    googleAnimation(element)
                } else if(event.target === element) {
                    click = true
                    googleAnimation(element)
                }
            }, false)
            break
        case "edge":
                container.addEventListener('click', (event) => {
                    console.log(event.target === element)
                    if (click) {
                        click = false
                        edgeAnimation(element, size)
                    } else if(event.target === element) {
                        click = true
                        edgeAnimation(element, size)
                    }
                }, false)
            break
        case "mozilla":
            container.addEventListener('click', (event) => {
                console.log(event.target === element)
                if (click) {
                    click = false
                    mozillaAnimation(root)
                } else if(event.target === element) {
                    click = true
                    mozillaAnimation(root)
                }
            }, false)
            break
        default:
            break
    }
})