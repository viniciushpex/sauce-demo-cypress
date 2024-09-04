describe('login', () => {
  
  const password = 'secret_sauce'
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
    cy.get('[data-test="error-button"]')
  })

  Cypress.Commands.add('fazerLogin', (username) => {
    cy.visit('https://www.saucedemo.com')
    cy.title().should('eq', 'Swag Labs')
    cy.get('[data-test="username"]')
      .type(username)
    cy.get('[data-test="password"]')
      .type(password)
    cy.get('[data-test="login-button"]')
      .click()
  })
})