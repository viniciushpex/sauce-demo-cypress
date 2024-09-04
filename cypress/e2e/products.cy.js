describe('products', () => {

    //Testes relacionados ao contexto de listagem de produtos
    context('inventory', () => {

        //Valida a exibição de todos os produtos do inventário
        it('Validate product display', () => {
            cy.logIn('standard_user')
            cy.get('[data-test="inventory-container"]').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(1)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(2)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(3)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(4)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(5)').should('be.visible')
            cy.get('[data-test="inventory-list"] > :nth-child(6)').should('be.visible')
        })
    })

    //Testes relacionados ao contexto de carrinho
    context('cart', () => {

        //Valida a adição do primeiro produto do inventário ao carrinho
        it('Add the first product from the list to the cart', () => {
            cy.logIn('standard_user')
            cy.addToCart()
        })

        //Valida a remoção de um produto no carrinho
        it('Remove product from cart', () => {
            cy.logIn('standard_user')
            cy.addToCart()
            cy.get('[data-test="remove-sauce-labs-backpack"]')
                .click()
                .should('not.exist')
        })

        //Valida a remoção do produto no carrinho já na tela de inventário
        it('Remove product from cart via inventory screen', () => {
            cy.logIn('standard_user')
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
