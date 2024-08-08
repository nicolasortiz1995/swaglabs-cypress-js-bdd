class LoginPage {
  // Elements on the LoginPage
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'), // Selector for the username input field
    passwordInput: () => cy.get('[data-test="password"]'), // Selector for the password input field
    loginBtn: () => cy.get('[data-test="login-button"]'), // Selector for the login button
    errorMessage: () => cy.get('[data-test="error"]') // Selector for the error message element
  };

  // Type the provided username into the username input field
  typeUsername(username) {
    this.elements.usernameInput().type(username); // Method to type the username into the input field
  }

  // Type the provided password into the password input field
  typePassword(password) {
    this.elements.passwordInput().type(password); // Method to type the password into the input field
  }

  // Click on the login button
  clickLogin() {
    this.elements.loginBtn().click(); // Method to click the login button
  }

  // Enter the provided username and password and click on the login button
  submitLogin(username, password) {
    this.typeUsername(username); // Call method to type username
    this.typePassword(password); // Call method to type password
    this.clickLogin(); // Call method to click login button
  }
}

// Export an instance of LoginPage
export const loginPage = new LoginPage();
