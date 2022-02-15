/**
 * @param {HTMLDivElement} el
 * @param {number} size
 * @param {boolean} click
 */
function googleAnimation(el, size, click) {
    if (el.classList.contains("figure__google_default") && click) {
        el.classList.add("figure__google_click")
        el.style.transform = "translateX(calc((-1)*(100% + var(--size) * 1.2))) rotate(45deg)"
    } else {
        el.style.transform = "translateX(0) rotate(0)"
        el.classList.add("figure__google_default")
    }
}

/**
 * @param {HTMLDivElement} el
 * @param {boolean} click
 */
function mozillaAnimation(el, click) {
    if (el.style.opacity === "1" && click) {
        el.style.opacity = "0"
    } else {
        el.style.opacity = "1"
    }
}

/**
 * @param {HTMLDivElement} el
 * @param {number} size
 * @param {boolean} click
 */
function edgeAnimation(el, size, click) {
    /** @type {string} */
    const defaultSize = size * 30 + 'px'
    /** @type {string} */
    const clickSize = size * 70 + 'px'

    if ((el.style.getPropertyValue('--size') === defaultSize) && click) {
        el.style.setProperty('--size', clickSize)
    } else {
        el.style.setProperty('--size', defaultSize)
    }
}


export {googleAnimation, mozillaAnimation, edgeAnimation}
