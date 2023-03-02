describe('Brewery List Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.openbrewerydb.org/breweries", {fixture: "breweries-stub"})
    cy.visit("http://localhost:3000/")
    cy.get(".drop-down").select("Indiana");
    cy.get(".submit-state").click();
  })
    it("should have brewery cards", () => {
      cy.get(".brewcard-container").children().should("have.length", 3)
    })

    it("should be able to go back to home with button", () => {
      cy.get(".go-home").click()
      cy.url().should("include","http://localhost:3000/")
    })

    it("should be able to click header to go home", () => {
      cy.get(".header-wrapper").click()
      cy.url().should("include","http://localhost:3000/")
    })

    it("should be able to click footer to go home", () => {
      cy.get(".footer-name").click()
      cy.url().should("include","http://localhost:3000/")
    })

    it("should be able to click on a brewery", () => {
      cy.get(".brewcard-container").children().first().click()
      cy.url().should("include", "http://localhost:3000/breweries/10-56-brewing-company-knox")
    })
  })