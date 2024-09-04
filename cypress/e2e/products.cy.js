describe('products', () => {
    
    beforeEach(()=> {
        cy.viewport(1920, 1080)
    })

    context('listagem', () => {
        it('Validar exibição dos produtos', () => {
            cy.fazerLogin('standard_user')
            cy.get('[data-test="inventory-container"]').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(1)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(2)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(3)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(4)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(5)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(6)').should('be.visible')
        })
    })
    context('carrinho', () => {
        it('Inserir primeiro produto da lista ao carrinho', () => {
            cy.fazerLogin('standard_user')
            cy.addToCart()
        })
        it('Remover produto do carrinho', () => {
            cy.fazerLogin('standard_user')
            cy.addToCart()
            cy.get('[data-test="remove-sauce-labs-backpack"]')
                .click()
                .should('not.exist')
        })
        it('Remover produto do carrinho pela tela de inventário', () => {
            cy.fazerLogin('standard_user')
            cy.get('[data-test="inventory-container"]').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(1)').should('be.visible')
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
            cy.get('[data-test="shopping-cart-badge"]').contains('1')
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()
            cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
        })

    })

})
