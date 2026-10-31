/**
 * Página /products: listagem de produtos.
 */
class ProductsPage {
  selectors = {
    sectionTitle: '.features_items h2.title',
    productCard: '.features_items .product-image-wrapper',
    viewProductLink: '.choose a[href^="/product_details/"]',
    productName: '.productinfo p',
    searchInput: '#search_product',
    searchButton: '#submit_search',
  }

  shouldShowAllProducts() {
    cy.location('pathname').should('eq', '/products')
    cy.get(this.selectors.sectionTitle).should('be.visible').and('have.text', 'All Products')
    cy.get(this.selectors.productCard).should('have.length.greaterThan', 0)
  }

  viewFirstProduct() {
    cy.get(this.selectors.productCard).first().find(this.selectors.viewProductLink).click()
  }

  search(term) {
    cy.get(this.selectors.searchInput).type(term)
    cy.get(this.selectors.searchButton).click()
  }

  shouldShowSearchResultsFor(term) {
    cy.get(this.selectors.sectionTitle).should('be.visible').and('have.text', 'Searched Products')
    cy.get(this.selectors.productCard)
      .should('have.length.greaterThan', 0)
      .and('be.visible')
      .find(this.selectors.productName)
      .each(($name) => {
        expect($name.text().toLowerCase()).to.contain(term.toLowerCase())
      })
  }
}

export default new ProductsPage()
