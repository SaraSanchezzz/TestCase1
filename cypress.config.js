const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 800,
  failOnStatusCode: false,
  pageLoadTimeout: 60000,
  responseTimeout:60000,

  
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'https://www.adidas.es/',
    
    setupNodeEvents(on, config) {    
    },
  },
});
