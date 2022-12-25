describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('Create new user form opening', () => {
         cy.contains('User Management').click();
         cy.contains('Create New User').click();
         cy.url().should('contains', 'https://staging.myimpression.piecestech.com/user-management/createuser');
        })
})