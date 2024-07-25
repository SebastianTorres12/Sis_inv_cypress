// cypress/e2e/userCreation.cy.js

describe('Flujo de Prueba de roles', () => {

    it('Debería visitar sitio Admin', () => {
        cy.login('Sebas', 'LP251220');
        // Espera la redirección al dashboard
        cy.url().should('include', '/dashboard');
        cy.visit('/dashboard');
        cy.wait(3000);
    });

    it('Debería visitar sitio Bodega', () => {
        cy.login('David', 'LP251220');
        // Espera la redirección al dashboard
        cy.url().should('include', '/dashboard');
        cy.visit('/dashboard');
        cy.wait(3000);
    });

    it('Debería visitar sitio Gerente', () => {
        cy.login('Matias', 'LP251220');
        // Espera la redirección al dashboard
        cy.url().should('include', '/dashboard');
        cy.visit('/dashboard');
        cy.wait(3000);
    });

    it('Debería visitar sitio Gestor', () => {
        cy.login('Pamela', 'LP251220');
        // Espera la redirección al dashboard
        cy.url().should('include', '/dashboard');
        cy.visit('/dashboard');
        cy.wait(3000);
    });


   
});
