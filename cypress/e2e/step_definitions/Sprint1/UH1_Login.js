import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

// Step: I open the login page
Given("I open the login page", () => {
  cy.visit("/"); // Navigate to the root URL to open the login page
});

// Step: I enter a valid username and password and click the login button
When(
  "I enter a valid username {string}, the valid password {string} and click the login button",
  (username, password) => {
    loginPage.submitLogin(username, password); // Call LoginPage method to submit valid credentials
  }
);

// Step: I should be on the inventory page
Then("I should be on the inventory page", () => {
  cy.url().should("contain", "/inventory.html"); // Assert that the URL contains '/inventory.html'
});

// Step: A user enters incorrect credentials and clicks the login button
When(
  "A user enters incorrect credentials and clicks the login button",
  (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username); // Log the username from the table
      cy.log(row.password); // Log the password from the table
      loginPage.submitLogin(row.username, row.password); // Call LoginPage method to submit incorrect credentials
    });
  }
);

// Step: The page should display the error message
Then("The page should display the error message {string}", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage); // Assert that the error message matches the expected message
});

