/// <reference types="cypress" />

let searchValue;
describe("Telus search bar assignment", () => {
  it('use the search bar to input "Internet" and verify search results', () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.viewport("macbook-16");
    cy.visit("/");
    cy.get("#search-button").click().wait(3000);
    cy.get('[placeholder="Search TELUS.com"]').type("Internet"); //use the search bar to input the keyword "Internet."
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
      .find("ul.styles__ListContainer-sc-1aohvhp-6.jaVibZ") //find the list of articles inside the container
      .within(() => {
        // Apply actions only inside the container for the article links
        // Get all links inside the container and assert that there are at least 6 of them
        cy.get("a")
          .should("have.length.at.least", 6)
          .each(($link) => {
            // Check if each link has an href attribute ,that attribute is no empty and includes http (clickable)
            cy.wrap($link)
              .should("have.attr", "href")
              .and("not.be.empty")
              .and("include", "http");
          });
        cy.contains("a", "Internet speed test").click(); //click the desired link
      });
  });
});
