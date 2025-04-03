import { createParent, createElement } from "./helpers";

export default function loadHome(){
    const mainContent = document.querySelector('#content')
    mainContent.innerHTML = ''
    const main = document.createElement('main')
    main.classList.add('home')

    main.appendChild(createParent('div','hero', 
        createElement('p', 'GOOD TIMES'),
        createElement('p', 'Great coffee')
    ))

    main.appendChild(createParent('div',null, 
        createElement('p', 'serving coffee everyday'),
        createParent('div', null,
            createParent('div',null, 
                createElement('p', 'Nairobi'),
                createElement('p','Waiyaki way')
            ),
            createParent('div',null, 
                createElement('p', 'Nakuru'),
                createElement('p','Jomo Kenyatta Avenue')
            ),
            createParent('div',null, 
                createElement('p', 'Hours'),
                createElement('p','Monday-Thursday: 8am-7pm'),
                createElement('p', 'Friday-Sunday: 8am-9pm')
            )
        )
    ))

    mainContent.appendChild(main)
}