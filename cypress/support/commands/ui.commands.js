import header from '../../pages/components/header.component'
import loginPage from '../../pages/login.page'
import signupPage from '../../pages/signup.page'
import accountStatusPage from '../../pages/account-status.page'

/**
 * Cadastra um novo usuário pelo menu "Signup / Login" e valida o usuário logado.
 */
Cypress.Commands.add('registerViaUi', (user) => {
  header.goToSignupLogin()
  loginPage.shouldShowSignupForm()
  loginPage.startSignup(user)

  signupPage.shouldShowAccountInformationForm()
  signupPage.fillAccountInformation(user)
  signupPage.fillAddressInformation(user)
  signupPage.submit()

  accountStatusPage.shouldShowAccountCreated()
  accountStatusPage.continue()
  header.shouldShowLoggedInAs(user.name)
})

/**
 * Faz login pelo menu "Signup / Login" e valida o usuário logado.
 */
Cypress.Commands.add('loginViaUi', (user) => {
  header.goToSignupLogin()
  loginPage.shouldShowLoginForm()
  loginPage.login(user)
  header.shouldShowLoggedInAs(user.name)
})

/**
 * Exclui a conta logada pela UI e valida a confirmação.
 */
Cypress.Commands.add('deleteAccountViaUi', () => {
  header.deleteAccount()
  accountStatusPage.shouldShowAccountDeleted()
  accountStatusPage.continue()
})
