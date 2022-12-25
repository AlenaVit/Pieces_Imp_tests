describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('reLOS: search by MRN', () => {

         cy.get('.form-control').click();
         cy.get('.form-control').type('8746380');
         cy.get('.search-box-icon').click();

         it('check table size', () => {
            cy.get('tbody tr.example-element-row').should('have.length', 1)
                 })
})
})

