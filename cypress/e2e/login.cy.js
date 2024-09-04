describe('login', () => {
  
  //Executa o login com um usuário standard
  it('Login with standard user', () => {
    cy.logIn('standard_user')
  })

  //Executa o login com um usuário standard
  it('Login with blocked user', () => {

    cy.logIn('locked_out_user')
    cy.get('[data-test="error"]')
      .contains('Epic sadface: Sorry, this user has been locked out.')
    cy.get('[data-test="error-button"]')
      .click()
  })
})