/**
 * Página /payment e confirmação do pedido.
 */
class PaymentPage {
  selectors = {
    nameOnCard: '[data-qa="name-on-card"]',
    cardNumber: '[data-qa="card-number"]',
    cvc: '[data-qa="cvc"]',
    expiryMonth: '[data-qa="expiry-month"]',
    expiryYear: '[data-qa="expiry-year"]',
    payButton: '[data-qa="pay-button"]',
    orderPlaced: '[data-qa="order-placed"]',
  }

  payWith(card) {
    cy.get(this.selectors.nameOnCard).type(card.nameOnCard)
    cy.get(this.selectors.cardNumber).type(card.number, { log: false })
    cy.get(this.selectors.cvc).type(card.cvc, { log: false })
    cy.get(this.selectors.expiryMonth).type(card.expiryMonth)
    cy.get(this.selectors.expiryYear).type(card.expiryYear)
    cy.get(this.selectors.payButton).click()
  }

  shouldShowOrderConfirmed() {
    cy.location('pathname').should('match', /^\/payment_done\//)
    cy.get(this.selectors.orderPlaced).should('be.visible').and('have.text', 'Order Placed!')
    cy.contains('p', 'Congratulations! Your order has been confirmed!').should('be.visible')
  }
}

export default new PaymentPage()
