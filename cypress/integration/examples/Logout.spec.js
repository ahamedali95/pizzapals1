describe('LOGOUT', () => {
  it('should visit page', () => {
    cy.visit('/logout');
  });

  it('should redirect to login page upon "login again" button click', () => {
    cy.findByAttr('login-again-button').click();
    cy.location('pathname').should('eq', '/login');
  });
});