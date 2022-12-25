describe('login to the Impression', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://staging.myimpression.piecestech.com')
  })

  it('login to impression_receive OTP via email', () => {
     cy.visit('https://login.stage.piecestech.com/authenticationendpoint/login.do?client_id=V77w9iUivHARYpi3u45HcbbBFAoa&commonAuthCallerPath=%2Foauth2%2Fauthorize&forceAuth=false&nonce=xkQPWC32k4WAmjzBXGByn-XueqzhX5QczYS4mb0560E&passiveAuth=false&redirect_uri=https%3A%2F%2Fstaging.myimpression.piecestech.com%2Flogin%2Foauth2%2Fcode%2Fwso2&response_type=code&scope=openid+email+phone&state=X-wz-vubRGyr1EefAFAqJdEccX-90ef0CC3Hkh-JDZU%3D&tenantDomain=carbon.super&sessionDataKey=b3f6ffe7-0e2f-4155-a0cb-433302eb899c&relyingParty=V77w9iUivHARYpi3u45HcbbBFAoa&type=oidc&sp=Impression-Stage&isSaaSApp=true&authenticators=SAMLSSOAuthenticator%3Aportal.phhs.org%3Aadfs.parkviewmc.com%3Apieces-tech-test.onelogin.com%3Aadfs.stage.houstonmethodist.com%3BBasicAuthenticator%3ALOCAL');
     cy.get('#usernameUserInput').click();
     cy.get('#usernameUserInput').type('lena.stage.pmc3');
     cy.get('#password').click();
     cy.get('#password').type('Qwerty123!');
     cy.get('.primary').click();
     cy.get('#loginForm').submit();
     cy.url().should('contains', 'https://login.stage.piecestech.com/authenticationendpoint/login.do');
     cy.url().should('contains', 'https://login.stage.piecestech.com/emailotpauthenticationendpoint/emailotp.jsp');
    })
})
