import "./styles/reset/modern-normalize.css"
import "./styles/reset/custom-reset.css";
import "./styles/style.css"
import loadHome from './scripts/home'

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
})

loadHome()