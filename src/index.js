import "./reset/modern-normalize.css"
import "./reset/custom-reset.css";
import "./style.css"

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
})
console.log('it works!')