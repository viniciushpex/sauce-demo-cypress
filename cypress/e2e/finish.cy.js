describe('finish', () => {
  
    //Executa uma compra até o fim
    it('Finish order', () => {
      cy.logIn('standard_user')
      cy.addToCart();
      cy.get('[data-test="checkout"]').click()
      cy.addInfo()
      cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack')
      cy.get('[data-test="inventory-item-price"]').contains('$29.99')
      cy.get('[data-test="subtotal-label"]').contains('$29.99')
      cy.get('[data-test="finish"]').click()
      cy.get('[data-test="complete-header"]').contains('Thank you for your order!')
      cy.get('[data-test="back-to-products"]').click()
      cy.get('[data-test="title"]').contains('Products')
    })
  })
