describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

     it('switch to My list view and check the patients', () => {

         cy.get('.mat-row:nth-child(3) .mat-icon').click();
         cy.get('.mat-row:nth-child(13) .mat-icon').click();
         cy.get('.mat-row:nth-child(17) .mat-icon').click();

         cy.get('.disabled .form-check-input').click();
 //       cy.get('.form-check-input:nth-child(4)').should('be.checked')
         cy.get('tbody tr.example-element-row').should('have.length', 3)

//         it('check table size', () => {
//                     cy.get('tbody tr.example-element-row').should('have.length', 10);
//                     cy.get('.form-check-input:nth-child(4)').should('be.checked')
  //                      })

        })
})




