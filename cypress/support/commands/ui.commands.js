import header from '../../pages/components/header.component'
import accountStatusPage from '../../pages/account-status.page'

/**
 * Exclui a conta logada pela UI e valida a confirmação.
 */
Cypress.Commands.add('deleteAccountViaUi', () => {
  header.deleteAccount()
  accountStatusPage.shouldShowAccountDeleted()
  accountStatusPage.continue()
})
