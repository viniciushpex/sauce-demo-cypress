// Preset para execução do login passando o username desejado
Cypress.Commands.add('logIn', (username) => {
    cy.visit('/')
    cy.title().should('eq', 'Swag Labs')
    cy.get('[data-test="username"]')
      .type(username)
    cy.get('[data-test="password"]')
      .type('secret_sauce')
    cy.get('[data-test="login-button"]')
      .click()
})

//Preset para adição de um produto no carrinho
Cypress.Commands.add('addToCart', () => {
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('[data-test="inventory-list"] > :nth-child(1)').should('be.visible')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').contains('1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack')
})

//Preset para inserção de dados no formulário de checkout
Cypress.Commands.add('addInfo', () => {
    cy.get('[data-test="title"]').contains('Checkout: Your Information')
    cy.get('[data-test="firstName"]').type('Vinicius')
    cy.get('[data-test="lastName"]').type('Pereira')
    cy.get('[data-test="postalCode"]').type('123456')
    cy.get('[data-test="continue"]').click()
})