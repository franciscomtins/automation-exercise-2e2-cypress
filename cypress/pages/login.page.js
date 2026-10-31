/**
 * Página /login: contém os formulários "Login to your account" e "New User Signup!".
 */
class LoginPage {
  selectors = {
    loginForm: '.login-form',
    loginEmail: '[data-qa="login-email"]',
    loginPassword: '[data-qa="login-password"]',
    loginButton: '[data-qa="login-button"]',
    loginError: '.login-form form p',
    signupForm: '.signup-form',
    signupName: '[data-qa="signup-name"]',
    signupEmail: '[data-qa="signup-email"]',
    signupButton: '[data-qa="signup-button"]',
    signupError: '.signup-form form p',
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

  shouldShowLoginError() {
    cy.get(this.selectors.loginError)
      .should('be.visible')
      .and('have.text', 'Your email or password is incorrect!')
  }

  shouldShowSignupForm() {
    cy.contains(`${this.selectors.signupForm} h2`, 'New User Signup!').should('be.visible')
  }

  startSignup({ name, email }) {
    cy.get(this.selectors.signupName).type(name)
    cy.get(this.selectors.signupEmail).type(email)
    cy.get(this.selectors.signupButton).click()
  }

  shouldShowEmailAlreadyExistsError() {
    cy.get(this.selectors.signupError)
      .should('be.visible')
      .and('have.text', 'Email Address already exist!')
  }
}

export default new LoginPage()
