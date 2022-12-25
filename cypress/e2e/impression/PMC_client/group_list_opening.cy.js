describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('Group List page opening', () => {
         cy.contains('Group Management').click();
         cy.url().should('contains', 'https://staging.myimpression.piecestech.com/group-management/groupList');
        })
})