describe('LOGIN', () => {
  // visit site
  it('should visit the login page', () => {
    cy.visit('/login');
  });

  //credentials
  describe('CREDENTIALS', () => {
    // beforeEach(() => {
    //   //query button and trigger click
    //   cy.findByAttr('login-submit-button').as('submit');
    // });

    //only username present
    describe('ONLY USERNAME PRESENT AND LOGIN ATTEMPT MADE', () => {
      it('should stall the navigation', () => {
        //query username input and type something
        cy.findByAttr('login-username-input')
          .find('input')
          .as('username')
          .type('hello');
        //query button and trigger click
        cy.findByAttr('login-submit-button').as('submit').click();
        //verify path
        cy.location('pathname').should('eq', '/login');
        //access username input via alias and clear it
        cy.get('@username').clear();
      });

      //show error
      it('should show error', () => {
        cy.findByAttr('error-component').should('have.length', 1);
      });
    });

    //only password present
    describe('ONLY PASSWORD PRESENT AND LOGIN ATTEMPT MADE', () => {
      it('should stall the navigation', () => {
        //query password input and type something
        cy.findByAttr('login-password-input')
          .find('input')
          .as('password')
          .type('hello');
        //query button and trigger click
        cy.findByAttr('login-submit-button').click();
        //verify path
        cy.location('pathname').should('eq', '/login');
        //access password input via alias and clear it
        cy.get('@password').clear();
      });

      //show error
      it('should show error', () => {
        cy.findByAttr('error-component').should('have.length', 1);
      });
    });

    //show error
    describe('BOTH USERNAME AND PASSWORD ARE PRESENT AND LOGIN ATTEMPT MADE', () => {
      it('should redirect to the homepage', () => {
        cy.findByAttr('login-username-input')
          .find('input')
          .as('username')
          .type('hello');
        cy.findByAttr('login-password-input')
          .find('input')
          .as('password')
          .type('hello');
        cy.findByAttr('login-submit-button').click();
        cy.location('pathname').should('eq', '/pizzapals');
      });
    });
  });
});

//visit site
//credentials
//present
//click submit
//then go to the home page
//does not present
//detect errors
//cannot continue




