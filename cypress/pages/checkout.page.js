import cartPage from './cart.page'

/**
 * Página /checkout: endereços, revisão do pedido e comentário.
 */
class CheckoutPage {
  selectors = {
    sectionHeading: '.step-one h2.heading',
    deliveryAddress: '#address_delivery',
    billingAddress: '#address_invoice',
    comment: 'textarea[name="message"]',
    placeOrderButton: 'a[href="/payment"]',
  }

  shouldBeVisible() {
    cy.location('pathname').should('eq', '/checkout')
    cy.contains(this.selectors.sectionHeading, 'Address Details').should('be.visible')
    cy.contains(this.selectors.sectionHeading, 'Review Your Order').should('be.visible')
  }

  shouldShowUserAddress(user) {
    const expectedLines = [
      `${user.firstName} ${user.lastName}`,
      user.company,
      user.address1,
      user.address2,
      `${user.city} ${user.state} ${user.zipcode}`,
      user.country,
      user.mobileNumber,
    ]

    ;[this.selectors.deliveryAddress, this.selectors.billingAddress].forEach((address) => {
      cy.get(address)
        .should('be.visible')
        .invoke('text')
        .then((text) => {
          const normalized = text.replace(/\s+/g, ' ')
          expectedLines.forEach((line) => expect(normalized).to.contain(line))
        })
    })
  }

  // A revisão do pedido reutiliza a mesma tabela da página do carrinho.
  shouldReviewProducts(products) {
    cartPage.shouldContainProducts(products)
  }

  placeOrder(comment) {
    cy.get(this.selectors.comment).type(comment)
    cy.get(this.selectors.placeOrderButton).click()
  }
}

export default new CheckoutPage()
