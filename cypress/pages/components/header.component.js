/**
 * Menu de navegação presente em todas as páginas.
 */
class HeaderComponent {
  selectors = {
    menu: '.shop-menu',
    home: '.shop-menu a[href="/"]',
    products: '.shop-menu a[href="/products"]',
    cart: '.shop-menu a[href="/view_cart"]',
    signupLogin: '.shop-menu a[href="/login"]',
    logout: '.shop-menu a[href="/logout"]',
    deleteAccount: '.shop-menu a[href="/delete_account"]',
  }

  goToProducts() {
    cy.get(this.selectors.products).click()
  }

  goToCart() {
    cy.get(this.selectors.cart).click()
  }

  goToSignupLogin() {
    cy.get(this.selectors.signupLogin).click()
  }

  logout() {
    cy.get(this.selectors.logout).click()
  }

  deleteAccount() {
    cy.get(this.selectors.deleteAccount).click()
  }

  shouldShowLoggedInAs(name) {
    cy.contains(`${this.selectors.menu} a`, 'Logged in as')
      .should('be.visible')
      .and('contain.text', name)
  }
}

export default new HeaderComponent()
