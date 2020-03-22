describe('HOMEPAGE', () => {
  //stub GET request for pizzas
  describe('PIZZA RETRIEVAL', () => {
    it('should load pizzas if request-response is successful', () => {
      cy.server();
      cy.route('https://pizzapals.herokuapp.com/api/v1/pizzas', [{
        id: 2,
        name: 'olive',
        style: 'india',
        creator: 'ahamed',
        imageURL: 'ddd',
        createdTime: '2020-03-09T17:28:42',
        ingredients: []
      }])
        .as('getPizzas');
      cy.visit('/pizzapals');

      cy.findByAttr('pizza-list-component')
        .find('.segment')
        .find('.cards')
        .should('have.length', 1);
    });

    // it('should show error if either request or response is unsuccessful', () => {
    //   cy.server();
    //   cy.route('https://pizzapals.herokuapp.com/api/v1/pizzas', {
    //     method: 'GET',
    //     status: 500,
    //   });
    //   cy.visit('/pizzapals');
    //   cy.get('error-component').should('have.length', 1);
    // });

    describe('PIZZA CREATION', () => {
      it('', () => {
        [
          'homepage-ingredient-1-input',
          'homepage-ingredient-2-input',
          'homepage-pizza-name-input',
          'homepage-pizza-style-input',
          'homepage-pizza-creator-input',
          'homepage-pizza-image-url-input'
        ].forEach(field => {
          if (field === 'homepage-pizza-creator-input') {
            cy.findByAttr(field).find('.menu').select('Ahamed Abbas');
          } else {
            cy.findByAttr(field).type('hello');
          }
        });
      });
    });

    describe('LOGOUT', () => {
      it('should navigate the user to the logout page upon click', () => {
        cy.findByAttr('logout-button').click();
        cy.location('pathname').should('eq', '/logout');
      });

      it('should display successful logout alert message', () => {
        cy.findByAttr('error-component').should('have.length', 1);
      });
    });
  });
});