describe('login', () => {
  
  //Executar o login com um usuário standard
  it('Fazer login como standard', () => {
    cy.fazerLogin('standard_user')
  })

  //Executar o login com um usuário standard
  it('Fazer login com usuário bloqueado', () => {

    cy.fazerLogin('locked_out_user')
    cy.get('[data-test="error"]')
      .contains('Epic sadface: Sorry, this user has been locked out.')
    cy.get('[data-test="error-button"]')
      .click()
  })
})