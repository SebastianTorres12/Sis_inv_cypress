// Importa la función 'defineConfig' de Cypress
const { defineConfig } = require('cypress');
const codeCoverage = require('@cypress/code-coverage/task');

// Exporta la configuración de Cypress
module.exports = defineConfig({
  // Configuración específica para pruebas de extremo a extremo (e2e)
  e2e: {
    // Configuración de eventos del nodo
    setupNodeEvents(on, config) {
      // Aquí puedes implementar los listeners de eventos del nodo
      // Ejemplo: on('before:browser:launch', (browser = {}, launchOptions) => { ... });
    },

    // Define la URL base de tu aplicación
    // Esto permite que puedas usar rutas relativas en tus pruebas en lugar de la URL completa
    baseUrl: 'http://localhost:5173',

    // Especifica el archivo de soporte
    // Este archivo puede contener comandos personalizados
    supportFile: 'cypress/support/index.js',

    // Define el patrón de los archivos de especificación (spec)
    // Cypress buscará archivos de prueba que coincidan con este patrón en el directorio 'cypress/e2e'
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

  },
});
