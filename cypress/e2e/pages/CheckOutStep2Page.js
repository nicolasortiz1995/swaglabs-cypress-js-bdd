class CheckOutStep2 {
  // Elements on the Checkout Step 2 page
  elements = {
    paymentInformationLabel: () => cy.get('[data-test="payment-info-label"]'), // Selector for the payment information label element
    shippingInformationLabel: () => cy.get('[data-test="shipping-info-label"]'), // Selector for the shipping information label element
    priceTotalLabel: () => cy.get('[data-test="total-info-label"]'), // Selector for the total price label element
    finishButton: () => cy.get('[data-test="finish"]'), // Selector for the finish button element
  };

  // Click on the finish button
  clickFinishButton() {
    this.elements.finishButton().click(); // Method to click the finish button
  }

  // Get the text content from the payment information label
  getPaymentInformationText() {
    return this.elements.paymentInformationLabel().invoke("text"); // Method to retrieve the text content from the payment information label
  }

  // Get the text content from the shipping information label
  getShippingInformationText() {
    return this.elements.shippingInformationLabel().invoke("text"); // Method to retrieve the text content from the shipping information label
  }

  // Get the text content from the total price label
  getPriceTotalText() {
    return this.elements.priceTotalLabel().invoke("text"); // Method to retrieve the text content from the total price label
  }
}

// Export an instance of CheckOutStep2
export const checkOutStep2 = new CheckOutStep2();
