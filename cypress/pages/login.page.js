/**
 * Página /login: contém os formulários "Login to your account" e "New User Signup!".
 */
class LoginPage {
  selectors = {
    loginForm: '.login-form',
    loginEmail: '[data-qa="login-email"]',
    loginPassword: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',
    signupForm: '.signup-form',
    signupName: '[data-qa="signup-name"]',
    signupEmail: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
  }

  visit() {
    cy.visit('/login')
  }

  shouldShowLoginForm() {
    cy.contains(`${this.selectors.loginForm} h2`, 'Login to your account').should('be.visible')
  }

  login({ email, password }) {
    cy.get(this.selectors.loginEmail).type(email)
    cy.get(this.selectors.loginPassword).type(password, { log: false })
    cy.get(this.selectors.loginButton).click()
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
