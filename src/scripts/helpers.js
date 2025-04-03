function createDiv(className, ...children) {
    const div = document.createElement('div')
    if (className) {
        div.classList.add(className)
    }
    if (children.length > 0) {
        children.forEach(child => div.appendChild(child))
    }
    return div
}

function createElement(elem, content, className) {
    const element = document.createElement(elem)
    if (className) element.classList.add(className)
    element.textContent = content
    return element
}

export {createDiv, createElement}