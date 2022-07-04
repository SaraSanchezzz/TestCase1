Cypress.on('uncaught:exception', (err, runnable) => {
    /*returning false here prevents Cypress from -   retornar falso previene 
                 failing the test                 - de tests fallidos */                            
    
    return false
})
describe('Adidas', () => {
    beforeEach(() => {
        cy.forceVisit('https://www.adidas.es/') // forceVisit is a custom command addressed in commands.js to prevent from ESOCKETTIMEDOUT error when rendering URL.
        cy.get('[data-auto-id="glass-gdpr-default-consent-accept-button"]').click()
        
    })
    it('Searching, filtering and reviewing Adidas', () => {
        cy.get('[data-auto-id="searchinput"]').click().type('Ultraboost').type('{enter}') //Searching for Ultraboost - Buscar Ultraboost
        cy.get('.gl-modal__close > .gl-icon').click() //Closing pop up to subscribe into newsletter  - Cerrar pop para susbcribirse 
        cy.get('.filter-list__container___2giYo > [data-auto-id="plp-collapsable-sidebar-item-container_Sexo"] > .title___2tbSU').click() //Filtering by gender - Filtrar por genero
        cy.get('.open___1xmJM.horizontal___20tJH > .options_container___3bQrh > div > .plp-sidebar-item___2M2Z0 > :nth-child(1) > .active').contains('Mujer').click() //Women - Mujer
        cy.wait(3000)
        cy.get('.filter-list__container___2giYo > [data-auto-id="plp-collapsable-sidebar-item-container_Color"] > .title___2tbSU').click() //Filtering by color - Filtrar por color 
        cy.get('.open___1xmJM.horizontal___20tJH > .options_container___3bQrh > :nth-child(1) > .plp-sidebar-item___2M2Z0 > :nth-child(1) > .active').click()//colour:black - Negro 
        cy.get('.filter-list__container___2giYo > [data-auto-id="plp-collapsable-sidebar-item-container_Deportes"] > .title___2tbSU').click()//Filtering by sport: Running - Filtrar por deporte 
        cy.get('.open___1xmJM.horizontal___20tJH > .options_container___3bQrh > :nth-child(1) > .plp-sidebar-item___2M2Z0 > :nth-child(2) > .active > .gl-form-item > .gl-checkbox').contains('Running').click()//Running - Running
        cy.get('.collapse-controller___1Cxxi').click() //More filters + //filtros adicionales +
        cy.get('.filter-list__container___2giYo > [data-auto-id="plp-collapsable-sidebar-item-container_Superficie"] > .title___2tbSU').click()//Surface filtering - Filtrar por superficie
        cy.get('.open___1xmJM.horizontal___20tJH > .options_container___3bQrh > div > .plp-sidebar-item___2M2Z0 > :nth-child(1) > .active').click()//Surface: Road - superficie: Carretera
        cy.wait(8000)
        cy.get('.selected_filters___GMOar').contains('Mujer').should('be.visible')//'Woman' filter is visible - Filtro 'Mujer' es visible
        cy.wait(1000)
        cy.get('.selected_filters___GMOar').contains('Negro').should('be.visible')//'Black' filter is visible - Filtro 'Negro' es visible
        cy.wait(1000)
        cy.get('.selected_filters___GMOar').contains('Running').should('be.visible')//'Running' filter is visible - Filtro 'Running' es visible
        cy.wait(1000)
        cy.get('.selected_filters___GMOar').contains('Carretera').should('be.visible')//'Road' filter is visible - Filtro 'Carretera' es visible
        cy.wait(3000)
        cy.get('[data-auto-id="glass-product-card"]').eq(2).click()//Select 2nd result  - Seleccionar 2 opción
        cy.wait(3000)
        cy.get('.sizes-cta-controls___ZOuuj > .gl-link > span').click()//Open size guide - Abrir guía de tallas
        cy.get('.header_links___21q0Q > div > .gl-link').click()//How to know your size? - ¿Cómo saber mi talla?
        cy.wait(3000)
        cy.get('.gl-modal__main')//Fetch pop up - Seleccionar pop up
        cy.scrollTo('bottom') //Scroll bottom - desplazarse hacia abajo
        cy.get('.gl-vspace-bpall-small > .gl-link > span').click()//Back to beginning button - Vuelta al inicio
        cy.get('li[title="Pulgadas"] > .gl-menu__element').click()//Inches - Pulgadas
        cy.get('li[title="cm"] > .gl-menu__element').click()//Cm 
        cy.get('.gl-modal__close > .gl-icon').click()//close pop up - Cerrar pop up
        cy.get('#navigation-target-reviews > .gl-accordion > .gl-accordion__header').contains('Valoraciones').click() // Reviews - Valoraciones
        cy.wait(2000)
        cy.get('.ratings-header___5cUmh > :nth-child(2) > .gl-link').click()//Add a review - Escribir una reseña
        cy.wait(4000)
        cy.get('.gl-vspace-bpall-small')//Fetch pop up - Seleccionar pop up
        cy.scrollTo('top') //Scroll top
        cy.wait(4000)
        cy.get('input[id="star-overall-5"]').check({ force: true })//General rating (5 stars) - Valoracion general (5 estrellas)
        cy.wait(4000)
        cy.get('[type="radio"]').check('yes', { force: true })//Would you recommend it? YES - ¿Recomendarías este producto? SI
        cy.get('#reviewtext').type('Me encantan, con estas zapatillas terminas las maratones que ni te enteras.') //Share your opinion (min 50 characters) - Comparte tu opinion (min 50 caracteres)
        cy.get('#title').type('Geniales')//Share your opinion (1 word) - Comparte tu opinion (1 palabra)
        cy.get('#rating_Size_section > :nth-child(2) > .range-field__container > .range-field__container__input___2p5jx > .gl-form-item > .gl-radio-input > :nth-child(3) > .gl-radio-input__label').click() //Acorde con talla - Fiel a la talla
        cy.get('#rating_Width_section > :nth-child(2) > .range-field__container > .range-field__container__input___2p5jx > .gl-form-item > .gl-radio-input > :nth-child(3) > .gl-radio-input__label').click() //Ancho adecuado - Perfecto
        cy.get('input[id="star-rating_Comfort-3"]').check({ force: true }) // Rating confort: 3 stars - Valoracion de comodidad: 3 estrellas
        cy.get('input[id="star-rating_Quality-4"]').check({ force: true }) // Rating quality: 4 stars - Valoracion de calidad: 4 estrellas
        cy.get('input[id="usernickname"]').type('Ibai') // Nickname - Apodo
        cy.contains('Enviar reseña').click()//Send review button - Enviar reseña 
        cy.wait(6000)
        cy.contains('¡Espera! No puedes dejar en blanco este campo.').should('be.visible') // this field cannot be empty(email), is visible - el campo email no puede estar blanco!,es visible 
    })

})
