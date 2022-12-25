describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('switch to case manager view', () => {

         cy.get('.form-check-input:nth-child(2)').click();

         it('check table size', () => {
                     cy.get('tbody tr.example-element-row').should('have.length', 10);
                     cy.get('.form-check-input:nth-child(2)').should('be.checked')
                          })

        })
})