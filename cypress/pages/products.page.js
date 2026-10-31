/**
 * Página /products: listagem de produtos.
 */
class ProductsPage {
  selectors = {
    sectionTitle: '.features_items h2.title',
    productCard: '.features_items .product-image-wrapper',
    viewProductLink: '.choose a[href^="/product_details/"]',
  }

  shouldShowAllProducts() {
    cy.location('pathname').should('eq', '/products')
    cy.get(this.selectors.sectionTitle).should('be.visible').and('have.text', 'All Products')
    cy.get(this.selectors.productCard).should('have.length.greaterThan', 0)
  }

  viewFirstProduct() {
    cy.get(this.selectors.productCard).first().find(this.selectors.viewProductLink).click()
  }
}

export default new ProductsPage()
