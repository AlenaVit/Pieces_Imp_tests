describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('reLOS: search with no results', () => {

         cy.get('.form-control').click();
         cy.get('.form-control').type('bfdbfdbfd');
         cy.get('.search-box-icon').click();

         it('check table size and "no results" text', () => {
            cy.get('tbody tr.example-element-row').should('have.length', 0);

            cy.get('.col-12:nth-child(2)').should('contains', 'There are no results to display');
         })

})
})