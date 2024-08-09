class CheckOutStep1 {
  // Elements on the Checkout Step 1 page
  elements = {
    firsNameField: () => cy.get('[data-test="firstName"]'), // Selector for the first name input field
    lastNameField: () => cy.get('[data-test="lastName"]'), // Selector for the last name input field
    postalCodeField: () => cy.get('[data-test="postalCode"]'), // Selector for the postal code input field
    continueButton: () => cy.get('[data-test="continue"]'), // Selector for the continue button
  };

  // Enter the first name into the first name input field
  enterFirstName(firstName) {
    this.elements.firsNameField().type(firstName); // Method to type the first name into the input field
  }

  // Enter the last name into the last name input field
  enterLastName(lastName) {
    this.elements.lastNameField().type(lastName); // Method to type the last name into the input field
  }

  // Enter the postal code into the postal code input field
  enterPostalCode(postalCode) {
    this.elements.postalCodeField().type(postalCode); // Method to type the postal code into the input field
  }

  // Click on the continue button
  clickContinueButton() {
    this.elements.continueButton().click(); // Method to click the continue button
  }

  // Fill and submit the checkout form with provided details
  sendCheckoutForm(firstName, lastName, postalCode) {
    this.enterFirstName(firstName); // Enter the first name
    this.enterLastName(lastName); // Enter the last name
    this.enterPostalCode(postalCode); // Enter the postal code
    this.clickContinueButton(); // Click the continue button
  }
}

// Export an instance of CheckOutStep1
export const checkOutStep1 = new CheckOutStep1();
