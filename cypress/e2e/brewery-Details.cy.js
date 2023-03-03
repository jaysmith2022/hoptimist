describe('Brewery Details Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.openbrewerydb.org/breweries", {fixture: "breweries-stub"})
    cy.visit("http://localhost:3000/")
    cy.get(".drop-down").select("Indiana");
    cy.get(".submit-state").click();
    cy.get(".brewcard-container").children().first().click()
  })

  it("should show details of brewery", () => {
    cy.get(".single-brewery-name").contains("10-56 Brewing Company")
    cy.get(".single-brewery-address").contains("400 Brown Cir")
    cy.get(".single-brewery-phone").contains("6308165790")
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
})