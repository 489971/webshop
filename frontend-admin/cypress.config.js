const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "it2w6y",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
