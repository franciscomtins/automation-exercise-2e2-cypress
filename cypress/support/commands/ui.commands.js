import header from '../../pages/components/header.component'
import loginPage from '../../pages/login.page'
import accountStatusPage from '../../pages/account-status.page'

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
