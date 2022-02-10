/**
 * @return {string}
 */
function browserName() {
    /** @type {string} */
    const user = navigator.userAgent

    if (user.indexOf("Firefox") > -1) {
        return "mozilla";
    } else if (user.indexOf("Opera") > -1 || ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0)) {
        return "opera";
    } else if (user.indexOf("Trident") > -1) {
        return "ie";
    } else if (user.indexOf("Edge") > -1) {
        return "edge";
    } else if (user.indexOf("Chrome") > -1) {
        return "google";
    } else {
        return "unknown";
    }
}

/**
 * @param {string} browser
 * @param {HTMLDivElement} container
 * @param {number} size
 * @param {HTMLElement} styleRoot
 * @return {Element}
 */
function figureCreation(browser, container, size, styleRoot) {
    /** @type {HTMLDivElement} */
    let element
    switch (browser) {
        case "mozilla":
            element = document.createElement('div')
            container.appendChild(element)
            styleRoot.style.setProperty('--size', size * 50 + 'px')
            styleRoot.style.setProperty('--color', '#85c473')
            element.classList.add('figure__mozilla')
            element.classList.add("figure__mozilla_default")
            break;
        case "edge":
            element = document.createElement('div')
            container.appendChild(element)
            styleRoot.style.setProperty('--size', size * 30 + 'px')
            styleRoot.style.setProperty('--color', '#9b6a51')
            element.classList.add('figure__edge')
            break;
        case "google":
            element = document.createElement('div')
            container.appendChild(element)
            styleRoot.style.setProperty('--size', size * 70 + 'px')
            styleRoot.style.setProperty('--color', '#18a9e1')
            element.classList.add('figure__google')
            element.classList.add('figure__google_default')
            break;
        default:
            element = document.createElement('div')
            container.appendChild(element)
            element.classList.add("no-support")
            element.innerText = "Данный тип браузера не поддерживается"
            break;
    }

    return element
}

/**
 * @param {HTMLDivElement} el
 * @return {number}
 */
function smallerSide(el) {
    if (el.clientHeight >= el.clientWidth) {
        return el.clientWidth / 100
    } else {
        return el.clientHeight / 100
    }
}

export {browserName, figureCreation, smallerSide}