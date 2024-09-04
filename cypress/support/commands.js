// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fazerLogin', (username) => {
    cy.visit('/')
    cy.title().should('eq', 'Swag Labs')
    cy.get('[data-test="username"]')
      .type(username)
    cy.get('[data-test="password"]')
      .type('secret_sauce')
    cy.get('[data-test="login-button"]')
      .click()
})
Cypress.Commands.add('addToCart', (username) => {
    cy.get('[data-test="inventory-container"]').should('be.visible')
    cy.get('[data-test="inventory-list"] > :nth-child(1)').should('be.visible')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    cy.get('[data-test="shopping-cart-badge"]').contains('1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack')
})