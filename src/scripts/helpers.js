function createDiv(className, ...children) {
    createParent('div', className, ...children)
}

function createElement(elem, content, className) {
    const element = document.createElement(elem)
    if (className) element.classList.add(className)
    element.textContent = content
    return element
}

function createParent(elem, className, ...children) {
    const element = document.createElement(elem)
    if (className) element.classList.add(className)

    if (children.length > 0) children.forEach(child=> element.appendChild(child))

    return element
}
export {createDiv, createElement, createParent}