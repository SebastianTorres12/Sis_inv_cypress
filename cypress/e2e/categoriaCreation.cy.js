// cypress/e2e/userCreation.cy.js

describe('Flujo de Creación de Categoria', () => {

    beforeEach(() => {
        // Inicia sesión con credenciales válidas
        cy.login('Sebas', 'LP251220');
        // Espera la redirección al dashboard
        cy.url().should('include', '/dashboard');
        cy.visit('/dashboard');
        cy.get('a[href="/dashCategoria"]', { timeout: 3000 }).click();
        cy.url().should('include', '/dashCategoria');
    });

    it('Debería crear categorias duplicadas', () => {
        cy.contains('Nueva Categoría').click();
        cy.get('input[name="nombre_categoria"]').type('Oficina');
        cy.get('button[type="submit"]').click();

        cy.checkConfirmationMessage('Categoría creada correctamente');


        cy.contains('Nueva Categoría').click();
        cy.get('input[name="nombre_categoria"]').type('Oficina');
        cy.get('button[type="submit"]').click();

        cy.checkConfirmationMessage('Categoría creada correctamente');

    });


   
});
