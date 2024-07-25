// cypress/e2e/userCreation.cy.js

describe('Flujo de Creación de Existencia', () => {

    beforeEach(() => {
        // Inicia sesión con credenciales válidas
        cy.login('Sebas', 'LP251220');
        // Espera la redirección al dashboard
        cy.url().should('include', '/dashboard');
        
    });
   
    it('Debería crear una nueva existencia con los campos llenos', () => {
        cy.visit('/dashboard');
        cy.get('a[href="/dashExistencia"]', { timeout: 1000 }).click();
        cy.url().should('include', '/dashExistencia');
        cy.contains('button', 'Nueva Existencia').click();

        cy.get('div[role="combobox"]').eq(0).click(); 
        cy.contains('li', 'Varios').click();

        cy.get('div[role="combobox"]').eq(1).click(); // Selecciona el div por el id
        cy.contains('li', 'Temperas').click();

        cy.get('div[role="combobox"]').eq(2).click(); // Selecciona el div por el id
        cy.contains('li', 'Milena Maldonado').click();

        cy.get('input[name="stockinicial_existencia"]').type('20'); 
        cy.get('input[name="preciocompra_existencia"]').type('2'); 
        cy.get('input[name="precioventa_existencia"]').type('2'); 
        cy.get('button[type="submit"]').click();

        //cy.checkConfirmationMessage('Existencia creada correctamente');


    });





});
