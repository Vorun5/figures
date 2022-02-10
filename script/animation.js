function googleAnimation(el, size, click) {
    if (el.classList.contains("figure__google_default") && click) {
        el.classList.add("figure__google_click")
        el.style.transform = "translateX(calc((-1)*(100% + var(--size) * 1.2))) rotate(45deg)"
    } else {
        el.style.transform = "translateX(0) rotate(0)"
        el.classList.add("figure__google_default")
    }
}

function mozillaAnimation(el, click) {
    if (el.style.opacity === "1" && click) {
        el.style.opacity = "0"
    } else {
        el.style.opacity = "1"
    }
}

function edgeAnimation(el, size, click) {
    const defaultSize = size * 30 + 'px'
    const clickSize = size * 70 + 'px'

    if ((el.style.getPropertyValue('--size') === size * 30 + 'px') && click) {
        el.style.setProperty('--size', size * 70 + 'px')
    } else {
        el.style.setProperty('--size', size * 30 + 'px')
    }
}


export {googleAnimation, mozillaAnimation, edgeAnimation}