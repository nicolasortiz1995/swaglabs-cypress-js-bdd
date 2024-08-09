Feature: Complete Purchase Flow

    Performing the complete flow for purchasing products

    Background: Open login page and log in
        Given I open the login page
        When I enter a valid username "standard_user", the valid password "secret_sauce" and click the login button
        Then I should be on the inventory page
        When I add products randomly to the shopping cart
        And I click the shopping cart
        Then the names of the added products should appear on the shopping cart page

    @smoke @sprint4 @happy-path
    Scenario: Login, add products to cart, fill checkout form and complete purchase
        When I fill out the form and proceed to the next page
        Then I should be on the checkout overview page
        Then I should see the "Payment Information", "Shipping Information", and "Price Total"
        Then the checkout complete webpage should display the message "Your order has been dispatched"