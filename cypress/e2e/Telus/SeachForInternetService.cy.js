/// <reference types="cypress" />

let searchValue;
describe("Telus search bar", () => {
  it('search for "Internet" and verify search results', () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.viewport("macbook-16");
    cy.visit("/");
    cy.get("#search-button").click().wait(3000);
    cy.get('[data-test="search-input"]').type("Internet"); //use the search bar to input the keyword "Internet."
    cy.get("li").contains("Internet speed").click().wait(3000); //select the 3rd option from the drop-down list by employing partial text matching
    cy.get('input[placeholder="Search"]')
      .invoke("val")
      .then((value) => {
        searchValue = value.trim();
        cy.get(".styles__SearchLabelContainer-sc-1uotvdz-0 div.css-1rynq56")
          .invoke("text")
          .should("have.string", searchValue); //compare the text in the search field with the heading of the search page
      });
    cy.get("div.css-1rynq56")
      .contains("Articles")
      .parent() // Move up to the parent container or element
      .next() // Select the next sibling, which is the container for the article links
      .within(() => {
        // Apply actions only within the container for the article links
        // Get all links within the container and assert that there are at least 6 of them
        cy.get("a")
          .should("have.length.at.least", 6)
          .each(($link) => {
            // Check if each link has an href attribute and that attribute is no empty (clickable)
            cy.wrap($link).should("have.attr", "href").and("not.be.empty");
          });
        cy.contains("a", "Internet speed test").click();
      });
  });
});
