class CheckOutComplete {
  // Elements on the CheckOutComplete page
  elements = {
    completeText: () => cy.get('[data-test="complete-text"]'), // Selector for the complete text element
  };

  // Get the text content from the complete text element
  getCompleteText() {
    return this.elements.completeText().invoke("text"); // Method to retrieve the text content from the complete text element
  }
}

// Export an instance of CheckOutComplete
export const checkOutComplete = new CheckOutComplete();
