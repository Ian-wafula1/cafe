import "./styles/reset/modern-normalize.css"
import "./styles/reset/custom-reset.css";
import "./styles/style.css"
import loadHome from './scripts/home'
import loadMenu from "./scripts/menu";
import loadAbout from "./scripts/about";
import loadContact from "./scripts/contact";

let currentPage;

document.querySelector('#home').addEventListener('click', e => {
    if (currentPage === 'home') return
    currentPage = 'home'
    loadHome()
})

document.querySelector('#menu').addEventListener('click', e => {
    if (currentPage === 'menu') return
    currentPage = 'menu'
    loadMenu()
})
document.querySelector('#about').addEventListener('click', e => {
    if (currentPage === 'about') return
    currentPage = 'about'
    loadAbout()
})
document.querySelector('#contact').addEventListener('click', e => {
    if (currentPage === 'contact') return
    currentPage = 'contact'
    loadContact()
})

document.querySelector('#home').dispatchEvent(new Event('click'))