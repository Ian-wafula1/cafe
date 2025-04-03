import { createParent, createElement } from "./helpers";

export default function loadContact() {
    const mainContent = document.querySelector('#content')
    mainContent.innerHTML = ''
    const main = document.createElement('main')
    main.classList.add('contact')

    main.appendChild(createElement('h1', 'Let\'s talk'))
    main.appendChild(createParent('div', null,
        createParent('div', null, 
            createElement('h2', 'Café des Rêves'),
            createParent('div', null,
                createElement('h4', 'Nairobi'),
                createElement('p', 'Waiyaki way'),
                createElement('p', 'Nairobi, WW 96218')
            ),
            createParent('div', null,
                createElement('h4', 'Nakuru'),
                createElement('p', 'Jomo Kenyatta Avenue'),
                createElement('p', 'Nakuru, DK 42112')
            ),
            createParent('div', null, 
                createElement('p', '+254 712345678'),
                createElement('p', 'noreply@cafeDesReves.com')
            )
        ),

        (() => {
            const form = document.createElement('form')
            form.innerHTML = `
                        <div>
                            <label for="firstName">First Name (required) <input required placeholder="John" type="text" name="firstName" id="firstName"></label>
                            <label for="lastName">Last Name (required) <input required placeholder="Doe" type="text" name="lastName" id="lastName"></label>
                        </div>
                        <label for="email">Email (required) <input required placeholder="johndoe@example.com" type="email" name="email" id="email" required></label>
                        <label for="message">Enter a message (required)
                            <textarea required name="message" id="message"></textarea>
                        </label>
                        <input type="submit">
            `
            return form
        })()
    ))

    mainContent.appendChild(main)
}