const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require("fs");
const path = require("path");

/**
 * Setup node event listeners and preprocessor configurations for Cypress
 * @param {Function} on - Function to hook into various events Cypress emits
 * @param {Object} config - The resolved Cypress config
 * @returns {Object} - Updated Cypress config
 */
async function setupNodeEvents(on, config) {
  // Add Cucumber preprocessor plugin
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Add esbuild bundler with Cucumber plugin for preprocessing feature files
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Perform cleanup tasks before running tests
  on("before:run", () => {
    const screenshotsFolder = config.screenshotsFolder;
    const videosFolder = config.videosFolder;

    // Remove screenshots folder if it exists
    if (fs.existsSync(screenshotsFolder)) {
      fs.rmdirSync(screenshotsFolder, { recursive: true });
    }

    // Remove videos folder if it exists
    if (fs.existsSync(videosFolder)) {
      fs.rmdirSync(videosFolder, { recursive: true });
    }

    // Remove Mochawesome report directory if it exists
    const mochawesomeReportDir = path.join(
      config.projectRoot,
      "cypress",
      "report"
    );

    if (fs.existsSync(mochawesomeReportDir)) {
      fs.rmdirSync(mochawesomeReportDir, { recursive: true });
    }
  });

  return config;
}

// Export the Cypress configuration
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*/*.feature", // Pattern to locate feature files
    baseUrl: "https://www.saucedemo.com/", // Base URL for the application under test
    chromeWebSecurity: false, // Disable Chrome web security for cross-origin requests
    video: true, // Enable video recording of tests
    screenshotOnRunFailure: true, // Take screenshots on test failure
    trashAssetsBeforeRuns: true, // Clear screenshots and videos before each run
    env: {
      allureReuseAfterSpec: true, // Reuse Allure results after each spec
    },
    reporter: "mochawesome", // Use Mochawesome reporter for test results
    reporterOptions: {
      charts: true, // Enable charts in Mochawesome report
      overwrite: false, // Do not overwrite existing reports
      html: true, // Generate HTML report
      json: true, // Generate JSON report
      reportDir: "cypress/report/mochawesome-report", // Directory for Mochawesome reports
    },
  },
});
