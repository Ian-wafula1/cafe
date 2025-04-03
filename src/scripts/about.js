import { createParent, createElement } from "./helpers";

export default function loadAbout() {
    const mainContent = document.querySelector('#content')
    mainContent.innerHTML = ''
    const main = document.createElement('main')
    main.classList.add('about')

    main.appendChild(createElement('p', `Nestled in the heart of the city, our café is a cosy retreat where rich aromas and warm ambiance create the perfect escape. We take pride in serving expertly crafted coffee, brewed from the finest beans, alongside a menu of fresh, locally sourced delights. Whether you're here for a quiet morning moment, a midday pick-me-up, or an evening unwind, our space is designed for comfort and connection. With a passion for quality and community, we invite you to relax, sip, and savor every experience. Step in and let the aroma of fresh coffee welcome you home. From the first pour to the last bite, every detail is thoughtfully prepared to delight your senses. Come and discover a place where every visit feels like a warm embrace.`))

    main.appendChild(createElement('div', ''))
    mainContent.appendChild(main)
}