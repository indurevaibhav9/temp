import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    supportFile: false,
    viewportWidth: 360,
    viewportHeight: 800,
    specPattern: "./cypress/e2e/*.cy.ts",
  },
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    viewportWidth: 360,
    viewportHeight: 800,
    specPattern: "./cypress/components/*.cy.ts",
  },
});
