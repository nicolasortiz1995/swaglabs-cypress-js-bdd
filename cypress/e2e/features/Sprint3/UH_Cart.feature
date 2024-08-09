Feature: Add random products to cart and verify products
  Select random products and verify them in the shopping cart.

  Background: Open login page and log in
    Given I open the login page
    When I enter a valid username "standard_user", the valid password "secret_sauce" and click the login button
    Then I should be on the inventory page

  @smoke @sprint3 @happy-path
  Scenario: Should add a random number of products to the cart and verify their names
    When I add products randomly to the shopping cart
    And I click the shopping cart
    Then the names of the added products should appear on the shopping cart page

  @regression @sprint3 @happy-path
  Scenario: Validate the number on the shopping cart button
    When I add products randomly to the shopping cart
    Then the shopping cart badge should show the correct number of products
