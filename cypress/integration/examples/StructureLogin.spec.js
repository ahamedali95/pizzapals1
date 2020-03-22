describe('LOGIN', () => {
  it('should visit the login page', () => {

  });

  //credentials
  describe('CREDENTIALS', () => {
    //only username present
    describe('ONLY USERNAME PRESENT AND LOGIN ATTEMPT MADE', () => {
      it('should stall the navigation', () => {
        //query username input and type something

        //query button and trigger click

        //verify path

        //access username input via alias and clear it

      });

      //show error
      it('should show error', () => {

      });
    });

    //only password present
    describe('ONLY PASSWORD PRESENT AND LOGIN ATTEMPT MADE', () => {
      it('should stall the navigation', () => {
        //query password input and type something

        //query button and trigger click

        //verify path

        //access password input via alias and clear it

      });

      //show error
      it('should show error', () => {

      });
    });

    describe('BOTH USERNAME AND PASSWORD ARE PRESENT AND LOGIN ATTEMPT MADE', () => {
      it('should redirect to the homepage', () => {

      });
    });
  });
});