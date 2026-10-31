/**
 * Rodapé presente em todas as páginas, com o formulário de inscrição.
 */
class FooterComponent {
  selectors = {
    footer: '#footer',
    subscriptionTitle: '#footer .single-widget h2',
    // "susbscribe" é o id real (com erro de digitação) usado pelo site.
    subscriptionEmail: '#susbscribe_email',
    subscribeButton: '#subscribe',
    subscribeSuccess: '#success-subscribe',
  }

  scrollIntoView() {
    cy.get(this.selectors.footer).scrollIntoView()
  }

  shouldShowSubscription() {
    cy.get(this.selectors.subscriptionTitle).should('be.visible').and('have.text', 'Subscription')
  }

  subscribe(email) {
    cy.get(this.selectors.subscriptionEmail).type(email)
    cy.get(this.selectors.subscribeButton).click()
  }

  shouldShowSubscriptionSuccess() {
    cy.get(this.selectors.subscribeSuccess)
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!')
  }
}

export default new FooterComponent()
