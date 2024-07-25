// cypress/e2e/userCreation.cy.js

describe('Flujo de Creación de Usuario', () => {

    beforeEach(() => {
        // Inicia sesión con credenciales válidas
        cy.login('Sebas', 'LP251220');
        // Espera la redirección al dashboard
        cy.url().should('include', '/dashboard');
        // Navega al apartado de "Usuarios"
        cy.visit('/dashboard');
        cy.get('a[href="/dashUser"]', { timeout: 3000 }).click();
        cy.url().should('include', '/dashUser');
    });

    it('Debería crear un nuevo usuario con los campos llenos', () => {
        // Navega al formulario de nuevo usuario
        cy.contains('NUEVO USUARIO').click();

        // Llenar los datos del formulario y enviarlo
        // Abre el selector de roles y selecciona "Admin"
        cy.get('div.MuiSelect-select').click(); // Abre el menú de selección
        // Luego selecciona la opción
        cy.get('li[data-value="1"]').click();

        cy.get('input[name="nombre_usuario"]').type('Matias'); // Ingresa un nombre de usuario
        cy.get('input[name="clave_usuario"]').type('MT251220'); // Ingresa una clave
        cy.get('button[type="submit"]').click();

        // Verifica el mensaje de confirmación y la existencia del nuevo usuario
        cy.checkConfirmationMessage('Usuario creado correctamente');
        //cy.contains('NuevoUsuario').should('exist'); // Verifica la existencia en la tabla
    });


    it('Debería crear un nuevo usuario sin haber seleccionado el rol', () => {
        // Navega al formulario de nuevo usuario
        cy.contains('NUEVO USUARIO').click();

        // Llenar los datos del formulario y enviarlo

        cy.get('input[name="nombre_usuario"]').type('Matias'); // Ingresa un nombre de usuario
        cy.get('input[name="clave_usuario"]').type('MT251220'); // Ingresa una clave
        cy.get('button[type="submit"]').click();

        // Verifica el mensaje de confirmación y la existencia del nuevo usuario
        cy.checkConfirmationMessage('Debe seleccionar un rol');
        //cy.contains('NuevoUsuario').should('exist'); // Verifica la existencia en la tabla
    });

    it('Debería crear un nuevo usuario sin haber llenado nombre', () => {
        // Navega al formulario de nuevo usuario
        cy.contains('NUEVO USUARIO').click();

        // Llenar los datos del formulario y enviarlo
        // Abre el selector de roles y selecciona "Admin"
        cy.get('div.MuiSelect-select').click(); // Abre el menú de selección
        // Luego selecciona la opción
        cy.get('li[data-value="1"]').click();
        cy.get('input[name="clave_usuario"]').type('MT251220'); // Ingresa una clave
        cy.get('button[type="submit"]').click();

        // Verifica el mensaje de confirmación y la existencia del nuevo usuario
        cy.checkConfirmationMessage('El campo nombre de usuario no debe estar vacío');
        //cy.contains('NuevoUsuario').should('exist'); // Verifica la existencia en la tabla
    });


    it('Debería crear un nuevo usuario sin haber llenado la clave', () => {
        // Navega al formulario de nuevo usuario
        cy.contains('NUEVO USUARIO').click();

        // Llenar los datos del formulario y enviarlo
        // Abre el selector de roles y selecciona "Admin"
        cy.get('div.MuiSelect-select').click(); // Abre el menú de selección
        // Luego selecciona la opción
        cy.get('li[data-value="1"]').click();
        cy.get('input[name="nombre_usuario"]').type('Matias'); // Ingresa un nombre de usuario
        cy.get('button[type="submit"]').click();

        // Verifica el mensaje de confirmación y la existencia del nuevo usuario
        cy.checkConfirmationMessage('La clave debe tener al menos 8 caracteres, contener letras y números, al menos una mayúscula y dos números');
        //cy.contains('NuevoUsuario').should('exist'); // Verifica la existencia en la tabla
    });

});
