describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

   it('check filter - Comfort Measures Only', () => {
          cy.get('#ngb-panel-3-header .text-collapsed').click();
          cy.get('#mat-checkbox-3 .mat-checkbox-inner-container').click();


          cy.wait(3000);
          cy.get('tbody tr.example-element-row').first().click();
          cy.get('tr.example-expanded-row').next().within(() => {
              cy.get('img.attribute-icon.marked.ng-star-inserted').should('have.attr', 'alt', 'Comfort Measures Only');
          });
      })
   })





