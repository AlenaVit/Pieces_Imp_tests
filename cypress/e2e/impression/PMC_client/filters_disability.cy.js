describe('login to the Impression', () => {
  beforeEach(() => {
  cy.setPMCCookie()
  cy.visit('https://staging.myimpression.piecestech.com')
  cy.viewport(1920, 1080)
  })

   it('check barrier disability filter', () => {
           cy.get('#ngb-panel-4-header .text-collapsed').click();
           cy.get('#mat-checkbox-4 span.mat-checkbox-inner-container').click();

           cy.wait(3000);
           cy.get('tbody tr.example-element-row').first().click();
           cy.get('tr.example-expanded-row').next().within(() => {
               cy.get('imp-barrier-section.marked .barrier-card-item p').should("have.text", " Disability ");
           });
       })
     })