describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it(' "star" icon is highlighted when clicking', () => {

         cy.get('.mat-row:nth-child(3) .mat-icon').click();
         cy.get('.mat-row:nth-child(3) .mat-icon').should ('have.class', 'star-true')

        })
})