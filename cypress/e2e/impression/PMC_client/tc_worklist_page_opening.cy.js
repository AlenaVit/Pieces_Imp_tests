describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('TC Worklist page opening', () => {
         cy.contains('TC Worklist').click();
         cy.url().should('contains', 'https://staging.myimpression.piecestech.com/patient-lists/tkc-worklist');
        })
})