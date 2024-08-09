import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { inventoryPage } from "@pages/InventoryPage";

// Step: I sort the filter by name from Z to A
Given("I sort the filter by name from Z to A", () => {
  inventoryPage.clickNameZA(); // Invoke method to sort by name Z to A
});

// Step: I sort the filter by name from A to Z
Given("I sort the filter by name from A to Z", () => {
  inventoryPage.clickNameAZ(); // Invoke method to sort by name A to Z
});

// Step: I sort the filter by price from cheapest to most expensive
Given("I sort the filter by price from cheapest to most expensive", () => {
  inventoryPage.clickNameLoHi(); // Invoke method to sort by price low to high
});

// Step: I sort the filter by price from most expensive to cheapest
Given("I sort the filter by price from most expensive to cheapest", () => {
  inventoryPage.clickNameHiLo(); // Invoke method to sort by price high to low
});

// Step: Verify the order of products
Then(
  "the first product should be {string}, the last product should be {string}",
  (firstProduct, lastProduct) => {
    inventoryPage.getFirstProductName().should("contain", firstProduct); // Assertion for first product name
    inventoryPage.getLastProductName().should("contain", lastProduct); // Assertion for last product name
  }
);
