Feature: Login functionality
  The login page will function according to the user's credentials.

  Background: Open login page
    Given I open the login page

  @smoke @sprint1 @happy-path
  Scenario: Successful login
    When I enter a valid username "standard_user", the valid password "secret_sauce" and click the login button
    Then I should be on the inventory page

  @regression @sprint1 @sad-path
  Scenario: Blocked login
    When I enter a valid username "locked_out_user", the valid password "secret_sauce" and click the login button
    Then The page should display the error message "Epic sadface: Sorry, this user has been locked out."

  @regression @sprint1 @sad-path
  Scenario: Unsuccessful Username Login
    When A user enters incorrect credentials and clicks the login button
      | username | password     |
      | testname | secret_sauce |
    Then The page should display the error message "Epic sadface: Username and password do not match any user in this service"

  @regression @sprint1 @sad-path
  Scenario: Unsuccessful Password Login
    When A user enters incorrect credentials and clicks the login button
      | username      | password     |
      | standard_user | testpassword |
    Then The page should display the error message "Epic sadface: Username and password do not match any user in this service"
