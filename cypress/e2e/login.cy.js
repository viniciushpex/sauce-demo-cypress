describe('login', () => {
  
  it('Fazer login como standard', () => {
    cy.fazerLogin('standard_user')
  })

  it('Fazer login com usuário bloqueado', () => {

    cy.fazerLogin('locked_out_user')
    cy.get('[data-test="error"]')
      .contains('Epic saadface: Sorry, this user has been locked out.')
    cy.get('[data-test="error-button"]')
      .click()
  })
})