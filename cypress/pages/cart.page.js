/**
 * Página /view_cart.
 */
class CartPage {
  selectors = {
    cartTable: '#cart_info',
    productRow: (productId) => `#cart_info tr#product-${productId}`,
    productName: '.cart_description h4 a',
    proceedToCheckoutButton: '.check_out',
  }

  shouldBeVisible() {
    cy.location('pathname').should('eq', '/view_cart')
    cy.get(this.selectors.cartTable).should('be.visible')
  }

  shouldContainProducts(products) {
    products.forEach(({ id, name }) => {
      cy.get(this.selectors.productRow(id)).find(this.selectors.productName).should('have.text', name)
    })
  }

  proceedToCheckout() {
    cy.get(this.selectors.proceedToCheckoutButton).click()
  }
}

export default new CartPage()
