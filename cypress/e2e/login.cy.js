// cypress/e2e/login.cy.js

describe('Pruebas de Login', () => {
  beforeEach(() => {
    // Visitar la página de login antes de cada prueba
    cy.visit('/');
  });

  it('Debería iniciar sesión con credenciales válidas', () => {
    // Usa el comando personalizado 'login'
    cy.login('Sebas', 'LP251220');
    cy.get('button[type="submit"]').click();
    // Verifica la redirección después del login
    //cy.url().should('include', '/dashboard');
  });

  it('Debería mostrar un mensaje de error con credenciales inválidas (401)', () => {
    // Usa el comando personalizado 'login' con credenciales inválidas
    cy.login('usuario@ejemplo.com', 'contraseña_incorrecta');
    cy.get('button[type="submit"]').click();


  });
});
