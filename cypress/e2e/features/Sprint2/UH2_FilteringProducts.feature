Feature: Product Filters Functionality on the Products Page
    The products page should apply filters and maintain sorting.

    Background: Open login page and log in
        Given I open the login page
        When I enter a valid username "standard_user", the valid password "secret_sauce" and click the login button
        Then I should be on the inventory page

    @smoke @sprint2 @happy-path
    Scenario: Sort by name descending filter
        Given I sort the filter by name from Z to A
        Then the first product should be "T-Shirt (Red)", the last product should be "Sauce Labs Backpack"

    @smoke @sprint2 @happy-path
    Scenario: Sort by price ascending filter
        Given I sort the filter by price from cheapest to most expensive
        Then the first product should be "Sauce Labs Onesie", the last product should be "Sauce Labs Fleece Jacket"

    @regression @sprint2
    Scenario: Sort by price descending filter
        Given I sort the filter by price from most expensive to cheapest
        Then the first product should be "Sauce Labs Fleece Jacket", the last product should be "Sauce Labs Onesie"

    @regression @sprint2
    Scenario: Sort by name ascending filter
        Given I sort the filter by name from A to Z
        Then the first product should be "Sauce Labs Backpack", the last product should be "T-Shirt (Red)"