import { createElement, createParent } from "./helpers";

export default function loadMenu() {
    const main = document.createElement('main')
    main.classList.add('menu')

    const mainContent = document.querySelector('#content')
    mainContent.innerHTML = ''

    main.appendChild(
        createParent('div','hero', 
            createElement('p', 'DISCOVER'),
            createElement('p', 'Our Coffee Menu')
        )
    )

    main.appendChild(
        createParent('div', 'cards', 
            createParent('div','card', 
                createElement('h3', 'Classics'),

                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Latte'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', '')
                ),

                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Cappuccino'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', '')
                ),
                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Espresso'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', '')
                )         
            ),

            createParent('div','card', 
                createElement('h3', 'Signature Drinks'),

                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Cocoa Cappuccino'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', 'dark chocolate dusted cappuccino')
                ),

                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Espresso Tonic'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', 'extra shot espresso, ice, tonic water, lemon')
                ),
                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Tasting Flight'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', 'three pours of today\'s featured coffees - or - one coffee prepared three different ways')
                )         
            ),

            createParent('div','card', 
                createElement('h3', 'Seasonal Drinks'),

                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Vanilla Lavender Latte'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', 'espresso, milk, and our seasonal vanilla syrup infused with lavender and honey')
                ),

                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Earl Greyhound'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', 'cascara, grapefruit, tarragon, earl grey, elderflower tonic, mint')
                ),
                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Matcha Latte'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', 'organic stone milled matcha by song tea, milk')
                )         
            ),

            createParent('div','card', 
                createElement('h3', 'Tea by Song Tea'),

                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Snow Jasmine / Green / Sichuan, China'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', 'sweet nectar, lily')
                ),

                createParent('div', null, 
                    createParent('p', null,
                        createElement('span', 'Meadow / Caffeine-Free Botanical / San Francisco'),
                        createElement('span', '', 'underline'),
                        createElement('span', 'sh.500')
                    ),
                    createElement('p', 'tarragon, lemongrass, spearmint')
                )        
            )
        )
    )
    mainContent.appendChild(main)
}