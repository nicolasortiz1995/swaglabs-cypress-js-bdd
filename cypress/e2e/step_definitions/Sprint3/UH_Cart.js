import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { cartPage } from "@pages/CartPage";

let addedProductNames = []; // Array to store names of added products
const randomCount = Cypress._.random(1, 6); // Generate a random number between 1 and 6

Given("I add products randomly to the shopping cart", () => {
  const addedProducts = []; // Array to keep track of added product indices

  // Loop to add randomCount number of products
  for (let i = 0; i < randomCount; i++) {
    let randomIndex;
    do {
      randomIndex = Cypress._.random(1, 6); // Assuming there are 6 products
    } while (addedProducts.includes(randomIndex));

    addedProducts.push(randomIndex);

    // Click 'Add to cart' button for the selected product
    cartPage.getProductAddToCartButton(randomIndex).click();

    // Get product name and add to addedProductNames array
    cartPage
      .getProductName(randomIndex)
      .invoke("text")
      .then((productName) => {
        addedProductNames.push(productName.trim()); // Store product name after trimming whitespace
      });
  }

  // Store added products for assertion in the next step
  cy.wrap(addedProducts).as("addedProducts");
});

Then("I click the shopping cart", () => {
  cartPage.clickShoppingCart(); // Click on the shopping cart button
});

Then(
  "the names of the added products should appear on the shopping cart page",
  () => {
    // Validate each added product name on the shopping cart page
    addedProductNames.forEach((productName) => {
      cartPage.nameValidation(productName);
    });
  }
);

Then(
  "the shopping cart badge should show the correct number of products",
  () => {
    cartPage.cartButtonIconValidation(randomCount); // Validate the shopping cart badge count
  }
);
