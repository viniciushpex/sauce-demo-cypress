describe('login', () => {
  
  it('Fazer login como standard', () => {
    const username = 'standard_user'
    cy.fazerLogin(username)
  })

  it('Fazer login com usuário bloqueado', () => {

    const username = 'locked_out_user'
    cy.fazerLogin(username)

    cy.get('[data-test="error"]')
      .contains('Epic sadface: Sorry, this user has been locked out.')
    cy.get('[data-test="error-button"]')
      .click()
  })
})