// cypress/e2e/userCreation.cy.js

describe('Flujo de Prueba de roles', () => {

    it('Debería crear una categoria, producto y existencias', () => {
        cy.login('Sebas', 'LP251220');
        // Espera la redirección al dashboard
        cy.url().should('include', '/dashboard');
        cy.visit('/dashboard');
        cy.wait(3000);

        cy.get('a[href="/dashCategoria"]', { timeout: 3000 }).click();
        cy.url().should('include', '/dashCategoria');

        cy.contains('Nueva Categoría').click();
        cy.get('input[name="nombre_categoria"]').type('Varios');
        cy.get('button[type="submit"]').click();

        cy.checkConfirmationMessage('Categoría creada correctamente');

        cy.get('a[href="/dashProducto"]', { timeout: 3000 }).click();
        cy.url().should('include', '/dashProducto');
        cy.contains('Nuevo Producto').click();
        cy.get('div[role="combobox"]').click();
        cy.contains('li', 'Varios').click();
        cy.get('input[name="nombre_producto"]').type('Temperas');
        cy.get('input[name="precio_producto"]').type('3');
        cy.get('input[name="fecha_expiracion_producto"]').type('2025-12-20');
        cy.get('button[type="submit"]').click();

        cy.checkConfirmationMessage('Producto creado correctamente');
        cy.wait(3000);

        cy.get('a[href="/dashExistencia"]', { timeout: 3000 }).click();
        cy.url().should('include', '/dashExistencia');
        cy.contains('button', 'Nueva Existencia').click();

        // Abre el menú desplegable haciendo clic en el div
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
        cy.wait(3000);


    });

    



   
});
