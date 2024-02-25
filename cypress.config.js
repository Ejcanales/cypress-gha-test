const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.telus.com/en",
    viewportHeight : 720,
    viewportWidth: 1280,
    experimentalUncaughtExceptionCapture: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
