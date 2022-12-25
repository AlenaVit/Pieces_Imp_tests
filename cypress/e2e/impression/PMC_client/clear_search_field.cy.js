describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('reLOS: clear search field', () => {

         cy.get('.form-control').click();
         cy.get('.form-control').type('bfdbfdbfd');
         cy.get('.search-box-icon').click();
         cy.get('.form-check-inline > a').click();
         cy.get('.form-control').should('have.value', '');
})
})