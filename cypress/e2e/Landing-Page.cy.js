describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
})
it('should display a logo at the top of the page', () => {
  cy.get(".header-wrapper").contains("The Hoptimist")
})

it("should be able to make a selection from drop down", () => {
  cy.get('.drop-down').select('Indiana').should('have.value', 'Indiana')
})

it("should navigate to the breweries page", () => {
  cy.get(".drop-down").select("Indiana");
  cy.get(".submit-state").click();
  cy.url().should("include", "/breweries");
});
})