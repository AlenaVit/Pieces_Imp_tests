describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('User List page opening', () => {
         cy.contains('User Management').click();
         cy.url().should('contains', 'https://staging.myimpression.piecestech.com/user-management/userlist');
        })
})