describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging-impression.piecestech.com')
  cy.viewport(1920, 1080)
  })

      it('reLOS: search by Last Name', () => {
             cy.get('.form-control').click();
             cy.get('.form-control').type('ARAGON');
             cy.get('.search-box-icon').click();
             cy.get('tbody tr.example-element-row').should('have.length', 1)
         })
})