class InventoryPage {
  // Elements on the InventoryPage
  elements = {
    sortNameZA: () => cy.get("select.product_sort_container").select("za"), // Selector and action for sorting by name Z to A
    sortNameAZ: () => cy.get("select.product_sort_container").select("az"), // Selector and action for sorting by name A to Z
    sortNameLoHi: () => cy.get("select.product_sort_container").select("lohi"), // Selector and action for sorting by price low to high
    sortNameHiLo: () => cy.get("select.product_sort_container").select("hilo"), // Selector and action for sorting by price high to low
    firstProductName: () =>
      cy.get(
        ':nth-child(1) > [data-test="inventory-item-description"] [data-test="inventory-item-name"]'
      ), // Selector for the name of the first product in the list
    lastProductName: () =>
      cy.get(
        ':nth-child(6) > [data-test="inventory-item-description"] [data-test="inventory-item-name"]'
      ), // Selector for the name of the last product in the list (assuming 6 products)
  };

  // Click to sort products by name Z to A
  clickNameZA() {
    this.elements.sortNameZA(); // Method to initiate sorting by name Z to A
  }

  // Click to sort products by name A to Z
  clickNameAZ() {
    this.elements.sortNameAZ(); // Method to initiate sorting by name A to Z
  }

  // Click to sort products by price low to high
  clickNameLoHi() {
    this.elements.sortNameLoHi(); // Method to initiate sorting by price low to high
  }

  // Click to sort products by price high to low
  clickNameHiLo() {
    this.elements.sortNameHiLo(); // Method to initiate sorting by price high to low
  }

  // Retrieve the name of the first product in the list
  getFirstProductName() {
    return this.elements
      .firstProductName()
      .invoke("text")
      .then((text) => text.trim()); // Method to retrieve and clean up the text of the first product's name
  }

  // Retrieve the name of the last product in the list
  getLastProductName() {
    return this.elements
      .lastProductName()
      .invoke("text")
      .then((text) => text.trim()); // Method to retrieve and clean up the text of the last product's name
  }
}

// Export an instance of InventoryPage
export const inventoryPage = new InventoryPage();
