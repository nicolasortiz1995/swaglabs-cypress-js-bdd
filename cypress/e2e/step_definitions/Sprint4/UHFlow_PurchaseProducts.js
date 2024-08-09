import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { checkOutStep1 } from "@pages/CheckOutStep1Page";
import { cartPage } from "@pages/CartPage";
import { checkOutStep2 } from "@pages/CheckOutStep2Page";
import { checkOutComplete } from "@pages/CheckOutCompletePage";
import { faker } from "@faker-js/faker";

// Generate random data for checkout form
let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let postalCode = faker.location.zipCode();

Given("I fill out the form and proceed to the next page", () => {
  cartPage.clickCheckout(); // Click on checkout button
  checkOutStep1.sendCheckoutForm(firstName, lastName, postalCode); // Fill out checkout form
});

Then("I should be on the checkout overview page", () => {
  cy.url().should("contain", "/checkout-step-two.html"); // Assert URL contains checkout step 2
});

Then(
  "I should see the {string}, {string}, and {string}",
  (paymentInformation, shippingInformation, priceTotal) => {
    // Validate payment information, shipping information, and total price
    checkOutStep2.getPaymentInformationText().should("contain", paymentInformation);
    checkOutStep2.getShippingInformationText().should("contain", shippingInformation);
    checkOutStep2.getPriceTotalText().should("contain", priceTotal);
    checkOutStep2.clickFinishButton(); // Click on finish button
  }
);

Then(
  "the checkout complete webpage should display the message {string}",
  (messageCompleted) => {
    checkOutComplete.getCompleteText().should("contain", messageCompleted); // Validate completion message
  }
);
