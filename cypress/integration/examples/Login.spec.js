//AC
//credentials
  //present
    //clicks submit
    //then redirect to home page
  //are not present
    //clicks submit
    //should not continue to the home page
    //show errors

describe('LOGIN', () => {
  it('should visit the login page', () => {
    cy.visit("/login");
  });

  //credentials
  describe('CREDENTIALS', () => {
    //only username present
    describe('ONLY USERNAME PRESENT AND LOGIN ATTEMPT MADE', () => {
      it('should stall the navigation', () => {
        //query username input and type something
        cy.get('[data-test=login-username-input] > input').type("hello").as('username');
        //query button and trigger click
        cy.get('[data-test=login-submit-button]').click();
        //verify path
        cy.location('pathname').should('eq', '/login' );
        //access username input via alias and clear it
        cy.get('@username').clear();
      });

      //show error
      it('should show error', () => {
        cy.get('[data-test=error-component]').should('have.length', 1);
      });
    });

    describe('BOTH USERNAME AND PASSWORD ARE PRESENT AND LOGIN ATTEMPT MADE', () => {
      it('should redirect to the homepage', () => {
        cy.get('[data-test=login-username-input] > input').type("username");
        cy.get('[data-test=login-password-input] > input').type('password');

        cy.get('[data-test=login-submit-button]').click();
        cy.location('pathname').should('eq', '/pizzapals' );
      });
    });
  });
});





