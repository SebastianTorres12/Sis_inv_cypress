// cypress/support/commands.js

// Define el comando personalizado 'login'
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/'); // Asegúrate de visitar la página de login
  cy.get('input[name="nombre_usuario"]').type(username);
  cy.get('input[name="clave_usuario"]').type(password);
  cy.get('button[type="submit"]').click();

});


// Comando personalizado para verificar mensajes de confirmación
Cypress.Commands.add('checkConfirmationMessage', (message) => {
  cy.contains(message).should('be.visible');
});
