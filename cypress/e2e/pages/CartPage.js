class CartPage {
  // Elements on the CartPage
  elements = {
    cartButton: () => cy.get('[data-test="shopping-cart-link"]'), // Selector for the cart button element
    cartButtonIcon: () => cy.get('[data-test="shopping-cart-badge"]'), // Selector for the cart button icon element
    checkoutButton: () => cy.get('[data-test="checkout"]'), // Selector for the checkout button element
  };

  // Get the 'Add to Cart' button for a product at a specific index
  getProductAddToCartButton(index) {
    return cy.get(`.inventory_item:nth-child(${index}) button.btn_inventory`); // Selector for the 'Add to Cart' button of a specific product
  }

  // Get the product name element for a product at a specific index
  getProductName(index) {
    return cy.get(`.inventory_item:nth-child(${index}) .inventory_item_name`); // Selector for the product name of a specific product
  }

  // Click on the shopping cart button
  clickShoppingCart() {
    this.elements.cartButton().click(); // Click action on the shopping cart button
  }

  // Validate that a product name exists on the page
  nameValidation(productName) {
    cy.contains(productName).should("exist"); // Assertion to check if the product name exists on the page
  }

  // Validate the text displayed on the cart button icon
  cartButtonIconValidation(randomCount) {
    this.elements.cartButtonIcon().should("have.text", String(randomCount)); // Assertion to check the text content of the cart button icon
  }

  // Click on the checkout button
  clickCheckout() {
    this.elements.checkoutButton().click(); // Click action on the checkout button
  }
}

// Export an instance of CartPage
export const cartPage = new CartPage();
