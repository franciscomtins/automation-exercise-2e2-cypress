class HomePage {
  selectors = {
    slider: '#slider',
  }

  visit() {
    cy.visit('/')
  }

  shouldBeVisible() {
    cy.title().should('eq', 'Automation Exercise')
    cy.get(this.selectors.slider).should('be.visible')
  }
}

export default new HomePage()
