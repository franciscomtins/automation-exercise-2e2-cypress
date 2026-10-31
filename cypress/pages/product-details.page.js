/**
 * Página /product_details/:id.
 */
class ProductDetailsPage {
  selectors = {
    productInformation: '.product-information',
    name: '.product-information h2',
    price: '.product-information > span > span',
  }

  // Campos exibidos no formato "<Rótulo>: <valor>".
  labeledFields = ['Category', 'Availability', 'Condition', 'Brand']

  shouldBeVisible() {
    cy.location('pathname').should('match', /^\/product_details\/\d+$/)
    cy.get(this.selectors.productInformation).should('be.visible')
  }

  shouldShowProductDetails() {
    cy.get(this.selectors.name).should('be.visible').and('not.be.empty')
    cy.get(this.selectors.price).should('be.visible').and('contain.text', 'Rs.')

    this.labeledFields.forEach((label) => {
      cy.contains(`${this.selectors.productInformation} p`, `${label}:`)
        .should('be.visible')
        .invoke('text')
        .should('match', new RegExp(`${label}:\\s*\\S+`))
    })
  }
}

export default new ProductDetailsPage()
