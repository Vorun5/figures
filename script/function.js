function BrowserName() {
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

function figureCreation(browser, container, size, styleRoot) {
    let element
    switch (browser) {
        case "mozilla":
            element = document.createElement('div')
            container.appendChild(element)


            styleRoot.style.setProperty('--size', size * 50 + 'px')
            styleRoot.style.setProperty('--color', '#795bc7')
            element.classList.add('figure__mozilla')
            element.style.opacity = "1"
            break;
        case "edge":
            element = document.createElement('div')
            container.appendChild(element)


            styleRoot.style.setProperty('--size', size * 30 + 'px')
            styleRoot.style.setProperty('--color', '#e74bab')
            element.classList.add('figure__edge')
            break;
        case "google":
            element = document.createElement('div')
            container.appendChild(element)


            styleRoot.style.setProperty('--size', size * 70 + 'px')
            styleRoot.style.setProperty('--color', '#0b3436')
            element.classList.add('figure__google')
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

function googleAnimation(el) {
    el.style.animationPlayState = 'running'
    setTimeout(() => {
        el.style.animationPlayState = 'paused'
    }, 5000)
}


function mozillaAnimation(el) {
    if (el.style.opacity === "1") {
        el.style.opacity = "0"
    } else {
        el.style.opacity = "1"
    }
}

function edgeAnimation(el) {
    const defaultSize = size * 30 + 'px'
    const clickSize = size * 70 + 'px'
    if (el.style.getPropertyValue('--size') === defaultSize) {

        el.style.setProperty('--size', clickSize)
    } else {
        el.style.setProperty('--size', defaultSize)
    }
}

function SmallerSide(el) {
    if (el.clientHeight >= el.clientWidth) {
        return el.clientWidth / 100
    } else {
        return el.clientHeight / 100
    }
}