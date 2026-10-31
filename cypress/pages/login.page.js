/**
 * Página /login: contém os formulários "Login to your account" e "New User Signup!".
 */
class LoginPage {
  selectors = {
    signupForm: '.signup-form',
    signupName: '[data-qa="signup-name"]',
    signupEmail: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
  }

  visit() {
    cy.visit('/login')
  }

  shouldShowSignupForm() {
    cy.contains(`${this.selectors.signupForm} h2`, 'New User Signup!').should('be.visible')
  }

  startSignup({ name, email }) {
    cy.get(this.selectors.signupName).type(name)
    cy.get(this.selectors.signupEmail).type(email)
    cy.get(this.selectors.signupButton).click()
  }
}

export default new LoginPage()
