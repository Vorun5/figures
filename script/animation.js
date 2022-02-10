/**
 * @param {HTMLDivElement} el
 * @param {number} size
 * @param {boolean} click
 */
function googleAnimation(el, size, click) {
    if (el.classList.contains("figure__google_default") && click) {
        el.classList.remove("figure__google_default")
        el.classList.add("figure__google_click")
    } else {
        el.classList.remove("figure__google_click")
        el.classList.add("figure__google_default")
    }
}

/**
 * @param {HTMLDivElement} el
 * @param {boolean} click
 */
function mozillaAnimation(el, click) {
    if (el.classList.contains("figure__mozilla_default") && click) {
        el.classList.remove("figure__mozilla_default")
        el.classList.add("figure__mozilla_click")
    } else {
        el.classList.remove("figure__mozilla_click")
        el.classList.add("figure__mozilla_default")
    }
}

/**
 * @param {HTMLDivElement} root
 * @param {number} size
 * @param {boolean} click
 */
function edgeAnimation(root, size, click) {
    /** @type {string} */
    const defaultSize = size * 30 + 'px'
    /** @type {string} */
    const clickSize = size * 70 + 'px'

    if ((root.style.getPropertyValue('--size') === defaultSize) && click) {
        root.style.setProperty('--size', clickSize)
    } else {
        root.style.setProperty('--size', defaultSize)
    }
}


export {googleAnimation, mozillaAnimation, edgeAnimation}